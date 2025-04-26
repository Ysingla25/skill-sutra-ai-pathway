import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className, size = "md" }: LogoProps) => {
  const sizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-12"
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <svg
        viewBox="0 0 64 64"
        className={cn(sizes[size], "w-auto")}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Brain + Path Symbol */}
        <path
          d="M32 8C19.85 8 10 17.85 10 30c0 9.577 6.158 17.712 14.72 20.622.982.334 2.063-.17 2.397-1.152.334-.982-.17-2.063-1.152-2.397C19.17 44.58 14 37.83 14 30c0-9.925 8.075-18 18-18s18 8.075 18 18c0 7.83-5.17 14.58-12.965 17.073-.982.334-1.486 1.415-1.152 2.397.334.982 1.415 1.486 2.397 1.152C46.842 47.712 53 39.577 53 30c0-12.15-9.85-22-21-22z"
          fill="url(#gradient1)"
        />
        {/* Ascending Steps */}
        <path
          d="M26 40v-8h4v4h4v4h4v4h-12z"
          fill="url(#gradient2)"
        />
        {/* Meditation Lotus */}
        <circle
          cx="32"
          cy="28"
          r="6"
          fill="url(#gradient3)"
        />
        <defs>
          <linearGradient
            id="gradient1"
            x1="10"
            y1="8"
            x2="53"
            y2="50"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7C3AED" />
            <stop offset="1" stopColor="#6D28D9" />
          </linearGradient>
          <linearGradient
            id="gradient2"
            x1="26"
            y1="32"
            x2="38"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#7C3AED" />
          </linearGradient>
          <linearGradient
            id="gradient3"
            x1="26"
            y1="22"
            x2="38"
            y2="34"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A78BFA" />
            <stop offset="1" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
      </svg>
      <span className={cn(
        "font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600",
        {
          'text-xl': size === 'sm',
          'text-2xl': size === 'md',
          'text-3xl': size === 'lg',
        }
      )}>
        SkillSutra
      </span>
    </div>
  );
};
