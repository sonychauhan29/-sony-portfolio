// Positioning and initial transform are handled by the parent HeroComposition wrapper.
// This component only contains the text content and its scale.
export const Hero = () => (
  <div
    className="pointer-events-none select-none flex flex-col items-start"
    style={{
      transform: "scale(0.92)",
      transformOrigin: "top left",
    }}
  >
    {/* Heading */}
    <span
      style={{
        fontFamily: "DK Lemon Yellow Sun",
        fontSize: "84px",
        lineHeight: "91px",
        color: "#1E1E1E",
      }}
    >
      HALLO,
    </span>
    <span
      style={{
        fontFamily: "DK Lemon Yellow Sun",
        fontSize: "84px",
        lineHeight: "91px",
        color: "#FCC7D3",
      }}
    >
      I AM SONY
    </span>

    {/* Description */}
    <p
      style={{
        fontFamily: "FuturaHandwritten",
        fontSize: "16px",
        lineHeight: "26px",
        color: "#1E1E1E",
        whiteSpace: "pre",
        margin: "9px 0 0 0",
      }}
    >{"a PRODUCT DESIGNER who loves coffee\na little too much, and designs experiences\nyou'll love even more."}</p>
  </div>
);
