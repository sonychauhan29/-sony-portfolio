import { useRef, useEffect, useState } from "react";
import { MacWindow } from "./MacWindow";
import { NotesSidebar } from "./NotesSidebar";
import { NotesToolbarCenter, NotesToolbarRight } from "./NotesToolbar";
import f1 from "@/assets/f1.jpg";
import f2 from "@/assets/f2.jpg";
import f3 from "@/assets/f3.jpg";
import f4 from "@/assets/f4.jpg";
import f5 from "@/assets/f5.jpg";
import f6 from "@/assets/f6.jpg";
import f7 from "@/assets/f7.jpg";
import f8 from "@/assets/f8.jpg";
import f9 from "@/assets/f9.jpg";
import type { PanelKey } from "./types";

type Props = {
  onClose: () => void;
  onNavigate: (k: PanelKey) => void;
  onBack?: () => void;
  onForward?: () => void;
  onUp?: () => void;
  canBack?: boolean;
  canForward?: boolean;
  canUp?: boolean;
};

const MarqueeTrack = () => {
  const firstSequenceRef = useRef<HTMLDivElement>(null);
  const [sequenceWidth, setSequenceWidth] = useState(0);

  useEffect(() => {
    if (firstSequenceRef.current) {
      const width = firstSequenceRef.current.offsetWidth;
      setSequenceWidth(width);
    }
  }, []);

  return (
    <div
      className="flex gap-[7px]"
      style={{
        width: "max-content",
        willChange: "transform",
        animation: sequenceWidth ? `marquee ${35}s linear infinite` : "none",
        "--marquee-distance": `-${sequenceWidth}px`,
      } as React.CSSProperties}
    >
      {/* First sequence */}
      <div ref={firstSequenceRef} className="flex gap-[7px]">
        <img src={f1} alt="" className="w-28 h-28 flex-shrink-0" />
        <img src={f2} alt="" className="w-28 h-28 flex-shrink-0" />
        <img src={f3} alt="" className="w-28 h-28 flex-shrink-0" />
        <img src={f4} alt="" className="w-28 h-28 flex-shrink-0" />
        <img src={f5} alt="" className="w-28 h-28 flex-shrink-0" />
        <img src={f6} alt="" className="w-28 h-28 flex-shrink-0" />
        <img src={f7} alt="" className="w-28 h-28 flex-shrink-0" />
        <img src={f8} alt="" className="w-28 h-28 flex-shrink-0" />
        <img src={f9} alt="" className="w-28 h-28 flex-shrink-0" />
      </div>
      {/* Duplicate sequence for seamless loop */}
      <div className="flex gap-[7px]">
        <img src={f1} alt="" className="w-28 h-28 flex-shrink-0" />
        <img src={f2} alt="" className="w-28 h-28 flex-shrink-0" />
        <img src={f3} alt="" className="w-28 h-28 flex-shrink-0" />
        <img src={f4} alt="" className="w-28 h-28 flex-shrink-0" />
        <img src={f5} alt="" className="w-28 h-28 flex-shrink-0" />
        <img src={f6} alt="" className="w-28 h-28 flex-shrink-0" />
        <img src={f7} alt="" className="w-28 h-28 flex-shrink-0" />
        <img src={f8} alt="" className="w-28 h-28 flex-shrink-0" />
        <img src={f9} alt="" className="w-28 h-28 flex-shrink-0" />
      </div>
    </div>
  );
};

export const AboutPanel = (p: Props) => (
  <MacWindow
    onClose={p.onClose}
    onBack={p.onBack}
    onForward={p.onForward}
    onUp={p.onUp}
    canBack={p.canBack}
    canForward={p.canForward}
    canUp={p.canUp}
    width={780}
    height={490}
    sidebar={<NotesSidebar active="about" onClose={p.onClose} onNavigate={p.onNavigate} />}
    toolbarCenter={<NotesToolbarCenter title="About me" subtitle="1 note" />}
    toolbarRight={<NotesToolbarRight />}
  >
    <div className="px-6 sm:px-8 py-5">
      <p className="text-center text-[11px] text-muted-foreground mb-4">
        31 March  2026 at 12:20 PM
      </p>
      <div className="w-full">
        <p
          style={{
            fontFamily: "Inter",
            fontSize: "12px",
            lineHeight: "18.7px",
            color: "#464545",
          }}
        >
          Hey, I'm Sony, a{" "}
          <span style={{ color: "#FF73B6" }}>Product Designer</span> and Interaction Design
          student who loves creating digital experiences. When I'm not designing, I'm probably
          traveling, taking photos, or searching for my next favorite coffee spot.
        </p>
      </div>
      <div className="mt-6 overflow-hidden">
        <MarqueeTrack />
      </div>
      <div className="mt-6">
        <p
          style={{
            fontFamily: "Inter",
            fontSize: "12px",
            lineHeight: "18.7px",
            color: "#464545",
          }}
        >
          <span style={{ fontWeight: "bold" }}>Plot twist:</span> the kid who hated art classes
          grew up to become a designer. During lockdown, boredom led me to mandalas, mandalas led
          me to painting, and 40+ artworks later, I knew creativity was something I wanted to pursue
          seriously.
          <br />
          <br />
          Somewhere between "I'm just bored" and "let me make one more," I found something I
          genuinely loved. The rest is pretty much the reason you're on this portfolio today.
        </p>
      </div>
    </div>
  </MacWindow>
);