import arrow1Img from "@/assets/arrow1.svg";

// Design canvas: 1440 × 900px
// Arrow 1 is NOT part of the HeroComposition — it stays independently
// positioned so it can sit near the dock regardless of hero group scaling.

export const DecorativeArrows = () => {
  return (
    <>
      {/* Arrow 1 */}
      <img
        src={arrow1Img}
        alt="Arrow 1"
        style={{
          position: "absolute",
          left: "33.26vw",   // 479 / 1440
          top: "88vh",       // pushed down toward dock
          transform: "rotate(-25deg)",
        }}
      />
      {/* Text 1 (above Arrow 1) */}
      <div
        style={{
          position: "absolute",
          left: "33.26vw",   // 479 / 1440
          top: "83.78vh",    // 4.22vh above arrow
          transform: "translate(-50%, 0) rotate(-12deg)",
          fontFamily: "FuturaHandwritten",
          fontSize: "14px",
          lineHeight: "25px",
          color: "#1E1E1E",
          textAlign: "center",
        }}
      >
        professional snooping
        <br />
        allowed 👀
      </div>
    </>
  );
};
