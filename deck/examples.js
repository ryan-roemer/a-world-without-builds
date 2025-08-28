/* global fetch:false */
/**
 * Get all examples as source.
 */

const EXAMPLES_PATHS = {
  legacy: {
    code: "./examples/legacy/users.js",
    html: "./examples/legacy/index.html",
  },
  modern: {
    code: "./examples/modern/users.js",
    html: "./examples/modern/index.html",
  },
  react: {
    code: "./examples/react/users.js",
    html: "./examples/react/index.html",
  },
  typescript: {
    code: "./examples/typescript/users.ts",
    html: "./examples/typescript/index.html",
  },
};

export const getExamples = async () => {
  const examples = {};

  for (const [key, { code, html }] of Object.entries(EXAMPLES_PATHS)) {
    examples[key] = {
      code: await fetch(code).then((res) => res.text()),
      html: await fetch(html)
        .then((res) => res.text())
        .then((html) => {
          // Get scripts from control comment.
          const scripts = html
            .replace(/^[\s\S]*?<!-- scripts -->\n/gm, "")
            .replace(/<\/body>[\s\S]*$/gm, "")
            .trimEnd();

          // Use first indent to dedent rest of the lines.
          const indent = scripts.match(/^\s*/)?.[0] ?? "";
          return scripts.replace(new RegExp(`^${indent}`, "gm"), "");
        }),
    };
  }

  return examples;
};
