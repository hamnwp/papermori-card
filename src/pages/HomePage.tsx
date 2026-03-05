import "../index.css";
import "./HomePage.css";
import sticker from "../assets/bow.png";
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

    setTimeout(() => {
      goNext();
    }, 800);
  };

  return (
    <div className="container homepage">
      <h1 className={`papermori ${isFading ? "fade-out" : ""}`}>Papermori</h1>
      <p className={`footerCredit ${isFading ? "fade-out" : ""}`}>
        made by @hamnwp
      </p>

      <button
        className={`sticker-btn ${isPeeling ? "peel" : ""}`}
        onClick={handleClick}
      >
        <img src={sticker} alt="Choose your paper" />
      </button>
    </div>
  );
}
