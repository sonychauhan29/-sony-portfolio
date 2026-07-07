import { Folder } from "lucide-react";
import { TrafficLights } from "./MacWindow";
import type { PanelKey } from "./types";

type Tab = "about" | "experience" | "education";

type Props = {
  active: Tab;
  onClose: () => void;
  onNavigate: (k: PanelKey) => void;
};

const tabs: { key: Tab; label: string; panel: PanelKey }[] = [
  { key: "about", label: "About me", panel: "about" },
  { key: "experience", label: "Experience", panel: "experience" },
  { key: "education", label: "Education", panel: "education" },
];

export const NotesSidebar = ({ active, onClose, onNavigate }: Props) => (
  <aside
    className="w-[170px] shrink-0 bg-secondary p-2.5 hidden sm:flex flex-col gap-1"
    style={{ borderTopLeftRadius: 24, borderBottomLeftRadius: 24 }}
  >
    <div className="h-7 flex items-center px-1">
      <TrafficLights onClose={onClose} />
    </div>
    <button className="mt-2 flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] font-medium text-foreground hover:bg-muted/60">
      <Folder className="w-3.5 h-3.5 text-muted-foreground" /> All iCloud
    </button>
    {tabs.map((t) => {
      const isActive = active === t.key;
      return (
        <button
          key={t.key}
          onClick={() => !isActive && onNavigate(t.panel)}
          className={
            "flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] " +
            (isActive
              ? "bg-muted font-medium text-[#FFB400]"
              : "text-foreground hover:bg-muted/60")
          }
        >
          <Folder
            className={
              "w-3.5 h-3.5 " +
              (isActive ? "text-[#FFB400]" : "text-[#565656]")
            }
          />{" "}
          {t.label}
        </button>
      );
    })}
  </aside>
);