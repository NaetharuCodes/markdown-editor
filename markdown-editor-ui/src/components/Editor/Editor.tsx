import styles from "./Editor.module.css";

interface EditorProps {
  markdown: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Editor = ({ markdown, onChange }: EditorProps) => {
  return (
    <textarea
      className={`${styles.editor} text-mono`}
      value={markdown}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Editor;
