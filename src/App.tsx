import { useState } from "react";
import AppShell from "./components/AppShell";
import Tabs from "./components/Tabs";

function App() {
  const [activeTab, setActiveTab] = useState("Editor");

  return (
    <AppShell>
      <Tabs
        tabTitles={["Editor", "Markdown"]}
        onClick={(tab) => setActiveTab(tab)}
        activeTab={activeTab}
      />
    </AppShell>
  );
}

export default App;
