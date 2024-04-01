interface AppShellProps {
  children: React.ReactNode;
}

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="flex flex-col justify-between min-h-svh">
      <header className="h-[72px] bg-slate-800 flex justify-center items-center text-white text-2xl font-bold">
        Markdown-Editor
      </header>
      <div className="grow flex flex-col">{children}</div>
      <footer className="h-[72px] bg-slate-800 flex justify-center items-center text-white text-sm font-light">
        Created by James Bridge (2024)
      </footer>
    </div>
  );
};

export default AppShell;
