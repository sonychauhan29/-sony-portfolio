import { LayoutGrid, Rows3, Share, Tag, MoreHorizontal, Search } from "lucide-react";
import { MacWindow } from "./MacWindow";
import { FinderSidebar } from "./FinderSidebar";
import { CalendarIcon, StickiesIcon } from "../icons/AppIcons";
import { FolderPng, NotesPng, PhotosPng, MusicPng, ContactsPng, CalendarPng } from "../icons/PngIcons";
import type { PanelKey } from "./types";
import type { CSSProperties } from "react";

type Props = {
  onClose: () => void;
  onOpen: (k: PanelKey) => void;
  onBack?: () => void;
  onForward?: () => void;
  onUp?: () => void;
  canBack?: boolean;
  canForward?: boolean;
  canUp?: boolean;
};

const apps: { key: PanelKey; label: string; Icon: React.FC<{ className?: string; style?: CSSProperties }> }[] = [
  { key: "work", label: "Work", Icon: FolderPng },
  { key: "about", label: "About me", Icon: NotesPng },
  { key: "experience", label: "Experience", Icon: CalendarPng },
  { key: "gallery", label: "Gallery", Icon: PhotosPng },
  { key: "music", label: "My music", Icon: MusicPng },
  { key: "contact", label: "Contact", Icon: ContactsPng },
];

const ToolBtn = ({ children }: { children: React.ReactNode }) => (
  <button className="w-7 h-7 rounded-md bg-card hover:bg-muted shadow-sm border border-border/60 flex items-center justify-center text-foreground/80">
    {children}
  </button>
);

export const FinderPanel = (props: Props) => (
  <MacWindow
    onClose={props.onClose}
    onBack={props.onBack}
    onForward={props.onForward}
    onUp={props.onUp}
    canBack={props.canBack}
    canForward={props.canForward}
    canUp={props.canUp}
    width={774}
    height={420}
    sidebar={<FinderSidebar active="applications" onNavigate={props.onOpen} onClose={props.onClose} />}
    title="Applications"
    toolbarRight={
      <>
        <ToolBtn><LayoutGrid className="w-3.5 h-3.5" /></ToolBtn>
        <ToolBtn><Rows3 className="w-3.5 h-3.5" /></ToolBtn>
        <ToolBtn><Share className="w-3.5 h-3.5" /></ToolBtn>
        <ToolBtn><Tag className="w-3.5 h-3.5" /></ToolBtn>
        <ToolBtn><MoreHorizontal className="w-3.5 h-3.5" /></ToolBtn>
        <ToolBtn><Search className="w-3.5 h-3.5" /></ToolBtn>
      </>
    }
  >
    <div className="p-8 grid grid-cols-3 sm:grid-cols-5 gap-y-6 gap-x-4 justify-items-center">
      {apps.map(({ key, label, Icon }) => (
        <button
          key={key}
          onClick={() => props.onOpen(key)}
          className="flex flex-col items-center gap-1.5 hover:scale-105 transition-transform"
        >
          <Icon className="w-[70px] h-[70px]" />
          <span className="text-[11px] text-foreground/90">{label}</span>
        </button>
      ))}
    </div>
  </MacWindow>
);