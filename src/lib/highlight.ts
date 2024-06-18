import { getHighlighter, setCDN } from "shiki";
import grammar from "./grammar-sway.json";

setCDN("/shiki");

export async function highlightSwayCode(code: string) {
  const highlighter = await getHighlighter({
    theme: "css-variables",
    paths: {
      wasm: "/",
    },
    langs: [
      "javascript",
      {
        id: "sway",
        scopeName: "source.sway",
        grammar: grammar as any,
        path: "",
      },
    ],
  });
  return highlighter.codeToHtml(code, { lang: "sway" });
}
