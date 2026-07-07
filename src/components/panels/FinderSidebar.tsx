import {
  Briefcase, User2, Award, Image as ImageIcon, Music2, Mail, Clock,
} from "lucide-react";
import type { PanelKey } from "./types";
import { TrafficLights } from "./MacWindow";

type Props = {
  active: PanelKey | "applications";
  onNavigate: (key: PanelKey) => void;
  onClose: () => void;
};

const items: { key: PanelKey; label: string; Icon: typeof Briefcase }[] = [
  { key: "work", label: "Work", Icon: Briefcase },
  { key: "about", label: "About me", Icon: User2 },
  { key: "experience", label: "Experience", Icon: Award },
  { key: "gallery", label: "Gallery", Icon: ImageIcon },
  { key: "music", label: "My music", Icon: Music2 },
  { key: "contact", label: "Contact", Icon: Mail },
];

export const FinderSidebar = ({ active, onNavigate, onClose }: Props) => (
  <aside className="w-[156px] shrink-0 bg-secondary p-2 hidden sm:flex flex-col gap-1" style={{ borderTopLeftRadius: 24, borderBottomLeftRadius: 24 }}>
    <div className="h-7 flex items-center px-2"><TrafficLights onClose={onClose} /></div>
    <button
      className={
        "flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] font-medium " +
        (active === "applications" ? "bg-muted text-primary" : "hover:bg-muted")
      }
    >
      <Clock className="w-3.5 h-3.5" /> Applications
    </button>
    <div className="mt-2 flex flex-col gap-0.5">
      {items.map(({ key, label, Icon }) => {
        const isActive = active === key;
        return (
          <button
            key={key}
            onClick={() => onNavigate(key)}
            className={
              "flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] " +
              (isActive ? "bg-primary/10 text-primary font-medium" : "text-foreground hover:bg-muted")
            }
          >
            <Icon className={"w-3.5 h-3.5 " + (isActive ? "text-primary" : "text-muted-foreground")} /> {label}
          </button>
        );
      })}
    </div>
  </aside>
);