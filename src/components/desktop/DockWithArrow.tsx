import { useState, useEffect } from "react";
import { FinderPng, FolderPng, PhotosPng, NotesPng, ContactsPng, MusicPng } from "../icons/PngIcons";
import type { PanelKey } from "../panels/types";
import arrow1Img from "@/assets/arrow1.svg";

type Props = { onOpen: (key: PanelKey) => void };

const cls =
  "w-9 h-9 sm:w-12 sm:h-12 shrink-0 aspect-square object-contain hover:scale-125 hover:-translate-y-1 transition-transform duration-150 origin-bottom";

// Design canvas constants for scaling
const CANVAS_W = 1440;
const CANVAS_H = 900;

/**
 * Computes the uniform scale factor for the dock component
 * based on viewport size, similar to HeroComposition
 */
function getDockScale(): number {
  const scaleX = window.innerWidth / CANVAS_W;
  const scaleY = window.innerHeight / CANVAS_H;
  return Math.min(scaleX, scaleY);
}

export const DockWithArrow = ({ onOpen }: Props) => {
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const update = () => setScale(getDockScale());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className="fixed bottom-3 left-1/2 z-40"
      style={{
        transform: "translateX(-50%)",
      }}
    >
      <div
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "center bottom",
        }}
      >
        {/* Arrow 1 - positioned relative to dock wrapper */}
        <img
          src={arrow1Img}
          alt="Arrow 1"
          style={{
            position: "absolute",
            left: "-50px",
            bottom: "30px",
            transform: "rotate(-25deg)",
            pointerEvents: "none",
          }}
        />
        {/* Text 1 (above Arrow 1) */}
        <div
          style={{
            position: "absolute",
            left: "-50px",
            bottom: "75px",
            transform: "translate(-50%, 0) rotate(-12deg)",
            fontFamily: "FuturaHandwritten",
            fontSize: "16px",
            lineHeight: "25px",
            color: "#1E1E1E",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          professional snooping
          <br />
          allowed 👀
        </div>
        {/* Dock */}
        <div className="frosted rounded-2xl px-2.5 sm:px-3 py-2 sm:py-2 flex items-end gap-3 sm:gap-2 shadow-[0_8px_30px_rgba(0,0,0,0.18)] min-w-max overflow-visible">
          <button onClick={() => onOpen("finder")} aria-label="Finder"><FinderPng className={cls} /></button>
          <button onClick={() => onOpen("work")} aria-label="Work"><FolderPng className={cls} /></button>
          <button onClick={() => onOpen("gallery")} aria-label="Photos"><PhotosPng className={cls} /></button>
          <button onClick={() => onOpen("about")} aria-label="Notes"><NotesPng className={cls} /></button>
          <span className="w-px h-8 sm:h-9 bg-foreground/15 mx-0.5 sm:mx-1" />
          <button onClick={() => onOpen("contact")} aria-label="Contacts"><ContactsPng className={cls} /></button>
          <button onClick={() => onOpen("music")} aria-label="Music"><MusicPng className={cls} /></button>
        </div>
      </div>
    </div>
  );
};
