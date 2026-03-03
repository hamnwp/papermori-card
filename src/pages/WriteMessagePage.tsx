import { useEffect, useState } from "react";
import "./WriteMessagePage.css";

type Props = {
  message: string;
  setMessage: (msg: string) => void;
  goNext: () => void;
  goBack: () => void;
};

export default function WriteMessagePage({
  message,
  setMessage,
  goNext,
  goBack,
}: Props) {
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    // ให้ UI ค่อย ๆ โผล่มาหลังจากเปลี่ยนหน้า
    const uiTimer = setTimeout(() => {
      setShowUI(true);
    }, 500);
    return () => clearTimeout(uiTimer);
  }, []);

  return (
    <div className="container writepage">
      <h1 className="brandName" onClick={goBack}>
        Papermori
      </h1>

      <div className={`write-ui ${showUI ? "show" : ""}`}>
        <h2 className="selectionPrompt">write your feelings</h2>

        <div className="input-container">
          <textarea
            className="feeling-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="type here..."
            maxLength={300}
          />
        </div>

        <div className="button-group">
          <button className="backms-btn" onClick={goBack}>
            back
          </button>
          <button className="nextms-btn" onClick={goNext}>
            next
          </button>
        </div>
      </div>
    </div>
  );
}
