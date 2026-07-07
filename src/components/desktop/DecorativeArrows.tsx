import arrow1Img from "@/assets/arrow1.svg";
import arrow2Img from "@/assets/arrow2.svg";

export const DecorativeArrows = () => {
  return (
    <>
      {/* Arrow 1 */}
      <img
        src={arrow1Img}
        alt="Arrow 1"
        style={{
          position: "absolute",
          left: "479px",
          top: "723px",
          transform: "rotate(-25deg)",
        }}
      />
      {/* Text 1 (above Arrow 1) */}
      <div
        style={{
          position: "absolute",
          left: "479px",
          top: "685px",
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
      {/* Arrow 2 */}
      <img
        src={arrow2Img}
        alt="Arrow 2"
        className="absolute pointer-events-none select-none z-35"
        style={{
          left: "891px",
          top: "241px",
          transform: "rotate(-12deg)",
        }}
        draggable={false}
      />
      {/* Text 2 (above Arrow 2) */}
      <div
        style={{
          position: "absolute",
          left: "946px",
          top: "215px",
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
    </>
  );
};
