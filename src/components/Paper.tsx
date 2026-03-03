import { useEffect, useState } from "react";
import "./Paper.css";

export default function Paper({ isOpening, topBottomColor, centerColor }: any) {
  return (
    <div className={`paper ${isOpening ? "open" : ""}`}>
      <div className="paper-top" style={{ background: topBottomColor }} />
      <div className="paper-middle" style={{ background: centerColor }} />
      <div className="paper-bottom" style={{ background: topBottomColor }} />
    </div>
  );
}
