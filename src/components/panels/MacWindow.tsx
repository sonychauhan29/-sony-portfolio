import { ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  title?: ReactNode;
  toolbarRight?: ReactNode;
  toolbarCenter?: ReactNode;
  sidebar?: ReactNode;
  children: ReactNode;
  width?: number | string;
  height?: number | string;
  onClose: () => void;
  onBack?: () => void;
  onForward?: () => void;
  onUp?: () => void;
  canBack?: boolean;
  canForward?: boolean;
  canUp?: boolean;
  toolbarBg?: string;
};

export const TrafficLights = ({ onClose }: { onClose: () => void }) => (
  <div className="flex items-center gap-[9px]">
    <button
      onClick={onClose}
      aria-label="Close"
      className="w-4 h-4 rounded-full bg-traffic-red hover:brightness-95 ring-1 ring-black/10"
    />
    <button aria-label="Minimize" className="w-4 h-4 rounded-full bg-traffic-yellow ring-1 ring-black/10" />
    <button aria-label="Maximize" className="w-4 h-4 rounded-full bg-traffic-green ring-1 ring-black/10" />
  </div>
);

export const MacWindow = ({
  title,
  toolbarRight,
  toolbarCenter,
  sidebar,
  children,
  width = 774,
  height = 480,
  onClose,
  onBack,
  onForward,
  onUp,
  canBack,
  canForward,
  canUp,
  toolbarBg = "bg-card",
}: Props) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-card window-shadow overflow-hidden animate-window-in flex flex-col"
      style={{
        width: "min(95vw, " + (typeof width === "number" ? width + "px" : width) + ")",
        height: "min(85vh, " + (typeof height === "number" ? height + "px" : height) + ")",
        borderRadius: 24,
      }}
    >
      <div className="flex flex-1 min-h-0">
        {sidebar}
        <div className="flex flex-col flex-1 min-w-0">
          <div className={"h-11 flex items-center gap-2 px-3 border-b border-border/60 " + toolbarBg }>
            {!sidebar && <TrafficLights onClose={onClose} />}
            {sidebar && <div className="sm:hidden"><TrafficLights onClose={onClose} /></div>}
            <div className="flex items-center gap-1 ml-1">
              <button
                onClick={onBack}
                disabled={!canBack}
                className="w-6 h-6 rounded-md hover:bg-muted disabled:opacity-30 flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={onForward}
                disabled={!canForward}
                className="w-6 h-6 rounded-md hover:bg-muted disabled:opacity-30 flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={onUp}
                disabled={!canUp}
                className="w-6 h-6 rounded-md hover:bg-muted disabled:opacity-30 flex items-center justify-center"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 text-center text-[13px] font-semibold truncate">{toolbarCenter ?? title}</div>
            <div className="flex items-center gap-1.5">{toolbarRight}</div>
          </div>
          <div className="flex-1 min-h-0 overflow-auto bg-card">{children}</div>
        </div>
      </div>
    </div>
  );
};