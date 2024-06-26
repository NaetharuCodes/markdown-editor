interface TabProps {
  tabTitles: string[];
  onClick: (tabTitle: string) => void;
  activeTab: string;
}

const Tabs = ({ tabTitles, onClick, activeTab }: TabProps) => {
  return (
    <div className="flex  w-full bg-slate-200">
      {tabTitles.map((tabTitle) => (
        <button
          className={`grow flex justify-center items-center p-2 ${
            tabTitle === activeTab
              ? "bg-slate-900 text-white font-bold"
              : "bg-slate-950 text-white font-bold"
          }`}
          key={tabTitle}
          onClick={() => onClick(tabTitle)}
        >
          {tabTitle}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
