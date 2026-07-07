import finderPng from "@/assets/icons/finder.png";
import folderPng from "@/assets/icons/folder.png";
import photosPng from "@/assets/icons/photos.png";
import notesPng from "@/assets/icons/notes.png";
import musicPng from "@/assets/icons/music.png";
import contactsPng from "@/assets/icons/contacts.png";
import pdfPng from "@/assets/icons/pdf.png";
import calendarPng from "@/assets/icons/Calendar.png";
import figmaPng from "@/assets/icons/Figma.png";
import photoshopPng from "@/assets/icons/Photoshop.png";
import illustratorPng from "@/assets/icons/illustrator.png";
import aftereffectsPng from "@/assets/icons/after-effects.png";
import starburstPng from "@/assets/icons/starburst.png";
import heartPng from "@/assets/icons/Heart.png";
import paintingPng from "@/assets/icons/Painting.png";
import cameraPng from "@/assets/icons/Camera.png";
import coffeePng from "@/assets/icons/Coffee.png";
import phoneHandPng from "@/assets/icons/phone-hand.png";
import laptop1Png from "@/assets/icons/Laptop 1.png";
import laptop2Png from "@/assets/icons/Laptop 2.png";
import type { CSSProperties } from "react";

type IconProps = { className?: string; style?: CSSProperties; alt?: string };

const make = (src: string, defaultAlt: string) => ({ className, style, alt }: IconProps) => (
  <img src={src} alt={alt ?? defaultAlt} className={className} style={style} draggable={false} />
);

export const FinderPng = make(finderPng, "Finder");
export const FolderPng = make(folderPng, "Folder");
export const PhotosPng = make(photosPng, "Photos");
export const NotesPng = make(notesPng, "Notes");
export const MusicPng = make(musicPng, "Music");
export const ContactsPng = make(contactsPng, "Contacts");
export const PdfPng = make(pdfPng, "PDF");
export const CalendarPng = make(calendarPng, "Calendar");
export const FigmaPng = make(figmaPng, "Figma");
export const PhotoshopPng = make(photoshopPng, "Photoshop");
export const IllustratorPng = make(illustratorPng, "Illustrator");
export const AfterEffectsPng = make(aftereffectsPng, "After Effects");
export const StarburstPng = make(starburstPng, "Starburst");
export const HeartPng = make(heartPng, "Heart");
export const PaintingPng = make(paintingPng, "Painting");
export const CameraPng = make(cameraPng, "Camera");
export const CoffeePng = make(coffeePng, "Coffee");
export const PhoneHandPng = make(phoneHandPng, "Phone Hand");
export const Laptop1Png = make(laptop1Png, "Laptop 1");
export const Laptop2Png = make(laptop2Png, "Laptop 2");