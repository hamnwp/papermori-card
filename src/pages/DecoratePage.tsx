import { useEffect, useState } from "react";
import "./DecoratePage.css";
import creamsoda from "../assets/creamsoda.png";
import cake from "../assets/cake.png";
import valentine from "../assets/valentine.png";
import birthday from "../assets/birthday.png";
import wine from "../assets/wine.png";
import hoho from "../assets/hoho.png";



type Decoration = {
  id: string;
  name: string;
  imageUrl: string;
};

type Props = {
  selectedDeco: string | null;
  setSelectedDeco: (decoId: string | null) => void;
  goBack: () => void;
  goHome: () => void;
};

const decoItems: Decoration[] = [
  {
    id: "creamsoda",
    name: "creamsoda",
    imageUrl: creamsoda,
  },
  {
    id: "cake",
    name: "cake",
    imageUrl: cake,
  },
  {
    id: "valentine",
    name: "valentine",
    imageUrl: valentine,
  },
  {
    id: "birthday",
    name: "birthday",
    imageUrl: birthday,
  },
  {
    id: "wine",
    name: "wine",
    imageUrl: wine,
  },
  {
    id: "hoho",
    name: "hoho",
    imageUrl: hoho,
  },
];

export default function DecoratePage({
  selectedDeco,
  setSelectedDeco,
  goBack,
  goHome,
}: Props) {
  const [showUI, setShowUI] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowUI(true), 800);

    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    setShowUI(false);
    setIsExiting(true);

    setTimeout(() => {
      goBack();
    }, 800);
  };

  return (
    <div className="container decoratepage">
      <h1 className="brandName" onClick={goHome}>
        Papermori
      </h1>

      <div className={`decorate-ui ${showUI && !isExiting ? "show" : ""}`}>
        <h2 className="selectionPrompt">decorate your envelope</h2>

        <div className="deco-grid">
          {decoItems.map((item) => (
            <div
              key={item.id}
              className={`deco-box ${selectedDeco === item.id ? "active" : ""}`}
              onClick={() => setSelectedDeco(item.id)}
            >
              <img src={item.imageUrl} alt={item.name} className="deco-icon" />
            </div>
          ))}
        </div>

        <div className="button-group-dec">
          <button className="backms-btn" onClick={handleBack}>
            back
          </button>
          <button
            className="nextms-btn"
            onClick={() => alert("บันทึกเรียบร้อย!")}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}
