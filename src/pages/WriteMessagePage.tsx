import { useEffect, useState } from "react";
import "./WriteMessagePage.css";

type Props = {
  message: string;
  setMessage: (msg: string) => void;
  goNext: () => void;
  goBack: () => void;
  goHome: () => void;
};

export default function WriteMessagePage({
  message,
  setMessage,
  goNext,
  goBack,
  goHome,
}: Props) {
  const [showUI, setShowUI] = useState(false);

  const [toWhom, setToWhom] = useState("");
  const [fromWhom, setFromWhom] = useState("");

  useEffect(() => {
    const uiTimer = setTimeout(() => {
      setShowUI(true);
    }, 500);
    return () => clearTimeout(uiTimer);
  }, []);

  return (
    <div className="container writepage">
      <h1 className="brandName" onClick={goHome}>
        Papermori
      </h1>

      <div className={`write-ui ${showUI ? "show" : ""}`}>
        <div className="letter-body">
          {/* Dear... */}
          <div className="input-section">
            <span className="label-text">Dear </span>
            <input
              className="name-input"
              value={toWhom}
              onChange={(e) => setToWhom(e.target.value)}
              placeholder="Lovely One"
              maxLength={25}
            />
          </div>

          {/* ข้อความหลัก */}
          <div className="input-container">
            <textarea
              className="feeling-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="There are moments I wish I could press pause, just to tell you how much you mean to me..."
              maxLength={300}
            />
          </div>

          {/* Sincerely... */}
          <div className="signature-section">
            <div className="sincerely-text">Sincerely,</div>
            <input
              className="from-input"
              value={fromWhom}
              onChange={(e) => setFromWhom(e.target.value)}
              placeholder="Always yours"
              maxLength={25}
            />
          </div>
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
