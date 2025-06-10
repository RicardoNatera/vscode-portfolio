"use client";

import { highlight } from "@/lib/highlight";

export function Editor({ content }: { content: string }) {
  return (
    <pre className="overflow-auto p-4 text-sm bg-[#1e1e1e] text-white rounded-md h-full">
      <code
        className="language-jsx"
        dangerouslySetInnerHTML={{ __html: highlight(content) }}
      />
    </pre>
  );
}
