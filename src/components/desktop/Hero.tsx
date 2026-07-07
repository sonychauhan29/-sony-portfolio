export const Hero = () => {
  const polaroidLeft = 430;
  const polaroidEstimatedWidth = 250;
  const gap = 101; // 78 + 30% more (78 * 1.3 = 101.4)

  return (
    <div
      className="absolute pointer-events-none select-none z-20 flex flex-col items-start"
      style={{
        left: `${polaroidLeft + polaroidEstimatedWidth + gap}px`,
        top: "50%",
        transform: "translateY(-50%) scale(0.92)", // 0.8 * 1.15 = 0.92
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
      >{"a PRODUCT DESIGNER who loves coffee\na little too much, and designs experiences\nyou’ll love even more."}</p>
    </div>
  );
};
