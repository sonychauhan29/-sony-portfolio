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

const items = [
  {
    title: "Bachelor's Degree (UI/UX)",
    line1: "Lovely Professional University (2023–2027)",
    line2: "CGPA 8.77",
  },
  {
    title: "Secondary Education",
    line1: "Radiant Stars English School (2023)",
    line2: "Percentage 93.6%",
  },
];

export const EducationPanel = (p: Props) => (
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
    sidebar={<NotesSidebar active="education" onClose={p.onClose} onNavigate={p.onNavigate} />}
    toolbarCenter={<NotesToolbarCenter title="Education" subtitle={`${items.length} notes`} />}
    toolbarRight={<NotesToolbarRight />}
  >
    <div className="px-6 sm:px-8 py-5">
      <p className="text-center text-[11px] text-muted-foreground mb-4">
        31 March  2026 at 12:20 PM
      </p>
      <ul className="space-y-6 max-w-[520px]">
        {items.map((it) => (
          <li key={it.title} className="flex gap-3">
            <span className="mt-1.5 w-3 h-3 rounded-full border border-foreground/40 shrink-0" />
            <div>
              <h3 className="text-[17px] font-semibold leading-tight">{it.title}</h3>
              <p className="text-[12.5px] text-foreground/85 mt-2">{it.line1}</p>
              <p className="text-[12.5px] text-foreground/85 mt-1.5">{it.line2}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </MacWindow>
);