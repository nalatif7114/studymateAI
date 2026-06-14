import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Message({ role, text }) {
  return (
    <div
      style={{
        background:
          role === "user"
            ? "#2563eb"
            : "#334155",
        padding: "15px",
        margin: "10px",
        borderRadius: "12px",
        lineHeight: "1.8"
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}