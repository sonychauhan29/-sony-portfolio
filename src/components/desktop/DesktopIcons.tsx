import { FolderPng, PdfPng, FigmaPng, PhotoshopPng, IllustratorPng, AfterEffectsPng, StarburstPng, HeartPng, PaintingPng, CameraPng, CoffeePng, PhoneHandPng, Laptop1Png, Laptop2Png } from "../icons/PngIcons";
import type { PanelKey } from "../panels/types";

type Props = { onOpenFolder: (name: PanelKey) => void };

type Item = {
  label: string;
  size: number;
  target: PanelKey | null;
  /** position from top of desktop area (after menu bar), in % of viewport */
  top: string;
  right: string;
};

const items: Item[] = [
  { label: "Favourite Projects", size: 60, target: "work", top: "24%", right: "8%" },
  { label: "When Not Designing", size: 60, target: "gallery", top: "40%", right: "13%" },
  { label: "My Tools", size: 60, target: null, top: "55%", right: "8%" },
];

const ToolsFolder = ({ size }: { size: number }) => {
  return (
    <div className="relative group pointer-events-auto cursor-default">
      {/* Main folder icon */}
      <FolderPng style={{ width: size, height: size }} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />

      {/* Tool icons that pop out */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        {/* Heart - Top Left */}
        <HeartPng className="h-[30x] w-auto absolute transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-36 group-hover:-translate-x-16 group-hover:rotate-[-10deg]" />

        {/* Figma - Center Top */}
        <FigmaPng className="h-[43x] w-auto absolute transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-16 group-hover:translate-x-0 group-hover:rotate-[5deg]" />

        {/* Photoshop - Top Right */}
        <PhotoshopPng className="h-[43x] w-auto absolute transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-32 group-hover:translate-x-14 group-hover:rotate-[12deg]" />

        {/* Starburst - Middle Left */}
        <StarburstPng className="h-[36x] w-auto absolute transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-12 group-hover:-translate-x-20 group-hover:rotate-[-4deg]" />

        {/* Illustrator - Middle Right */}
        <IllustratorPng className="h-[43x] w-auto absolute transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 group-hover:translate-x-20 group-hover:rotate-[8deg]" />

        {/* After Effects (Wave) - Bottom Left */}
        <AfterEffectsPng className="h-[36x] w-auto absolute transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-y-6 group-hover:-translate-x-20 group-hover:rotate-[-12deg]" />
      </div>
    </div>
  );
};

const ProjectsFolder = ({ size, onClick }: { size: number; onClick: () => void }) => {
  return (
    <button onClick={onClick} className="relative group pointer-events-auto">
      {/* Main folder icon */}
      <FolderPng style={{ width: size, height: size }} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />

      {/* Pop out icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        {/* Laptop 1 - Left */}
        <Laptop1Png className="w-[180px] h-auto absolute transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-16 group-hover:-translate-x-14 group-hover:rotate-[-8deg]" />

        {/* Phone Hand - Top Center */}
        <PhoneHandPng className="h-[80px] w-auto absolute transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-36 group-hover:translate-x-4 group-hover:rotate-[5deg]" />

        {/* Laptop 2 - Right */}
        <Laptop2Png className="w-[180px] h-auto absolute transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-12 group-hover:translate-x-12 group-hover:rotate-[10deg]" />
      </div>
    </button>
  );
};

const NotDesigningFolder = ({ size, onClick }: { size: number; onClick: () => void }) => {
  return (
    <button onClick={onClick} className="relative group pointer-events-auto">
      {/* Main folder icon */}
      <FolderPng style={{ width: size, height: size }} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />

      {/* Pop out icons */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        {/* Painting - Top Left */}
        <PaintingPng className="w-[80px] h-[80px] absolute transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-24 group-hover:-translate-x-10 group-hover:rotate-[-10deg]" />

        {/* Camera - Middle Right */}
        <CameraPng className="h-[60px] w-auto absolute transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-12 group-hover:translate-x-10 group-hover:rotate-[0deg]" />

        {/* Coffee - Bottom Left */}
        <CoffeePng className="w-[109px] h-[100px] absolute transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:-translate-y-18 group-hover:-translate-x-20 group-hover:rotate-[-5deg]" />
      </div>
    </button>
  );
};

export const DesktopIcons = ({ onOpenFolder }: Props) => {
  return (
    <div className="hidden sm:block absolute inset-0 pointer-events-none z-20 select-none">
      {/* Single column rail — one absolute anchor, 160px from top, 50px gap between groups */}
      <div
        style={{ 
          top: "17.78vh",   // 160 / 900
          right: "4.86vw",  // 70 / 1440
          transform: "scale(0.8)",
          transformOrigin: "top right",
        }}
        className="absolute flex flex-col items-center gap-[50px]"
      >
        {/* Favourite Projects */}
        <div className="flex flex-col items-center gap-1 w-[90px] pointer-events-auto">
          <ProjectsFolder size={60} onClick={() => onOpenFolder("work")} />
          <span className="text-[16px] text-foreground/90 text-center leading-[22px] w-full font-futura">
            Favourite Projects
          </span>
        </div>

        {/* When Not Designing */}
        <div className="flex flex-col items-center gap-1 w-[90px] pointer-events-auto">
          <NotDesigningFolder size={60} onClick={() => onOpenFolder("gallery")} />
          <span className="text-[16px] text-foreground/90 text-center leading-[22px] w-full font-futura">
            When Not Designing
          </span>
        </div>

        {/* My Tools */}
        <div className="flex flex-col items-center gap-1 w-[90px]">
          <ToolsFolder size={60} />
          <span className="text-[16px] text-foreground/90 text-center leading-[22px] w-full font-futura">
            My Tools
          </span>
        </div>

        {/* Resume */}
        <a
          href="https://drive.google.com/drive/folders/1HgE-BijmJ37JeM75gNy0YLDEyw7LtGcf?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 w-[90px] pointer-events-auto hover:scale-105 transition-transform"
        >
          <PdfPng style={{ width: 60, height: 60 }} />
          <span className="text-[16px] text-foreground/90 text-center leading-[22px] font-futura">resume</span>
        </a>
      </div>
    </div>
  );
};

export const DesktopIconsMobile = ({ onOpenFolder }: Props) => (
  <div className="hidden fixed top-10 right-3 z-20 flex flex-col items-center gap-3 select-none">
    {items.map((it) => {
      const Tag: any = it.target ? "button" : "div";
      const interactiveProps = it.target
        ? { onClick: () => onOpenFolder(it.target as PanelKey) }
        : {};
      return (
        <Tag key={it.label} {...interactiveProps} className="flex flex-col items-center gap-0.5">
          <FolderPng style={{ width: 40, height: 40 }} />
          <span className="text-[10px] text-foreground/90 text-center leading-tight max-w-[70px]">{it.label}</span>
        </Tag>
      );
    })}
    <a href="https://drive.google.com/drive/folders/1HgE-BijmJ37JeM75gNy0YLDEyw7LtGcf?dmr=1&ec=wgc-drive-%5Bmodule%5D-goto" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-0.5">
      <PdfPng style={{ width: 40, height: 40 }} />
      <span className="text-[10px] text-foreground/90">resume</span>
    </a>
  </div>
);