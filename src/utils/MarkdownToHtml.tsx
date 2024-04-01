import DOMPurify from "dompurify";

interface MarkdownToHtmlProps {
  markdown: string;
}

const MarkdownToHtml = ({ markdown }: MarkdownToHtmlProps) => {
  const lines = markdown.split("\n");
  let inCodeBlock = false;
  let html = "";

  lines.forEach((line) => {
    if (line.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      html += line.replace(
        "```",
        inCodeBlock ? "<code><pre>" : "</pre></code>"
      );
    } else {
      html += inCodeBlock ? line : `<p>${line}</p>`;
    }
  });

  const cleanHtml = DOMPurify.sanitize(html);

  return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
};

export default MarkdownToHtml;
