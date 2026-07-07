import { MacWindow, TrafficLights } from "./MacWindow";
import { Search, Share, Plus, Pencil, Copy } from "lucide-react";
import { BehanceMark, GmailMark, LinkedInMark } from "../icons/AppIcons";
import profile from "@/assets/profile-girl.png";

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
  <aside className="w-[200px] shrink-0 bg-secondary p-2.5 hidden sm:flex flex-col" style={{ borderTopLeftRadius: 24, borderBottomLeftRadius: 24 }}>
    <div className="h-7 flex items-center px-1"><TrafficLights onClose={onClose} /></div>
    <div className="mt-2 flex items-center gap-1 bg-card rounded-md px-2 py-1 border border-border/60">
      <Search className="w-3 h-3 text-muted-foreground" />
      <input placeholder="Search" className="bg-transparent outline-none text-[11px] w-full" />
    </div>
    <p className="text-[10px] uppercase tracking-wide text-muted-foreground mt-4 px-1">My Contacts</p>
    <p className="text-[10px] text-muted-foreground mt-3 px-1">B</p>
    <a href="https://www.behance.net/sonychauhan29" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] hover:bg-muted">
      <BehanceMark className="w-4 h-4" /> Behance
    </a>
    <p className="text-[10px] text-muted-foreground mt-3 px-1">G</p>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sonychauhan2905@gmail.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] hover:bg-muted">
      <GmailMark className="w-4 h-4" /> Gmail
    </a>
    <p className="text-[10px] text-muted-foreground mt-3 px-1">L</p>
    <a href="https://www.linkedin.com/in/sony-chauhan-445355298/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] hover:bg-muted">
      <LinkedInMark className="w-4 h-4" /> Linkedin
    </a>
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=sonychauhan2905@gmail.com"
      target="_blank"
      rel="noreferrer"
      className="mt-auto block text-center text-[12px] font-medium bg-card border border-border/60 rounded-full py-1.5 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      Send Mail
    </a>
  </aside>
);

const Field = ({ label, value, href }: { label: string; value: string; href: string }) => (
  <div className="flex items-center justify-between border-b border-border/60 py-3">
    <div>
      <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</p>
      <a href={href} className="text-[14px] text-primary hover:underline">{value}</a>
    </div>
    <button onClick={() => navigator.clipboard?.writeText(value)} aria-label="Copy" className="text-muted-foreground hover:text-foreground">
      <Copy className="w-4 h-4" />
    </button>
  </div>
);

export const ContactPanel = (p: Props) => (
  <MacWindow
    {...p}
    width={760}
    height={520}
    sidebar={<Sidebar onClose={p.onClose} />}
    title="Contacts"
    toolbarRight={
      <>
        <button className="w-7 h-7 rounded-md bg-card border border-border/60 shadow-sm flex items-center justify-center"><Share className="w-3.5 h-3.5" /></button>
        <button className="w-7 h-7 rounded-md bg-card border border-border/60 shadow-sm flex items-center justify-center"><Plus className="w-3.5 h-3.5" /></button>
        <button className="w-7 h-7 rounded-md bg-card border border-border/60 shadow-sm flex items-center justify-center"><Pencil className="w-3.5 h-3.5" /></button>
      </>
    }
  >
    <div className="p-8 max-w-md mx-auto text-center">
      <img src={profile} alt="Sony Chauhan" loading="lazy" className="w-28 h-28 rounded-full object-cover mx-auto ring-4 ring-muted" />
      <h2 className="mt-4 text-2xl font-bold">Sony Chauhan</h2>
      <p className="text-sm text-muted-foreground">UI/UX Designer & Brand Designer</p>
      <div className="mt-6 text-left">
        <Field label="Email" value="sonychauhan2905@gmail.com" href="mailto:sonychauhan2905@gmail.com" />
        <Field label="Phone" value="+91 63980 50432" href="tel:+916398050432" />
        <Field label="Website" value="sonychauhan.com" href="https://sonychauhan.com" />
      </div>
    </div>
  </MacWindow>
);