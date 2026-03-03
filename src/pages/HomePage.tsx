import "../index.css";
import "./HomePage.css";
import sticker from "../assets/ChooseYourPaper.png";
import { useState } from "react";

type Props = {
  goNext: () => void;
};

export default function HomePage({ goNext }: Props) {
  const [isPeeling, setIsPeeling] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleClick = () => {
    setIsPeeling(true);
    setIsFading(true);

    // รอ animation 0.8 วิ ก่อนเปลี่ยนหน้า
    setTimeout(() => {
      goNext();
    }, 800);
  };

  return (
    <div className="container homepage">
      
      <h1 className={`papermori ${isFading ? "fade-out" : ""}`}>Papermori</h1>
      <p className={`footerCredit ${isFading ? "fade-out" : ""}`}>made by @hamnwp</p>

      <p className={`webTagline ${isFading ? "fade-out" : ""}`}>
        tiny envelopes holding endless feelings
      </p>


      {/* ปุ่มสติกเกอร์ กดแล้วไปหน้า Select เลย */}
      <button
        className={`sticker-btn ${isPeeling ? "peel" : ""}`}
        onClick={handleClick}
      >
        <img src={sticker} alt="Choose your paper" />
      </button>

      
    </div>
  );
}
