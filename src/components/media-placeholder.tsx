import { ImageIcon, Play, Smartphone, Star } from "lucide-react";

type MediaPlaceholderProps = {
  type: "video" | "photo" | "whatsapp" | "beforeAfter" | "review" | "measure";
  title: string;
  label: string;
  ratio?: "wide" | "portrait" | "square";
  src?: string;
  alt?: string;
  fit?: "cover" | "contain";
  position?: string;
};

const ratioClass = {
  wide: "aspect-video",
  portrait: "aspect-[4/5]",
  square: "aspect-square",
};

const icons = {
  video: Play,
  photo: ImageIcon,
  whatsapp: Smartphone,
  beforeAfter: ImageIcon,
  review: Star,
  measure: Star,
};

export function MediaPlaceholder({
  type,
  title,
  label,
  ratio = "wide",
  src,
  alt,
  fit = "cover",
  position = "center",
}: MediaPlaceholderProps) {
  const Icon = icons[type];
  const isVideo = src?.toLowerCase().endsWith(".mp4") ?? false;

  return (
    <div
      className={`${ratioClass[ratio]} group relative overflow-hidden rounded-xl border border-white/10 bg-graphite shadow-glass transition duration-500 hover:-translate-y-1 hover:border-gold/35`}
    >
      {isVideo && src ? (
        <video
          src={src}
          controls
          muted
          playsInline
          preload="metadata"
          className={`absolute inset-0 h-full w-full ${
            fit === "contain" ? "object-contain" : "object-cover"
          }`}
          style={{ objectPosition: position }}
          aria-label={alt ?? title}
        />
      ) : src ? (
        <img
          src={src}
          alt={alt ?? title}
          loading="lazy"
          decoding="async"
          className={`absolute inset-0 transition duration-700 group-hover:scale-[1.025] ${
            fit === "contain" ? "object-contain" : "object-cover"
          } h-full w-full`}
          style={{ objectPosition: position }}
        />
      ) : (
        <div className="media-grain absolute inset-0 transition duration-700 group-hover:scale-105" />
      )}
      <div className="premium-grid absolute inset-0 opacity-35" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.78))]" />
      <div className="absolute left-5 top-5 rounded-full border border-gold/25 bg-black/80 px-3 py-1 text-xs font-bold uppercase tracking-normal text-gold">
        {label}
      </div>
      <div className="absolute inset-x-5 bottom-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-carbon shadow-gold transition duration-500 group-hover:scale-105">
          <Icon aria-hidden className="h-5 w-5" />
        </div>
        <p className="mt-4 max-w-sm text-lg font-bold leading-tight text-ivory">
          {title}
        </p>
      </div>
    </div>
  );
}
