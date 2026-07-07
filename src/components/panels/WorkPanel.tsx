import { MacWindow } from "./MacWindow";
import { FinderSidebar } from "./FinderSidebar";
import type { PanelKey } from "./types";
import { LayoutGrid, Rows3, Share, Tag, MoreHorizontal, Search } from "lucide-react";
import g2 from "@/assets/work-g2.png";
import truenorth from "@/assets/work-truenorth.png";
import kala from "@/assets/work-kalamitra.png";

type Props = {
  onClose: () => void;
  onNavigate: (k: PanelKey) => void;
  onBack?: () => void;
  onForward?: () => void;
  onUp?: () => void;
  canBack?: boolean;
  canForward?: boolean;
  canUp?: boolean;
};

const projects = [
  {
    title: "G2 Interiors",
    tag: "Website design",
    img: g2,
    url: "https://www.behance.net/gallery/242231381/Interior-Design-Company-Website-Case-Study",
  },
  {
    title: "True North",
    tag: "Website design",
    img: truenorth,
    url: "https://www.behance.net/gallery/238978961/Photography-Videography-Website-Design",
  },
  {
    title: "Kala Mitra",
    tag: "App design",
    img: kala,
    url: "https://www.behance.net/gallery/227675519/Kalahaat-UIUX-Case-study",
  },
];

export const WorkPanel = (p: Props) => (
  <MacWindow
    {...p}
    width={820}
    height={520}
    sidebar={<FinderSidebar active="work" onNavigate={p.onNavigate} onClose={p.onClose} />}
    title="Work"
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
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
      {projects.map((pr) => (
        <a
          key={pr.title}
          href={pr.url ?? "#"}
          target={pr.url ? "_blank" : undefined}
          rel={pr.url ? "noreferrer" : undefined}
          className="group block"
        >
          <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted">
            <img src={pr.img} alt={pr.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="mt-3">
            <h3 className="text-[15px] font-semibold">{pr.title}</h3>
            <p className="text-xs text-muted-foreground">{pr.tag}</p>
          </div>
        </a>
      ))}
    </div>
  </MacWindow>
);

const ToolBtn = ({ children }: { children: React.ReactNode }) => (
  <button className="w-7 h-7 rounded-md bg-card hover:bg-muted shadow-sm border border-border/60 flex items-center justify-center text-foreground/80">
    {children}
  </button>
);