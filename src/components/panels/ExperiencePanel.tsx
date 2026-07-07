import { MacWindow } from "./MacWindow";
import { NotesSidebar } from "./NotesSidebar";
import { NotesToolbarCenter, NotesToolbarRight } from "./NotesToolbar";
import type { PanelKey } from "./types";

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

type Item = {
  co: string;
  role: string;
  date: string;
  body: string;
  link?: boolean;
};

const items: Item[] = [
  {
    co: "Unico Studios",
    role: "UI/UX Designer (Intern)",
    date: "Sep–Nov 2025",
    body: "Created structured UI designs for multiple websites using strong visual hierarchy and typography.",
  },
  {
    co: "DigiVikreta",
    role: "UI/UX Designer (Part time)",
    date: "Aug–Nov 2025",
    body: "Designed user-centric web and mobile interfaces with a focus on usability and design consistency.",
    link: true,
  },
  {
    co: "BlueCS",
    role: "UI/UX Designer (Intern)",
    date: "Jun–Aug 2025",
    body: "Collaborated with a team to enhance app features and maintain a scalable design system.",
  },
  {
    co: "Eklavya",
    role: "UI/UX Designer (Intern)",
    date: "Mar–Apr 2025",
    body: "Designed an intuitive and engaging homepage for a children-focused learning platform.",
  },
  {
    co: "GoArtful",
    role: "UX Researcher (Intern)",
    date: "Jan–Mar 2025",
    body: "Conducted user research and translated insights into data-driven design decisions.",
  },
];

export const ExperiencePanel = (p: Props) => (
  <MacWindow
    onClose={p.onClose}
    onBack={p.onBack}
    onForward={p.onForward}
    onUp={p.onUp}
    canBack={p.canBack}
    canForward={p.canForward}
    canUp={p.canUp}
    width={780}
    height={490}
    sidebar={<NotesSidebar active="experience" onClose={p.onClose} onNavigate={p.onNavigate} />}
    toolbarCenter={<NotesToolbarCenter title="Experience" subtitle={`${items.length} notes`} />}
    toolbarRight={<NotesToolbarRight />}
  >
    <div className="px-6 sm:px-8 py-5 h-full overflow-y-auto">
      <p className="text-center text-[11px] text-muted-foreground mb-4">
        31 March  2026 at 12:20 PM
      </p>
      <ul className="space-y-5 max-w-[520px]">
        {items.map((it) => (
          <li key={it.co} className="flex gap-3">
            <span className="mt-1.5 w-3 h-3 rounded-full border border-foreground/40 shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-[17px] font-semibold leading-tight">
                {it.co}
              </h3>
              <div className="flex items-center gap-6 mt-1 text-[12px] text-muted-foreground">
                <span>{it.role}</span>
                <span>{it.date}</span>
              </div>
              <p className="text-[12.5px] text-foreground/80 mt-1.5 leading-relaxed">
                {it.body}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </MacWindow>
);