import stickyImg from "@/assets/sticky.png";
import dashesImg from "@/assets/dashes.svg";
import starImg from "@/assets/star.svg";
import sunImg from "@/assets/sun.svg";

export const StickyNote = () => (
  <div
    className="absolute pointer-events-none select-none z-30"
    style={{
      left: "239px",
      top: "290px",
      transform: "rotate(-12deg)",
    }}
  >
    <img src={stickyImg} alt="Sticky note" draggable={false} className="relative" />
    <img src={sunImg} alt="Sun" className="absolute top-[14px] right-[26px]" draggable={false} />
    <div className="absolute inset-0 pt-11 px-8 flex justify-center">
      <p className="font-futura text-[14px] leading-[26px] tracking-[-0.02em] text-left text-[#1E1E1E] whitespace-nowrap">
        Before you explore, this<br />
        portfolio works a bit like a<br />
        <span className="text-[#EB3B82]">MACBOOK</span>. no manual<br />
        required. just follow your<br />
        <span className="relative inline-block">
          curiosity.
          <img src={starImg} alt="Star" className="absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 mt-[4px]" draggable={false} />
          <img src={dashesImg} alt="Dashes" className="absolute top-[calc(100%-2px)] left-1/2 -translate-x-1/2" draggable={false} />
        </span>
      </p>
    </div>
  </div>
);