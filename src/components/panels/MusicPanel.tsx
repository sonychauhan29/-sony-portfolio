import { MacWindow, TrafficLights } from "./MacWindow";
import { Search, Home, Radio, ListMusic, User, Disc3, Music2, Store, Plus, MoreHorizontal, Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import musicBlue from "@/assets/music-blue.png";
import musicKhat from "@/assets/music-khat.png";
import musicLove from "@/assets/music-love.png";
import musicPyar from "@/assets/music-pyar.png";
import musicDiet from "@/assets/music-diet.png";

type Props = {
  onClose: () => void;
  onBack?: () => void;
  onForward?: () => void;
  onUp?: () => void;
  canBack?: boolean;
  canForward?: boolean;
  canUp?: boolean;
};

const songs = [
  { title: "Blue", artist: "yung Kai", time: "3:34", cover: musicBlue, audio: "./music/Blue.mp3" },
  { title: "Khat", artist: "Navjot Ahuja", time: "4:56", cover: musicKhat, audio: "./music/Khat.mp3" },
  { title: "I think they call this love", artist: "Matthew Ifield", time: "3:16", cover: musicLove, audio: "./music/Love.mp3" },
  { title: "Pyar diwana hota hai", artist: "Kishore Kumar, R.D. Burman", time: "4:44", cover: musicPyar, audio: "./music/Pyar.mp3" },
  { title: "Diet mountain dew", artist: "Lana Del Rey", time: "3:42", cover: musicDiet, audio: "./music/DietMountainDew.mp3" },
];

const formatTime = (seconds: number) => {
  if (isNaN(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const Sidebar = ({ onClose }: { onClose: () => void }) => (
  <aside className="w-[200px] shrink-0 bg-secondary p-2.5 hidden sm:flex flex-col gap-0.5" style={{ borderTopLeftRadius: 24, borderBottomLeftRadius: 24 }}>
    <div className="h-7 flex items-center px-1"><TrafficLights onClose={onClose} /></div>
    <button className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] font-medium bg-muted mt-2">
      <Search className="w-3.5 h-3.5 text-destructive" /> Search
    </button>
    <button className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] hover:bg-muted"><Home className="w-3.5 h-3.5 text-destructive" /> Home</button>
    <button className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] hover:bg-muted"><Radio className="w-3.5 h-3.5 text-destructive" /> Radio</button>
    <p className="text-[10px] uppercase tracking-wide text-muted-foreground mt-3 px-2">Library</p>
    <button className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] hover:bg-muted"><Plus className="w-3.5 h-3.5" /> Recently Added</button>
    <button className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] hover:bg-muted"><User className="w-3.5 h-3.5" /> Artists</button>
    <button className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] hover:bg-muted"><Disc3 className="w-3.5 h-3.5" /> Album</button>
    <button className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] hover:bg-muted"><Music2 className="w-3.5 h-3.5" /> Songs</button>
    <p className="text-[10px] uppercase tracking-wide text-muted-foreground mt-3 px-2">Stores</p>
    <button className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[12px] hover:bg-muted"><Store className="w-3.5 h-3.5" /> iTunes Store</button>
    <div className="mt-auto" />
  </aside>
);

