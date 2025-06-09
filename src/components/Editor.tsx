interface Props {
  content: string;
}

export default function Editor({ content }: Props) {
  return (
    <div className="flex-1 bg-[#1e1e1e] p-4 overflow-auto text-sm font-mono text-gray-200">
      <pre>
        <code>{content}</code>
      </pre>
    </div>
  );
}
