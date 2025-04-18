import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface UserAvatarProps {
  src: string;
  username: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
}

export function UserAvatar({
  src,
  username,
  fallback,
  size = "sm",
}: UserAvatarProps) {
  // Determine size class based on the size prop
  const sizeClass = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }[size];

  // Get initials for fallback
  const initials = fallback || username.slice(0, 2).toUpperCase();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar
            className={`${sizeClass} ring-2 ring-transparent ring-offset-2 ring-offset-black`}
          >
            <AvatarImage src={src || "/placeholder.svg"} alt={username} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>
          <p>{username}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
