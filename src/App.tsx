import { useState } from "react";
import HomePage from "./pages/HomePage";
import SelectPaperPage from "./pages/SelectPaperPage";
import Paper from "./components/Paper";
import WriteMessagePage from "./pages/WriteMessagePage";
import DecoratePage from "./pages/DecoratePage";

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
  const [selectedDeco, setSelectedDeco] = useState<string | null>("d1");

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
