import { MacWindow, TrafficLights } from "./MacWindow";
import { Heart, Clock3, Map, Film, Camera, Users, Search, Tag, List, ChevronsRight } from "lucide-react";
import g1 from "@/assets/gallery-mountains.jpg";
import g2 from "@/assets/gallery-temple.jpg";
import g3 from "@/assets/gallery-pizza.jpg";
import g4 from "@/assets/gallery-coffee.jpg";
import g5 from "@/assets/gallery-flowers.jpg";
import g6 from "@/assets/gallery-dress.jpg";
import g7 from "@/assets/gallery-lake.jpg";
import g8 from "@/assets/gallery-cafe.jpg";
import profile from "@/assets/profile.jpg";

type Props = {
  onClose: () => void;
  onBack?: () => void;
  onForward?: () => void;
  onUp?: () => void;
  canBack?: boolean;
  canForward?: boolean;
  canUp?: boolean;
};

const Sidebar = ({ onClose }: { onClose: () => void }) => (
  <aside className="w-[200px] shrink-0 bg-secondary p-2.5 hidden sm:flex flex-col gap-0.5" style={{ borderTopLeftRadius: 24, borderBottomLeftRadius: 24 }}>
    <div className="h-7 flex items-center px-1"><TrafficLights onClose={onClose} /></div>
    <button className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] font-medium bg-primary/10 text-primary mt-2">
      <Camera className="w-3.5 h-3.5" /> Library
    </button>
    <button className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] hover:bg-muted">
      <Camera className="w-3.5 h-3.5 text-muted-foreground" /> Collections
    </button>
    <p className="text-[10px] uppercase tracking-wide text-muted-foreground mt-4 px-2">Pinned</p>
    {[
      { label: "Favourites", Icon: Heart },
      { label: "Recently Saved", Icon: Clock3 },
      { label: "Map", Icon: Map },
      { label: "Videos", Icon: Film },
      { label: "Screenshots", Icon: Camera },
      { label: "People & Pets", Icon: Users },
    ].map((it) => (
      <button key={it.label} className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] hover:bg-muted">
        <it.Icon className="w-3.5 h-3.5 text-primary/70" /> {it.label}
      </button>
    ))}
  </aside>
);

const photos = [g1, g2, g3, g4, g5, g6, g7, g8, profile];

export const GalleryPanel = (p: Props) => (
  <MacWindow
    {...p}
    width={820}
    height={520}
    sidebar={<Sidebar onClose={p.onClose} />}
    title="Library / 11 Mar 2026 – 20 Apr 2026"
    toolbarRight={
      <>
        <button className="w-7 h-7 rounded-md bg-card border border-border/60 shadow-sm flex items-center justify-center"><Tag className="w-3.5 h-3.5" /></button>
        <button className="w-7 h-7 rounded-md bg-card border border-border/60 shadow-sm flex items-center justify-center"><List className="w-3.5 h-3.5" /></button>
        <button className="w-7 h-7 rounded-md bg-card border border-border/60 shadow-sm flex items-center justify-center"><ChevronsRight className="w-3.5 h-3.5" /></button>
        <button className="w-7 h-7 rounded-md bg-card border border-border/60 shadow-sm flex items-center justify-center"><Search className="w-3.5 h-3.5" /></button>
      </>
    }
  >
    <div className="p-3 grid grid-cols-3 gap-1.5">
      {photos.map((src, i) => (
        <div key={i} className="aspect-square overflow-hidden rounded-md bg-muted">
          <img src={src} alt="" loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
      ))}
    </div>
  </MacWindow>
);