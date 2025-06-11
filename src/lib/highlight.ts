import Prism from "prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/themes/prism-tomorrow.css";


// Función para hacer clicables los enlaces en el HTML generado
function linkify(html: string): string {
  const urlRegex = /((https?:\/\/[^\s<]+))/g;
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

  return html
    .replace(urlRegex, '<a href="$1" target="_blank" class="text-blue-400 underline hover:text-blue-300">$1</a>')
    .replace(emailRegex, '<a href="mailto:$1" class="text-blue-400 underline hover:text-blue-300">$1</a>');
}

export function highlight(code: string): string {
  const rawHtml = Prism.highlight(code, Prism.languages.jsx, "jsx");
  return linkify(rawHtml);
}
