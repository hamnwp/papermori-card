import { useEffect, useState } from "react";
import "./SelectPaperPage.css";

type PaperTheme = {
  id: string;
  topBottomColor: string;
  centerColor: string;
};

type Props = {
  paper: PaperTheme;
  setPaper: React.Dispatch<React.SetStateAction<PaperTheme>>;
  goNext: () => void;
  goHome: () => void;
};

const themes: PaperTheme[] = [
  { id: "1", topBottomColor: "#7FB0E8", centerColor: "#F0DD7B" },
  { id: "2", topBottomColor: "#FFBFBF", centerColor: "#CD6238" },
  { id: "3", topBottomColor: "#008371", centerColor: "#D1D366" },
  { id: "4", topBottomColor: "#D0CBEB", centerColor: "#CC5F36" },
  { id: "5", topBottomColor: "#D6D35E", centerColor: "#f3f057E6F0ff" },
  { id: "6", topBottomColor: "#C46040", centerColor: "#F9BEC4" },
];
export default function SelectPaperPage({
  paper,
  setPaper,
  goNext,
  goHome,
}: Props) {
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    const uiTimer = setTimeout(() => {
      setShowUI(true);
    }, 500);
    return () => clearTimeout(uiTimer);
  }, []);

  return (
    <div className="container selectpage">
      <h1 className="brandName" onClick={goHome}>
        Papermori
      </h1>

      <div className={`select-ui ${showUI ? "show" : ""}`}>
        <h2 className="selectionPrompt">choose your paper</h2>
        <div className="color-grid">
          {themes.map((theme) => (
            <div
              key={theme.id}
              className={`color-box ${paper.id === theme.id ? "active" : ""}`}
              style={{ background: theme.topBottomColor }}
              onClick={() => setPaper(theme)}
            />
          ))}
        </div>
        <button className="next-btn" onClick={goNext}>
          next
        </button>
      </div>
    </div>
  );
}
