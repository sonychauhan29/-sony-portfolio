import { FinderPng, FolderPng, PhotosPng, NotesPng, ContactsPng, MusicPng } from "../icons/PngIcons";
import type { PanelKey } from "../panels/types";

type Props = { onOpen: (key: PanelKey) => void };

const cls =
  "w-9 h-9 sm:w-12 sm:h-12 shrink-0 aspect-square object-contain hover:scale-125 hover:-translate-y-1 transition-transform duration-150 origin-bottom";

export const Dock = ({ onOpen }: Props) => (
  <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[95vw]">
    <div className="frosted rounded-2xl px-2.5 sm:px-3 py-2 sm:py-2 flex items-end gap-3 sm:gap-2 shadow-[0_8px_30px_rgba(0,0,0,0.18)] min-w-max overflow-visible">
      <button onClick={() => onOpen("finder")} aria-label="Finder"><FinderPng className={cls} /></button>
      <button onClick={() => onOpen("work")} aria-label="Work"><FolderPng className={cls} /></button>
      <button onClick={() => onOpen("gallery")} aria-label="Photos"><PhotosPng className={cls} /></button>
      <button onClick={() => onOpen("about")} aria-label="Notes"><NotesPng className={cls} /></button>
      <span className="w-px h-8 sm:h-9 bg-foreground/15 mx-0.5 sm:mx-1" />
      <button onClick={() => onOpen("contact")} aria-label="Contacts"><ContactsPng className={cls} /></button>
      <button onClick={() => onOpen("music")} aria-label="Music"><MusicPng className={cls} /></button>
    </div>
  </div>
);