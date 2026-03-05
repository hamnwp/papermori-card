import { useEffect, useState } from "react";
import "./SelectPaperPage.css";
import top1 from "../assets/1top.png";
import top2 from "../assets/2top.png";
import top3 from "../assets/3top.png";
import top4 from "../assets/4top.png";
import top5 from "../assets/5top.png";
import top6 from "../assets/6top.png";
import cen1 from "../assets/1cen.png";
import cen2 from "../assets/2cen.png";
import cen3 from "../assets/3cen.png";
import cen4 from "../assets/4cen.png";
import cen5 from "../assets/5cen.png";
import cen6 from "../assets/6cen.png";
type PaperTheme = {
  id: string;
  topBottomBg: string;
  centerBg: string;
};

type Props = {
  paper: PaperTheme;
  setPaper: React.Dispatch<React.SetStateAction<PaperTheme>>;
  goNext: () => void;
  goHome: () => void;
};

const themes: PaperTheme[] = [
  {
    id: "1",
    topBottomBg: `url(${top1})`, // ✅ ใส่เป็นรูปภาพ
    centerBg: `url(${cen1})`, // ✅ หรือจะผสมกับสีปกติก็ได้
  },
  {
    id: "2",
    topBottomBg: `url(${top2})`,
    centerBg: `url(${cen2})`,
  },
  {
    id: "3",
    topBottomBg: `url(${top3})`, // ✅ ใส่เป็นรูปภาพ
    centerBg: `url(${cen3})`, // ✅ หรือจะผสมกับสีปกติก็ได้
  },
  {
    id: "4",
    topBottomBg: `url(${top4})`,
    centerBg: `url(${cen4})`,
  },
  {
    id: "5",
    topBottomBg: `url(${top5})`, // ✅ ใส่เป็นรูปภาพ
    centerBg: `url(${cen5})`, // ✅ หรือจะผสมกับสีปกติก็ได้
  },
  {
    id: "6",
    topBottomBg: `url(${top6})`,
    centerBg: `url(${cen6})`,
  },
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
              style={{
                /* ✅ ใช้ backgroundImage และตั้งค่าเพื่อให้เห็นลายจิ๋วๆ ในช่องเลือก */
                backgroundImage: theme.topBottomBg.includes("url")
                  ? theme.topBottomBg
                  : "none",
                backgroundColor: theme.topBottomBg.includes("url")
                  ? "transparent"
                  : theme.topBottomBg,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
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
