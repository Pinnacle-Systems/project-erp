import { describe, expect, it } from "vitest";
import * as ts from "typescript";

const repoRoot = ts.sys.getCurrentDirectory();
const atomicControlNames = new Set(["Button", "TextField", "SelectField"]);
const scanRoots = ["packages", "apps/storybook/stories"];
const cssScanRoots = ["packages", "apps/storybook", ".storybook"];
const sourceExtensions = new Set([".tsx"]);
const cssExtensions = new Set([".css"]);

type Finding = {
  filePath: string;
  line: number;
  message: string;
  snippet: string;
};

const formatFindings = (findings: readonly Finding[]) =>
  findings
    .map(
      (finding) =>
        `${finding.filePath}:${finding.line} - ${finding.message}\n  ${finding.snippet}`,
    )
    .join("\n\n");

const getFiles = (roots: readonly string[], extensions: ReadonlySet<string>): string[] =>
  roots
    .flatMap((root) => {
      const directory = joinPath(repoRoot, root);
      return ts.sys.directoryExists(directory)
        ? ts.sys.readDirectory(directory, [...extensions])
        : [];
    })
    .sort();

const joinPath = (...segments: readonly string[]) => segments.join("/").replace(/\/+/g, "/");

const toRelativePath = (filePath: string) =>
  filePath.startsWith(`${repoRoot}/`) ? filePath.slice(repoRoot.length + 1) : filePath;

const lineForPosition = (sourceFile: ts.SourceFile, position: number) =>
  sourceFile.getLineAndCharacterOfPosition(position).line + 1;

const singleLineSnippet = (sourceFile: ts.SourceFile, node: ts.Node) =>
  node.getText(sourceFile).replace(/\s+/g, " ").trim();

const jsxTagName = (name: ts.JsxTagNameExpression): string | undefined => {
  if (ts.isIdentifier(name)) {
    return name.text;
  }

  if (ts.isPropertyAccessExpression(name)) {
    return name.name.text;
  }

  return undefined;
};

const getAttribute = (
  attributes: ts.JsxAttributes,
  name: string,
): ts.JsxAttribute | undefined =>
  attributes.properties.find(
    (property): property is ts.JsxAttribute =>
      ts.isJsxAttribute(property) &&
      ts.isIdentifier(property.name) &&
      property.name.text === name,
  );

const stringValuesFromExpression = (node: ts.Node | undefined): string[] => {
  if (!node) {
    return [];
  }

  if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
    return [node.text];
  }

  if (ts.isTemplateExpression(node)) {
    return [
      node.head.text,
      ...node.templateSpans.flatMap((span) => [
        ...stringValuesFromExpression(span.expression),
        span.literal.text,
      ]),
    ];
  }

  return node.getChildren().flatMap(stringValuesFromExpression);
};

const classNameValues = (attribute: ts.JsxAttribute | undefined): string[] => {
  if (!attribute?.initializer) {
    return [];
  }

  if (ts.isStringLiteral(attribute.initializer)) {
    return [attribute.initializer.text];
  }

  if (ts.isJsxExpression(attribute.initializer)) {
    return stringValuesFromExpression(attribute.initializer.expression);
  }

  return [];
};

