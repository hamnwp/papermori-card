import { useState } from "react";
import HomePage from "./pages/HomePage";
import SelectPaperPage from "./pages/SelectPaperPage";
import Paper from "./components/Paper";
import WriteMessagePage from "./pages/WriteMessagePage";

export type PaperTheme = {
  id: string;
  topBottomColor: string;
  centerColor: string;
};

export default function App() {
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [paper, setPaper] = useState<PaperTheme>({
    id: "1",
    topBottomColor: "#7fb0e8",
    centerColor: "#f0dd7b",
  });

  
  const [isPaperOpen, setIsPaperOpen] = useState(false);

  return (
    <div className="app-container">
      {/* กระดาษ */}
      <div className={`paper ${isPaperOpen ? "open" : ""}`}>
        <div className="paper-top" style={{ background: paper.topBottomColor }} />
        <div className="paper-middle" style={{ background: paper.centerColor }} />
        <div className="paper-bottom" style={{ background: paper.topBottomColor }} />
      </div>


      {step === 1 && (
        <HomePage 
          goNext={() => {
            setIsPaperOpen(true); // กางกระดาษ
            setStep(2);
          }} 
        />
      )}

      {step === 2 && (
        <SelectPaperPage
          paper={paper}
          setPaper={setPaper}
          goNext={() => setStep(3)}
          goHome={() => {
            setIsPaperOpen(false); // พับกระดาษ
            setStep(1);
          }}
        />
      )}

      {/* WriteMessagePage */}
      {step === 3 && (
        <WriteMessagePage 
          message={message} 
          setMessage={setMessage} 
          goNext={() => setStep(4)} 
          goBack={() => setStep(2)} 
        />
      )}

      
    </div>
  );
}