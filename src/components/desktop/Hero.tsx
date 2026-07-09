import { useState, useEffect } from "react";

const greetings = [
  "Hello",
  "नमस्ते",
  "Hola",
  "Bonjour",
  "Ciao",
  "Hallo",
];

const TypingGreeting = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const currentGreeting = greetings[greetingIndex];
  const typingSpeed = 130; // Slowed down by 30% for smoother feel
  const deletingSpeed = 65; // Slowed down by 30% to match typing speed
  const pauseDuration = 1300; // Increased to 1.3 seconds

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentGreeting.length) {
          setDisplayText(currentGreeting.slice(0, displayText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Finished deleting, move to next greeting
          setIsDeleting(false);
          setGreetingIndex((prev) => (prev + 1) % greetings.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentGreeting]);

  return (
    <span
      style={{
        fontFamily: currentGreeting === "नमस्ते" ? "Kalam" : "DK Lemon Yellow Sun",
        fontSize: "84px",
        lineHeight: "91px",
        color: "#1E1E1E",
        minWidth: "280px", // Reserve width to prevent layout shift
        display: "inline-block",
      }}
    >
      {displayText}
      <span
        style={{
          opacity: showCursor ? 1 : 0,
          transition: "opacity 0.1s",
          width: "1px",
          height: "84px",
          display: "inline-block",
          verticalAlign: "middle",
          marginLeft: "2px",
          backgroundColor: "#1E1E1E",
        }}
      />
      ,
    </span>
  );
};

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
    <TypingGreeting />
    <span
      style={{
        fontFamily: "DK Lemon Yellow Sun",
        fontSize: "64px",
        lineHeight: "71px",
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
