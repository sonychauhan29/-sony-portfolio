import polaroidImg from "@/assets/my-img.png";

export const PolaroidPhoto = () => (
  <div
    className="absolute pointer-events-none select-none z-40"
    style={{
      left: "430px",
      top: "120px",
      transform: "rotate(-3.14deg) scale(0.85)",
    }}
  >
    <img src={polaroidImg} alt="Polaroid photo" draggable={false} className="max-w-full h-auto" />
  </div>
);

