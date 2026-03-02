import { useState } from "react";
import HomePage from "./pages/HomePage";
import SelectPaperPage from "./pages/SelectPaperPage";

export type PaperTheme = {
  id: string;
  topBottomColor: string;
  centerColor: string;
};

export default function App() {
  const [step, setStep] = useState(1);

  const [paper, setPaper] = useState<PaperTheme>({
    id: "1",
    topBottomColor: "#7fb0e8", // สีบน-ล่างพื้นฐาน
    centerColor: "#f0dd7b", // สีตรงกลางพื้นฐาน
  });

  return (
    <>
      {step === 1 && <HomePage goNext={() => setStep(2)} />}
      {step === 2 && (
        <SelectPaperPage
          paper={paper}
          setPaper={setPaper}
          goNext={() => setStep(3)}
          goHome={() => setStep(1)}
        />
      )}
    </>
  );
}
