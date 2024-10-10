export const htmlFormatter = (rawString: string): string => {
  const lines = rawString.split(/\r?\n/);
  let isCodeBlock = false;
  let isBlockQuote = false;
  let isOrderedList = false;
  let isUnorderedList = false;
  let htmlOutput = "";
  let codeBlockContent = "";
  let blockQuoteContent = "";
  let orderedListContent = "";
  let unorderedListContent = "";

  const elementMap: { [key: string]: (content: string) => string } = {
    "# ": (content) => `<h1 className="h1">${content.slice(2)}</h1>`,
    "## ": (content) => `<h2 className="h2">${content.slice(3)}</h2>`,
    "### ": (content) => `<h3 className="h3">${content.slice(4)}</h3>`,
    "#### ": (content) => `<h4 className="h4">${content.slice(5)}</h4>`,
    "##### ": (content) => `<h5 className="h5">${content.slice(6)}</h5>`,
    "###### ": (content) => `<h6 className="h6">${content.slice(7)}</h6>`,
  };

  const processBlockQuote = () => {
    if (blockQuoteContent) {
      htmlOutput += `<blockquote>${blockQuoteContent.trim()}</blockquote>\n`;
      blockQuoteContent = "";
      isBlockQuote = false;
    }
  };

  const processOrderedList = () => {
    if (orderedListContent) {
      htmlOutput += `<ol>${orderedListContent}</ol>\n`;
      orderedListContent = "";
      isOrderedList = false;
    }
  };

  const processUnorderedList = () => {
    if (unorderedListContent) {
      htmlOutput += `<ul>${unorderedListContent}</ul>\n`;
      unorderedListContent = "";
      isUnorderedList = false;
    }
  };

  for (const line of lines) {
    if (line.trim() === "```") {
      if (isCodeBlock) {
        htmlOutput += `<pre><code className="codeblock">${codeBlockContent.trim()}</code></pre>\n`;
        codeBlockContent = "";
        isCodeBlock = false;
      } else {
        processBlockQuote();
        processOrderedList();
        processUnorderedList();
        isCodeBlock = true;
      }
      continue;
    }

    if (isCodeBlock) {
      codeBlockContent += `${line}\n`;
      continue;
    }

    if (line.startsWith(">")) {
      if (!isBlockQuote) {
        processOrderedList();
        processUnorderedList();
        isBlockQuote = true;
      }
      blockQuoteContent += `${line.slice(1).trim()}\n`;
      continue;
    } else if (isBlockQuote) {
      processBlockQuote();
    }

    const orderedListMatch = line.match(/^\d+\.\s(.+)/);
    if (orderedListMatch) {
      if (!isOrderedList) {
        processBlockQuote();
        processUnorderedList();
        isOrderedList = true;
      }
      orderedListContent += `<li>${orderedListMatch[1]}</li>`;
      continue;
    } else if (isOrderedList) {
      processOrderedList();
    }

    const unorderedListMatch = line.match(/^[-*+]\s(.+)/);
    if (unorderedListMatch) {
      if (!isUnorderedList) {
        processBlockQuote();
        processOrderedList();
        isUnorderedList = true;
      }
      unorderedListContent += `<li>${unorderedListMatch[1]}</li>`;
      continue;
    } else if (isUnorderedList) {
      processUnorderedList();
    }

    const matchedElement = Object.keys(elementMap).find((key) =>
      line.startsWith(key)
    );

    if (matchedElement) {
      processBlockQuote();
      processOrderedList();
      processUnorderedList();

      htmlOutput += elementMap[matchedElement](line) + "\n";
    } else if (line.trim() !== "") {
      processBlockQuote();
      processOrderedList();
      processUnorderedList();
      htmlOutput += `<p>${line}</p>\n`;
    }
  }

  // Handle any unclosed elements
  if (isCodeBlock && codeBlockContent) {
    htmlOutput += `<pre><code className="codeblock">${codeBlockContent.trim()}</code></pre>\n`;
  }
  processBlockQuote();
  processOrderedList();
  processUnorderedList();

  return htmlOutput.trim();
};
