import { useCallback, useState } from "react";
import { MenuBar } from "@/components/desktop/MenuBar";
import { HeroComposition } from "@/components/desktop/HeroComposition";
import { DecorativeArrows } from "@/components/desktop/DecorativeArrows";
import { DesktopIcons, DesktopIconsMobile } from "@/components/desktop/DesktopIcons";
import { Dock } from "@/components/desktop/Dock";
import { FinderPanel } from "@/components/panels/FinderPanel";
import { WorkPanel } from "@/components/panels/WorkPanel";
import { AboutPanel } from "@/components/panels/AboutPanel";
import { ExperiencePanel } from "@/components/panels/ExperiencePanel";
import { EducationPanel } from "@/components/panels/EducationPanel";
import { GalleryPanel } from "@/components/panels/GalleryPanel";
import { MusicPanel } from "@/components/panels/MusicPanel";
import { ContactPanel } from "@/components/panels/ContactPanel";
import type { PanelKey } from "@/components/panels/types";

const Index = () => {
  const [current, setCurrent] = useState<PanelKey | null>(null);

  const SEQUENCE: PanelKey[] = ["work", "about", "experience", "gallery", "music", "contact"];

  const getIndex = (key: PanelKey | null) => {
    if (!key) return -1;
    if (key === "education") return SEQUENCE.indexOf("experience");
    return SEQUENCE.indexOf(key);
  };

  const open = useCallback((key: PanelKey) => {
    setCurrent(key);
  }, []);

  const close = useCallback(() => {
    setCurrent(null);
  }, []);

  const goUp = useCallback(() => {
    setCurrent("finder");
  }, []);

  const back = useCallback(() => {
    if (!current) return;
    const idx = getIndex(current);
    if (idx > 0) {
      setCurrent(SEQUENCE[idx - 1]);
    }
  }, [current]);

  const forward = useCallback(() => {
    if (!current) return;
    const idx = getIndex(current);
    if (idx >= 0 && idx < SEQUENCE.length - 1) {
      setCurrent(SEQUENCE[idx + 1]);
    }
  }, [current]);

  const handleFolderOpen = (key: PanelKey) => open(key);

  const renderPanel = () => {
    if (!current) return null;
    const idx = getIndex(current);
    const nav = {
      onClose: close,
      onBack: back,
      onForward: forward,
      onUp: goUp,
      canBack: current !== null && idx > 0,
      canForward: current !== null && idx >= 0 && idx < SEQUENCE.length - 1,
      canUp: current !== null && current !== "finder",
    };
    switch (current) {
      case "finder":
        return <FinderPanel {...nav} onOpen={open} />;
      case "work":
        return <WorkPanel {...nav} onNavigate={open} />;
      case "about":
        return <AboutPanel {...nav} onNavigate={open} />;
      case "experience":
        return <ExperiencePanel {...nav} onNavigate={open} />;
      case "education":
        return <EducationPanel {...nav} onNavigate={open} />;
      case "gallery":
        return <GalleryPanel {...nav} />;
      case "music":
        return <MusicPanel {...nav} />;
      case "contact":
        return <ContactPanel {...nav} />;
    }
  };

  return (
    <main className="desktop-grid relative w-screen h-screen overflow-hidden">
      <MenuBar />

      <div className="absolute inset-0 pt-7">
        <HeroComposition />
        <DecorativeArrows />
        <DesktopIcons onOpenFolder={handleFolderOpen} />
        <DesktopIconsMobile onOpenFolder={handleFolderOpen} />
      </div>

      {/* Panel overlay */}
      {current && (
        <div
          onClick={close}
          className="fixed inset-0 z-40 flex items-center justify-center pt-7 pb-24 px-4"
        >
          {renderPanel()}
        </div>
      )}

      <Dock onOpen={open} />
    </main>
  );
};

export default Index;