// Tailwind width utilities on controls should be expressed with the component
// width API. This intentionally does not match max-w-* or min-w-* layout helpers.
const widthClassPattern = /(?:^|\s)(?:[\w-]+:)*!?w-(?:\[[^\]]+\]|[^\s"']+)/g;

const widthClasses = (className: string) =>
  [...className.matchAll(widthClassPattern)].map((match) => match[0].trim());

const hasWidthClass = (className: string) => widthClasses(className).length > 0;

const containsAtomicControl = (node: ts.Node): boolean => {
  if (
    (ts.isJsxElement(node) &&
      atomicControlNames.has(jsxTagName(node.openingElement.tagName) ?? "")) ||
    (ts.isJsxSelfClosingElement(node) &&
      atomicControlNames.has(jsxTagName(node.tagName) ?? ""))
  ) {
    return true;
  }

  return node.getChildren().some(containsAtomicControl);
};

const collectDirectControlWidthFindings = (
  sourceFile: ts.SourceFile,
  filePath: string,
): Finding[] => {
  const findings: Finding[] = [];

  const visit = (node: ts.Node) => {
    if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
      const tagName = jsxTagName(node.tagName);

      if (tagName && atomicControlNames.has(tagName)) {
        const classNameAttribute = getAttribute(node.attributes, "className");
        const classes = classNameValues(classNameAttribute).filter(hasWidthClass);

        for (const className of classes) {
          findings.push({
            filePath,
            line: lineForPosition(sourceFile, classNameAttribute?.getStart(sourceFile) ?? node.getStart(sourceFile)),
            message: `${tagName} uses Tailwind width class ${widthClasses(className).join(", ")}. Use the component width prop instead.`,
            snippet: singleLineSnippet(sourceFile, node),
          });
        }
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return findings;
};

const collectWrapperShimFindings = (
  sourceFile: ts.SourceFile,
  filePath: string,
): Finding[] => {
  const findings: Finding[] = [];

  const visit = (node: ts.Node) => {
    if (ts.isJsxElement(node) && jsxTagName(node.openingElement.tagName) === "div") {
      const classNameAttribute = getAttribute(node.openingElement.attributes, "className");
      const classes = classNameValues(classNameAttribute).filter(hasWidthClass);

      if (classes.length > 0 && node.children.some(containsAtomicControl)) {
        findings.push({
          filePath,
          line: lineForPosition(sourceFile, classNameAttribute?.getStart(sourceFile) ?? node.getStart(sourceFile)),
          message: `Wrapper div uses Tailwind width class ${classes.flatMap(widthClasses).join(", ")} around an atomic control. Move sizing to Button/TextField/SelectField width props.`,
          snippet: singleLineSnippet(sourceFile, node.openingElement),
        });
      }
    }

    ts.forEachChild(node, visit);
  };

  visit(sourceFile);
  return findings;
};

const parseSourceFile = (filePath: string) =>
  ts.createSourceFile(
    filePath,
    ts.sys.readFile(filePath, "utf8") ?? "",
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );

const collectJsxFindings = (filePath: string): Finding[] => {
  const sourceFile = parseSourceFile(filePath);
  const relativePath = toRelativePath(filePath);

  return [
    ...collectWrapperShimFindings(sourceFile, relativePath),
    ...collectDirectControlWidthFindings(sourceFile, relativePath),
  ];
};

// Bare control selectors are global enough to bypass the component width API.
// Scoped layout classes are allowed; this check targets selector lists that
// include button/input/select type selectors and declare width/inline-size.
const globalControlWidthRulePattern =
  /(^|})\s*([^{}]*\b(?:button|input|select)\b[^{}]*)\{([^{}]*(?:^|[;\s])(?:width|inline-size)\s*:[^{}]*)\}/gms;

const collectGlobalCssFindings = (filePath: string): Finding[] => {
  const source = ts.sys.readFile(filePath, "utf8") ?? "";
  const findings: Finding[] = [];

  for (const match of source.matchAll(globalControlWidthRulePattern)) {
    const selector = match[2].trim();
    const block = match[3].trim();
    const start = match.index ?? 0;

    findings.push({
      filePath: toRelativePath(filePath),
      line: source.slice(0, start).split("\n").length,
      message: `Global control selector "${selector}" declares width. Use component width props or scoped layout containers instead.`,
      snippet: `${selector} { ${block.replace(/\s+/g, " ")} }`,
    });
  }

  return findings;
};

describe("sizing governance", () => {
  it("rejects wrapper width shims and direct width classes around atomic controls", () => {
    const findings = getFiles(scanRoots, sourceExtensions).flatMap(collectJsxFindings);

    expect(formatFindings(findings)).toBe("");
  });

  it("rejects global CSS width rules for controls", () => {
    const findings = getFiles(cssScanRoots, cssExtensions).flatMap(collectGlobalCssFindings);

    expect(formatFindings(findings)).toBe("");
  });

  it("catches forbidden sizing fixtures while allowing layout-owned sizing", () => {
    const sourceFile = ts.createSourceFile(
      "fixture.tsx",
      `
        const BadWrapper = () => <div className="w-36"><SelectField /></div>;
        const BadClass = () => <Button className="w-full">Save</Button>;
        const GoodLayout = () => <Button width="fill" className="flex-1">Save</Button>;
        const GoodRegion = () => <div className="min-w-0 flex-1"><ContentRegion /></div>;
      `,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TSX,
    );

    const findings = [
      ...collectWrapperShimFindings(sourceFile, "fixture.tsx"),
      ...collectDirectControlWidthFindings(sourceFile, "fixture.tsx"),
    ];

    expect(findings.map((finding) => finding.message)).toEqual([
      expect.stringContaining("Wrapper div uses Tailwind width class w-36"),
      expect.stringContaining("Button uses Tailwind width class w-full"),
    ]);
  });

  it("catches forbidden global CSS fixtures", () => {
    const css = "button, input, select { width: max-content; }";
    const fixturePath = joinPath(repoRoot, "tools/.sizing-governance-fixture.css");
    const findings: Finding[] = [];

    for (const match of css.matchAll(globalControlWidthRulePattern)) {
      findings.push({
        filePath: toRelativePath(fixturePath),
        line: 1,
        message: `Global control selector "${match[2].trim()}" declares width. Use component width props or scoped layout containers instead.`,
        snippet: match[0].trim(),
      });
    }

    expect(findings).toHaveLength(1);
    expect(findings[0].message).toContain("button, input, select");
  });
});
