import { useState } from "react";
import HomePage from "./pages/HomePage";
import SelectPaperPage from "./pages/SelectPaperPage";
import Paper from "./components/Paper";
import WriteMessagePage from "./pages/WriteMessagePage";
import DecoratePage from "./pages/DecoratePage";
import top1 from "./assets/1top.png";
import top2 from "./assets/2top.png";
import top3 from "./assets/3top.png";
import top4 from "./assets/4top.png";
import top5 from "./assets/5top.png";
import top6 from "./assets/6top.png";
import cen1 from "./assets/1cen.png";
import cen2 from "./assets/2cen.png";
import cen3 from "./assets/3cen.png";
import cen4 from "./assets/4cen.png";
import cen5 from "./assets/5cen.png";
import cen6 from "./assets/6cen.png";



export type PaperTheme = {
  id: string;
  topBottomBg: string;
  centerBg: string;
};

export default function App() {
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
const [paper, setPaper] = useState<PaperTheme>({
    id: "1",
    topBottomBg: `url(${top1})`, 
    centerBg: `url(${cen1})`,
  });

  const [isPaperOpen, setIsPaperOpen] = useState(false);
  const [selectedDeco, setSelectedDeco] = useState<string | null>("creamsoda");

  const handleGoHome = () => {
    window.location.reload(); // คำสั่งโหลดหน้าเว็บใหม่
  };

  const [isExitingDec, setIsExitingDec] = useState(false);

  const handleBackFromDec = () => {
    setIsExitingDec(true);
    setIsPaperOpen(true);

    setTimeout(() => {
      setStep(3);
      setIsExitingDec(false);
    }, 800);
  };

  return (
    <div className="app-container">
      <Paper
        isOpen={isPaperOpen}
        theme={paper}
        selectedDeco={selectedDeco}
        currentStep={step}
        isExiting={isExitingDec}
      />

      {step === 1 && (
        <HomePage
          goNext={() => {
            setIsPaperOpen(true);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <SelectPaperPage
          paper={paper}
          setPaper={setPaper}
          goNext={() => setStep(3)}
          goHome={handleGoHome}
        />
      )}

      {step === 3 && (
        <WriteMessagePage
          message={message}
          setMessage={setMessage}
          goNext={() => {
            setIsPaperOpen(false);
            setStep(4);
          }}
          goHome={handleGoHome}
          goBack={() => setStep(2)}
        />
      )}

      {step === 4 && (
        <DecoratePage
          selectedDeco={selectedDeco}
          setSelectedDeco={setSelectedDeco}
          goBack={handleBackFromDec}
          goHome={handleGoHome}
        />
      )}
    </div>
  );
}
