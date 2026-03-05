import "./Paper.css";
import creamsoda from "../assets/creamsoda.png";
import cake from "../assets/cake.png";
import valentine from "../assets/valentine.png";
import birthday from "../assets/birthday.png";
import wine from "../assets/wine.png";
import hoho from "../assets/hoho.png";

//DB Dec
const decoItems = [
  {
    id: "creamsoda",
    imageUrl: creamsoda,
  },
  {
    id: "cake",
    imageUrl: cake,
  },
  {
    id: "valentine",
    imageUrl: valentine,
  },
  {
    id: "birthday",
    imageUrl: birthday,
  },
  {
    id: "wine",
    imageUrl: wine,
  },
  {
    id: "hoho",
    imageUrl: hoho,
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
