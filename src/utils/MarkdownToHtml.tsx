import DOMPurify from "dompurify";

interface MarkdownToHtmlProps {
  markdown: string;
}

const MarkdownToHtml = ({ markdown }: MarkdownToHtmlProps) => {
  const lines = markdown.split("\n");
  let inCodeBlock = false;
  let inList = false;
  let html = "";

  lines.forEach((line) => {
    if (line.startsWith("###")) {
      html += `<h3 class="text-orange-600 text-lg font-bold mb-2">${line.replace(
        "###",
        ""
      )}</h3>`;
    } else if (line.startsWith("##")) {
      html += `<h2 class="text-orange-600 text-xl font-bold mb-2">${line.replace(
        "##",
        ""
      )}</h2>`;
    } else if (line.startsWith("#")) {
      html += `<h1 class="text-orange-600 text-2xl font-bold mb-4">${line.replace(
        "#",
        ""
      )}</h1>`;
    } else if (line.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      html += line.replace(
        "```",
        inCodeBlock
          ? "<code><pre class='bg-slate-700 p-2 text-xs whitespace-pre-wrap break-words my-6'>"
          : "</pre></code>"
      );
    } else if (line.startsWith("-")) {
      if (!inList) {
        inList = true;
        html += "<ul class='my-6 mx-6'>";
      }
      html += `<li class='list-disc pr-2'>${line.replace("-", "")}</li>`;
    } else {
      if (inList) {
        inList = false;
        html += "</ul>";
      } else if (inCodeBlock) {
        html += `${line}<br />`;
      } else {
        html += `<p class="mb-2">${line}</p>`;
      }
    }
  });

  const cleanHtml = DOMPurify.sanitize(html);

  return (
    <div
      className="bg-slate-900 text-slate-200 mx-4 grow"
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
};

export default MarkdownToHtml;
