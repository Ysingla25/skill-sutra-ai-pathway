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
        {/* Outer Circle - Skill Progress */}
        <circle
          cx="32"
          cy="32"
          r="28"
          strokeWidth="4"
          className="stroke-purple-100"
        />
        <path
          d="M32 4A28 28 0 0 1 60 32"
          strokeWidth="4"
          strokeLinecap="round"
          className="stroke-purple-600"
        />

        {/* Star Points - Mastery */}
        <path
          d="M32 12L35.5 25.5L45 20L38 32L45 44L35.5 38.5L32 52L28.5 38.5L19 44L26 32L19 20L28.5 25.5L32 12Z"
          fill="url(#starGradient)"
        />

        {/* Central Circle - Focus */}
        <circle
          cx="32"
          cy="32"
          r="6"
          fill="url(#centerGradient)"
          className="animate-pulse"
        />

        <defs>
          <linearGradient
            id="starGradient"
            x1="19"
            y1="12"
            x2="45"
            y2="52"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B5CF6" />
            <stop offset="1" stopColor="#6D28D9" />
          </linearGradient>
          <linearGradient
            id="centerGradient"
            x1="26"
            y1="26"
            x2="38"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C4B5FD" />
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
