import { useState } from "react";
import AppShell from "./components/AppShell";
import Tabs from "./components/Tabs";
import { saveMarkdown } from "./utils/markdown";
import MarkdownToHtml from "./utils/MarkdownToHtml";

function App() {
  const [activeTab, setActiveTab] = useState("Editor");
  const [markdown, setMarkdown] = useState("");

  const handleMarkdownChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMarkdown(event.target.value);
  };

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
        <MarkdownToHtml markdown={markdown} />
      </div>
    </AppShell>
  );
}

export default App;
