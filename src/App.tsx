import { useEffect, useState } from "react";
import AppShell from "./components/AppShell";
import Tabs from "./components/Tabs";
import { saveMarkdown } from "./utils/markdown";
import { MarkdownToHtml } from "./utils/MarkdownToHtml";

function App() {
  const [activeTab, setActiveTab] = useState("Editor");
  const [markdown, setMarkdown] = useState("");
  const [formattedMarkdown, setFormattedMarkdown] = useState([""]);

  const handleMarkdownChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMarkdown(event.target.value);
  };

  useEffect(() => {
    console.log(markdown);
    setFormattedMarkdown(markdown.split("\n"));
  }, [markdown]);

  useEffect(() => {
    console.log(formattedMarkdown);
  }, [formattedMarkdown]);

  return (
    <AppShell>
      <Tabs
        tabTitles={["Editor", "Markdown"]}
        onClick={(tab) => setActiveTab(tab)}
        activeTab={activeTab}
      />
      <div
        id="editor"
        className={`${
          activeTab === "Markdown" ? "hidden" : "flex flex-col  grow"
        }`}
      >
        <button onClick={() => saveMarkdown(markdown)}>Save Markdown</button>
        <textarea
          value={markdown}
          onChange={handleMarkdownChange}
          name="Editor"
          className="w-full grow p-4"
        ></textarea>
      </div>
      <div
        id="markdown"
        className={`${activeTab === "Editor" ? "hidden" : "flex"} flex-col m-4`}
      >
        {formattedMarkdown.map((line, index) => (
          <MarkdownToHtml key={index} markdown={line} />
        ))}
      </div>
    </AppShell>
  );
}

export default App;
