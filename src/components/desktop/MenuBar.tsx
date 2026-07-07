import { AppleLogo } from "../icons/AppIcons";
import { Wifi, BatteryFull, Search } from "lucide-react";

const items = ["Finder", "File", "Edit", "View", "Go", "Window", "Help"];

export const MenuBar = () => (
  <div className="menubar-glass fixed top-0 left-0 right-0 z-50 h-7 px-3 flex items-center justify-between text-white text-[13px] select-none">
    <div className="flex items-center gap-4">
      <AppleLogo className="w-3.5 h-3.5" />
      <span className="font-semibold">Finder</span>
      <div className="hidden sm:flex items-center gap-4 text-[13px]">
        {items.slice(1).map((m) => (
          <span key={m} className="opacity-95 hover:opacity-100 cursor-default">{m}</span>
        ))}
      </div>
    </div>
    <div className="flex items-center gap-3">
      <Wifi className="w-3.5 h-3.5" />
      <BatteryFull className="w-4 h-4" />
      <Search className="w-3.5 h-3.5 hidden sm:block" />
      <span className="font-medium">Mon Jun 22  9:41 AM</span>
    </div>
  </div>
);