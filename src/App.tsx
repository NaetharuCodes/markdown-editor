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
          activeTab === "Markdown" ? "hidden" : "flex flex-col grow mt-10"
        } `}
      >
        <button
          type="button"
          className="bg-slate-400 p-2 w-[400px] mx-auto mb-10 hover:bg-slate-500 text-black font-bold duration-200"
          onClick={() => saveMarkdown(markdown)}
        >
          Save Markdown
        </button>

        {/* Label for screen reader */}
        <label htmlFor="editor" className="text-lg font-bold mb-2 hidden">
          Markdown Editor
        </label>
        <textarea
          id="editor"
          value={markdown}
          onChange={handleMarkdownChange}
          name="Editor"
          className="w-full grow p-4 bg-slate-950 text-slate-200"
        ></textarea>
      </div>
      <div
        id="markdown"
        className={`${
          activeTab === "Editor" ? "hidden" : "flex"
        } flex-col mt-10 px-6 bg-slate-950`}
      >
        <MarkdownToHtml markdown={markdown} />
      </div>
    </AppShell>
  );
}

export default App;
