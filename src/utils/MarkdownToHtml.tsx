import StarIcon from "../components/icons/StarIcon";

interface MarkdownToHtmlProps {
  markdown: string;
}

const classifyMarkdownLine = (line: string) => {
  if (/^#{1}[^#].*/.test(line)) {
    return "H1 title";
  } else if (/^#{2}[^#].*/.test(line)) {
    return "H2 title";
  } else if (/^#{3}[^#].*/.test(line)) {
    return "H3 title";
  } else if (/^\*{3,}/.test(line) || /^-{3,}/.test(line)) {
    return "Thematic break";
  } else if (/^\* .*/.test(line) || /^- .*/.test(line) || /^\+ .*/.test(line)) {
    return "Unordered list item";
  } else if (/^\d+\. .*/.test(line)) {
    return "Ordered list item";
  } else if (/^> .*/.test(line)) {
    return "Blockquote";
  } else if (/^!\[.*\]\(.*\)/.test(line)) {
    return "Image";
  } else if (/^\[.*\]\(.*\)/.test(line)) {
    return "Link";
  } else if (/^```/.test(line)) {
    return "Code block";
  } else if (line.trim() === "") {
    return "Empty line";
  } else {
    return "Paragraph or other";
  }
};

const selectElement = (lineType: string, line: string) => {
  switch (lineType) {
    case "H1 title":
      return (
        <h1 className="text-3xl text-orange-600 font-bold mb-6">
          {line.slice(2)}
        </h1>
      );
    case "H2 title":
      return (
        <h2 className="text-2xl text-orange-600 font-bold mb-4">
          {line.slice(3)}
        </h2>
      );
    case "H3 title":
      return (
        <h3 className="text-xl text-orange-600 font-bold mb-2">
          {line.slice(4)}
        </h3>
      );
    case "Thematic break":
      return <hr />;
    case "Unordered list item":
      return (
        <ul>
          <li className="flex items-center p-2">
            <StarIcon className="mr-2" />
            {line.slice(2)}
          </li>
        </ul>
      );
    case "Ordered list item":
      return (
        <ol>
          <li className="flex items-center p-2">
            <StarIcon className="mr-2" />
            {line.slice(2)}
          </li>
        </ol>
      );
    case "Blockquote":
      return <blockquote className="p-2 bg-gray-0">{line.slice(2)}</blockquote>;
    // case "Image":
    //   return `<img src="${line.match(/\((.*?)\)/)[1]}" alt="${
    //     line.match(/\[(.*?)\]/)[1]
    //   }">`;
    // case "Link":
    //   return `<a href="${line.match(/\((.*?)\)/)[1]}">${
    //     line.match(/\[(.*?)\]/)[1]
    //   }</a>`;
    // case "Code block":
    //   return <pre><code>;
    case "Empty line":
      return <br />;
    case "Paragraph or other":
      return <p>{line}</p>;
    default:
      return "";
  }
};

export const MarkdownToHtml = ({ markdown }: MarkdownToHtmlProps) => {
  const lineType = classifyMarkdownLine(markdown);
  return selectElement(lineType, markdown);
};
