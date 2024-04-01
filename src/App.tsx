import { useState } from "react";
import AppShell from "./components/AppShell";
import Tabs from "./components/Tabs";

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
        <textarea
          value={markdown}
          onChange={handleMarkdownChange}
          name="Editor"
          className="w-full grow p-4"
        ></textarea>
      </div>
      <div
        id="markdown"
        className={`${activeTab === "Editor" ? "hidden" : "flex"}`}
      >
        Markdown
      </div>
    </AppShell>
  );
}

export default App;
