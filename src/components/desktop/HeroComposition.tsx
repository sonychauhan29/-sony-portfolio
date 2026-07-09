import { useState, useEffect } from "react";
import { StickyNote } from "./StickyNote";
import { PolaroidPhoto } from "./PolaroidPhoto";
import { Hero } from "./Hero";
import arrow2Img from "@/assets/arrow2.svg";

// ─── Design-canvas constants ────────────────────────────────────────────────
const CANVAS_W = 1440;
const CANVAS_H = 900;
const MENU_BAR_H = 28; // matches pt-7 (1.75 rem = 28 px)

/**
 * Computes the uniform scale factor that fits the 1440×900 design canvas
 * inside the available viewport (full width × height-minus-menubar)
 * without any axis overflowing.
 */
function getScale(): number {
  const scaleX = window.innerWidth / CANVAS_W;
  const scaleY = (window.innerHeight - MENU_BAR_H) / CANVAS_H;
  // ×1.15 → render the HeroComposition 15% larger than the bare fit-to-viewport scale
  return Math.min(scaleX, scaleY) * 1.15;
}

/**
 * HeroComposition
 *
 * Renders the entire hero section as a single, uniformly-scaled unit.
 * The 1440×900 design canvas is centred in the viewport (below the menu
 * bar) and shrinks / grows together so every element inside maintains
 * its exact relative position, spacing, and size.
 *
 * Elements NOT in this group (Arrow 1, desktop icons, dock, menu bar)
 * are completely unaffected.
 */
export const HeroComposition = () => {
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const update = () => setScale(getScale());
    update();                                      // run on mount
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div
      className="pointer-events-none select-none"
      style={{
        // Centre the canvas in the available area (below the menu bar).
        // top: 50% inside the inset-0 container → vertical mid-point of full viewport.
        // We nudge down by half the menu-bar height so the centre aligns with
        // the mid-point of the *content* area (28px – 100vh).
        // Then subtract 40px to move the entire composition upward.
        // Shift right by 40px.
        position: "absolute",
        left: "calc(50% + 40px)",
        top: `calc(50% + ${MENU_BAR_H / 2}px - 40px)`,
        width: `${CANVAS_W}px`,
        height: `${CANVAS_H}px`,
        // translate(-50%,-50%) brings the canvas centre to the anchor point;
        // then scale() zooms uniformly from that same centre.
        transform: `translate(-50%, -50%) scale(${scale})`,
        transformOrigin: "center center",
      }}
    >
      {/* ══════════════════════════════════════════════════════════════════
           LEFT SUB-GROUP: Sticky Note + Polaroid Photo as one unit.
           The wrapper centres itself at 50% of the canvas height, exactly
           matching the Hero text block's vertical centre (also top:50%).
           Internal positions preserve the original relative spacing:
             • PolaroidPhoto 170 px above StickyNote (290 − 120 = 170)
             • Horizontal offset from wrapper origin: polaroid=239 px, note=48 px
          ══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute"
        style={{
          // Leftmost edge sits 191 px from canvas left (48 px to the left of the
          // sticky note's original 239 px, giving rotation room).
          left: "191px",
          // Centre the group vertically with the Hero text block.
          top: "50%",
          transform: "translateY(-50%)",
          // Width spans from left edge to just past the polaroid right edge.
          // Height wraps the combined extent of both elements (~450 px).
          width: "590px",
          height: "450px",
          pointerEvents: "none",
        }}
      >
        {/* Polaroid Photo — at the top of the sub-group */}
        <div
          className="absolute z-40"
          style={{
            left: "239px",  // 430 − 191 = 239 (original canvas left preserved)
            top: "0px",
            transform: "rotate(-3.14deg) scale(0.85)",
            transformOrigin: "top left",
          }}
        >
          <PolaroidPhoto />
        </div>

        {/* Sticky Note — 170 px below the polaroid, same gap as the original design */}
        <div
          className="absolute z-30"
          style={{
            left: "48px",   // 239 − 191 = 48 (original canvas left preserved)
            top: "170px",   // 290 − 120 = 170 (original vertical gap preserved)
            transform: "rotate(-12deg)",
          }}
        >
          <StickyNote />
        </div>
      </div>

      {/* ── Hero text (left=771, vertically centred in the canvas) ──────── */}
      {/* left = polaroidLeft(430) + polaroidWidth(250) + gap(101) - 10 = 771   */}
      <div
        className="absolute z-20"
        style={{
          left: "771px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Hero />
      </div>

      {/* ── Arrow 2 (left=881, top=281 — moved 11px down) ─────────  */}
      <img
        src={arrow2Img}
        alt="Arrow 2"
        className="absolute pointer-events-none select-none"
        style={{
          left: "881px",
          top: "281px",
          zIndex: 35,
          transform: "rotate(-12deg)",
        }}
        draggable={false}
      />

      {/* ── Arrow 2 text (left=936, top=254; moved 11px down) ── */}
      <div
        className="absolute"
        style={{
          left: "936px",
          top: "254px",
          zIndex: 35,
          transform: "translate(-50%, 0)",
          fontFamily: "FuturaHandwritten",
          fontSize: "14px",
          lineHeight: "25px",
          color: "#1E1E1E",
          textAlign: "center",
        }}
      >
        nice to meet you
        <span
          style={{
            display: "inline-block",
            transform: "rotate(90deg)",
            marginLeft: "8px",
          }}
        >
          :)
        </span>
      </div>
    </div>
  );
};
