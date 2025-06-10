import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/themes/prism-tomorrow.css";

export function highlight(code: string): string {
  return Prism.highlight(code, Prism.languages.jsx, "jsx");
}
