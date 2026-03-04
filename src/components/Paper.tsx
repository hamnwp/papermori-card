import "./Paper.css";
import cat from "../assets/cat.png";
import birthday from "../assets/birthday.png";
import cake from "../assets/cake.png";
import flower from "../assets/flower.png";
import wine from "../assets/wine.png";
import party from "../assets/party.png";

//DB Dec
const decoItems = [
  {
    id: "d1",
    imageUrl: flower,
  },
  {
    id: "d2",
    imageUrl: cake,
  },
  {
    id: "d3",
    imageUrl: birthday,
  },
  {
    id: "d4",
    imageUrl: cat,
  },
  {
    id: "d5",
    imageUrl: wine,
  },
  {
    id: "d6",
    imageUrl: party,
  },
];

export default function Paper({
  isOpen,
  theme,
  selectedDeco,
  currentStep,
  isExiting,
}: any) {
  //ค้นหา Dec ID ที่ส่งมาจาก App.tsx
  const currentDeco = decoItems.find((item) => item.id === selectedDeco);

  return (
    // กาง/พับ paper
    <div className={`paper ${isOpen ? "open" : ""}`}>
      {" "}
      {/* เปลี่ยนสีพื้นหลังตาม theme ที่เลือก */}
      <div className="paper-top" style={{ background: theme.topBottomColor }} />
      <div className="paper-middle" style={{ background: theme.centerColor }} />
      <div
        className="paper-bottom"
        style={{ background: theme.topBottomColor }}
      />
      {/* Dec โชว์เฉพาะตอน paper ปิด + อยู่หน้า Dec หรือกำลัง Back (isExiting) */}
      {currentDeco && !isOpen && (currentStep === 4 || isExiting) && (
        <div className={`paper-sticker-overlay ${isExiting ? "exit" : ""}`}>
          <img src={currentDeco.imageUrl} className="applied-sticker" />
        </div>
      )}
    </div>
  );
}
