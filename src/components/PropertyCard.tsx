import { Bed, Bath, Maximize, ArrowRight, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  tag?: string;
  tagVariant?: "gold" | "navy" | "green";
  slug?: string;
  developer?: string;
  completion?: string;
  isOffPlan?: boolean;
}

const PropertyCard = ({
  image,
  title,
  location,
  price,
  beds,
  baths,
  sqft,
  tag,
  tagVariant = "gold",
  slug = "#",
  developer,
  completion,
  isOffPlan = false,
}: PropertyCardProps) => {
  const [liked, setLiked] = useState(false);

  const tagStyles: Record<string, string> = {
    gold: "bg-primary text-white",
    navy: "bg-[hsl(var(--navy))] text-white",
    green: "bg-emerald-600 text-white",
  };

  return (
    <article className="group bg-card rounded-sm overflow-hidden card-lift border border-border cursor-pointer">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {tag && (
          <span className={`absolute top-4 left-4 badge ${tagStyles[tagVariant]}`}>
            {tag}
          </span>
        )}

        <button
          onClick={(e) => { e.preventDefault(); setLiked(!liked); }}
          className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
            liked ? "bg-rose-500 text-white" : "bg-white/90 text-foreground/50 hover:text-rose-500"
          }`}
          aria-label="Save property"
        >
          <Heart size={14} fill={liked ? "currentColor" : "none"} />
        </button>

        {isOffPlan && completion && (
          <div className="absolute bottom-4 left-4 glass-dark rounded-sm px-3 py-1.5">
            <p className="font-body text-[10px] text-white/60 tracking-wider uppercase">Completion</p>
            <p className="font-body text-xs font-semibold text-white">{completion}</p>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-3 mb-1">
          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-tight truncate">
              {title}
            </h3>
            {developer && (
              <p className="font-body text-[11px] text-primary/70 tracking-wider uppercase mt-0.5">{developer}</p>
            )}
          </div>
          <div className="text-right flex-shrink-0">
            <p className="font-body text-base font-bold text-primary">{price}</p>
            {isOffPlan && (
              <p className="font-body text-[10px] text-muted-foreground mt-0.5">Starting from</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-1.5 mb-4">
          <MapPin size={11} className="text-muted-foreground/60 flex-shrink-0" />
          <p className="font-body text-xs text-muted-foreground truncate">{location}</p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[12px] text-muted-foreground font-body">
              <Bed size={13} className="text-primary/50" /> {beds} Beds
            </span>
            <span className="flex items-center gap-1.5 text-[12px] text-muted-foreground font-body">
              <Bath size={13} className="text-primary/50" /> {baths} Baths
            </span>
            <span className="flex items-center gap-1.5 text-[12px] text-muted-foreground font-body">
              <Maximize size={13} className="text-primary/50" /> {sqft} sqft
            </span>
          </div>
          <Link
            to={`/properties/${slug}`}
            className="text-primary flex items-center gap-1 font-body text-xs font-medium group-hover:gap-2 transition-all duration-200"
          >
            View <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
