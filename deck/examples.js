/* global fetch:false */
/**
 * Get all examples as source.
 */

const EXAMPLES_PATHS = {
  Legacy: {
    code: "./examples/legacy/users.js",
    html: "./examples/legacy/index.html",
  },
  Modern: {
    code: "./examples/modern/users.js",
    html: "./examples/modern/index.html",
  },
  React: {
    code: "./examples/react/users.js",
    html: "./examples/react/index.html",
  },
  TypeScript: {
    code: "./examples/typescript/users.ts",
    html: "./examples/typescript/index.html",
  },
};

export const getExamples = async () => {
  const examples = {};

  for (const [key, { code, html, background }] of Object.entries(
    EXAMPLES_PATHS,
  )) {
    examples[key.toLocaleLowerCase()] = {
      name: key,
      background,
      path: html.replace("index.html", ""),
      codeFileName: code.split("/").pop(),
      code: await fetch(code).then((res) => res.text()),
      htmlFileName: html.split("/").pop(),
      html: await fetch(html)
        .then((res) => res.text())
        .then((html) => {
          const scripts = [];
          const [, ...parts] = html.split("<!-- scripts -->");
          for (let part of parts) {
            if (part.trimStart().startsWith("<")) {
              part = part.replace(/<\/body>[\s\S]*$/gm, "").trimEnd();

              scripts.push(part);
            }
          }

          return scripts;
        }),
    };
  }

  return examples;
};