export const MusicPanel = (p: Props) => {
  const [playing, setPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const current = songs[currentSongIndex];

  // Single effect to handle play/pause/source changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Apply volume
    audio.volume = volume;

    if (playing) {
      // Use a promise to catch errors like 'user hasn't interacted with document'
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.error("Playback error:", err);
          // Don't flip playing to false here immediately, 
          // as it might be a temporary state or browser policy
        });
      }
    } else {
      audio.pause();
    }
  }, [playing, currentSongIndex, volume]);

  // Handle cleanup
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const skipForward = useCallback(() => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    setPlaying(true);
  }, []);

  const skipBackward = useCallback(() => {
    const audio = audioRef.current;
    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
      setCurrentTime(0);
    } else {
      setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
      setPlaying(true);
    }
  }, []);

  const handleSongClick = (index: number) => {
    if (index === currentSongIndex) {
      setPlaying(!playing);
    } else {
      setCurrentSongIndex(index);
      setPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      // If we were supposed to be playing, ensure we play now that source is loaded
      if (playing) {
        audioRef.current.play().catch(e => console.error("Play on load failed:", e));
      }
    }
  };

  const handleEnded = () => {
    skipForward();
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = progressRef.current;
    const audio = audioRef.current;
    if (!bar || !audio || !duration) return;

    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const fraction = Math.max(0, Math.min(1, clickX / rect.width));
    audio.currentTime = fraction * duration;
    setCurrentTime(audio.currentTime);
  };

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newVol = Math.max(0, Math.min(1, clickX / rect.width));
    setVolume(newVol);
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <MacWindow
      {...p}
      width={820}
      height={520}
      sidebar={<Sidebar onClose={p.onClose} />}
      title="My Music"
      toolbarRight={
        <>
          <button className="w-7 h-7 rounded-md bg-card border border-border/60 shadow-sm flex items-center justify-center"><Plus className="w-3.5 h-3.5" /></button>
          <button className="w-7 h-7 rounded-md bg-card border border-border/60 shadow-sm flex items-center justify-center"><MoreHorizontal className="w-3.5 h-3.5" /></button>
        </>
      }
    >
      <div className="flex flex-col h-full">
        <audio
          ref={audioRef}
          src={current.audio}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          preload="auto"
        />
        <div className="flex-1 overflow-auto">
          <div className="grid grid-cols-[1fr_1fr_60px] text-[11px] uppercase tracking-wide text-muted-foreground px-5 py-2 border-b border-border/60">
            <span>Song</span>
            <span>Artist</span>
            <span className="text-right">Time</span>
          </div>
          {songs.map((s, i) => {
            const isCurrent = i === currentSongIndex;
            const isPlaying = isCurrent && playing;
            return (
              <div
                key={s.title}
                onClick={() => handleSongClick(i)}
                className={
                  "grid grid-cols-[1fr_1fr_60px] items-center text-[13px] px-5 py-2 border-b border-border/40 cursor-pointer hover:bg-muted/60 transition-colors " +
                  (isCurrent ? "bg-muted/40" : (i % 2 ? "bg-muted/20" : ""))
                }
              >
                <span className="flex items-center gap-2.5 min-w-0">
                  <div className="relative w-8 h-8 shrink-0">
                    <img src={s.cover} alt={s.title} className="w-8 h-8 rounded object-cover" />
                    {isPlaying && (
                      <div className="absolute inset-0 bg-black/40 rounded flex items-center justify-center">
                        <div className="flex items-end gap-[2px] h-3">
                          <span className="w-[2px] bg-white animate-pulse" style={{ height: '60%', animationDelay: '0ms' }} />
                          <span className="w-[2px] bg-white animate-pulse" style={{ height: '100%', animationDelay: '150ms' }} />
                          <span className="w-[2px] bg-white animate-pulse" style={{ height: '40%', animationDelay: '300ms' }} />
                        </div>
                      </div>
                    )}
                  </div>
                  <span className={"truncate " + (isCurrent ? "font-medium text-primary" : "")}>{s.title}</span>
                </span>
                <span className="text-muted-foreground truncate">{s.artist}</span>
                <span className="text-right text-muted-foreground">{s.time}</span>
              </div>
            );
          })}
        </div>

        <div className="border-t border-border/60 px-4 py-2.5 flex flex-col gap-1.5 bg-card">
          <div className="flex items-center gap-2 px-1">
            <span className="text-[10px] text-muted-foreground w-8 text-right tabular-nums">{formatTime(currentTime)}</span>
            <div
              ref={progressRef}
              onClick={handleProgressClick}
              className="flex-1 h-1 bg-muted rounded-full overflow-hidden cursor-pointer group relative"
            >
              <div
                className="h-full bg-foreground/60 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[10px] text-muted-foreground w-8 tabular-nums">{formatTime(duration)}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={skipBackward}
              className="w-7 h-7 flex items-center justify-center hover:text-primary transition-colors"
            >
              <SkipBack className="w-4 h-4" />
            </button>
            <button
              onClick={() => setPlaying((v) => !v)}
              className="w-9 h-9 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-80 transition-opacity"
            >
              {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button
              onClick={skipForward}
              className="w-7 h-7 flex items-center justify-center hover:text-primary transition-colors"
            >
              <SkipForward className="w-4 h-4" />
            </button>
            <img src={current.cover} alt={current.title} className="w-10 h-10 rounded object-cover ml-2" />
            <div className="min-w-0">
              <p className="text-[12px] font-medium truncate">{current.title}</p>
              <p className="text-[11px] text-muted-foreground truncate">{current.artist}</p>
            </div>
            <div className="ml-auto flex items-center gap-2 text-muted-foreground">
              <Volume2 className="w-4 h-4" />
              <div
                onClick={handleVolumeClick}
                className="w-24 h-1 bg-muted rounded-full overflow-hidden cursor-pointer"
              >
                <div
                  className="h-full bg-foreground/40 rounded-full transition-all"
                  style={{ width: `${volume * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MacWindow>
  );
};