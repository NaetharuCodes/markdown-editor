export const saveMarkdown = (markdown: string): void => {
  const blob = new Blob([markdown], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "markdown.md";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const formatMarkdown = (markdown: string): string[] => {
  return markdown.split("\n");
};
