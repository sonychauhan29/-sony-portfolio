import polaroidImg from "@/assets/my-img.png";

// Positioning is handled by the parent HeroComposition wrapper.
export const PolaroidPhoto = () => (
  <div className="pointer-events-none select-none">
    <img src={polaroidImg} alt="Polaroid photo" draggable={false} className="max-w-full h-auto" />
  </div>
);
