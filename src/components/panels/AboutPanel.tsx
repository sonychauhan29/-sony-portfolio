import { MacWindow } from "./MacWindow";
import { NotesSidebar } from "./NotesSidebar";
import { NotesToolbarCenter, NotesToolbarRight } from "./NotesToolbar";
import collage from "@/assets/about-collage.png";
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

export const AboutPanel = (p: Props) => (
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
    sidebar={<NotesSidebar active="about" onClose={p.onClose} onNavigate={p.onNavigate} />}
    toolbarCenter={<NotesToolbarCenter title="About me" subtitle="1 note" />}
    toolbarRight={<NotesToolbarRight />}
  >
    <div className="px-6 sm:px-8 py-5">
      <p className="text-center text-[11px] text-muted-foreground mb-4">
        31 March  2026 at 12:20 PM
      </p>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start">
        <div className="space-y-3 text-[13px] leading-relaxed text-foreground/85 max-w-[340px]">
          <p>
            Hi, my name is Sony, and I am a{" "}
            <span className="font-semibold text-foreground">UI/UX and brand designer.</span> I
            like to keep things simple and real.
          </p>
          <p>
            I enjoy exploring new places, noticing small details, and learning as I go.
            I'm always curious about how things work and how they can be better.
          </p>
          <p>
            When I'm not working, you'll probably find me taking a break, clicking
            pictures, or just enjoying a quiet moment.
          </p>
        </div>
        <img
          src={collage}
          alt="Photo collage of Sony"
          className="w-full max-w-[300px] md:w-[300px] justify-self-center md:justify-self-end select-none pointer-events-none"
        />
      </div>
    </div>
  </MacWindow>
);