import { Edit3, ListChecks, Table2, Search } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
};

export const NotesToolbarRight = () => (
  <>
    <button className="w-7 h-7 rounded-md bg-card border border-border/60 shadow-sm flex items-center justify-center">
      <Edit3 className="w-3.5 h-3.5" />
    </button>
    <div className="hidden md:flex items-center gap-1 bg-card border border-border/60 shadow-sm rounded-md px-2 h-7">
      <span className="text-[13px] font-serif font-semibold leading-none">Aa</span>
    </div>
    <button className="w-7 h-7 rounded-md bg-card border border-border/60 shadow-sm flex items-center justify-center">
      <ListChecks className="w-3.5 h-3.5" />
    </button>
    <button className="w-7 h-7 rounded-md bg-card border border-border/60 shadow-sm flex items-center justify-center">
      <Table2 className="w-3.5 h-3.5" />
    </button>
    <button className="w-7 h-7 rounded-md bg-card border border-border/60 shadow-sm flex items-center justify-center">
      <Search className="w-3.5 h-3.5" />
    </button>
  </>
);

export const NotesToolbarCenter = ({ title, subtitle }: Props) => (
  <div className="flex flex-col items-center leading-tight">
    <span className="text-[13px] font-semibold">{title}</span>
    <span className="text-[10px] text-muted-foreground">{subtitle}</span>
  </div>
);