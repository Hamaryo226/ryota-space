import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import {
  Twitter,
  Instagram,
  Github,
  Youtube,
  Speech,
  ScanSearch,
  Drum,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ModeToggle } from "@/components/mode-togle";

export function TopCard() {
  return (
    <Card className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-4 shadow-lg">
      <CardHeader className="text-left">
        <div className="flex items-center mb-2 space-x-4">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/52881627?v=4" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <CardTitle className="text-lg sm:text-xl md:text-2xl">
            Hamaguchi Ryota
          </CardTitle>
        </div>
        <CardAction>
          <ModeToggle />
        </CardAction>

        <CardDescription className="text-sm sm:text-base">
          System Engineer & Programmer
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6">
        <ScrollArea className="w-full">
          <div className="flex gap-2 pb-4 min-w-max">
            <Button variant="outline" size="sm" className="flex-shrink-0">
              <Speech className="mr-2 h-4 w-4" /> Frailty-Check-System
            </Button>
            <Button variant="outline" size="sm" className="flex-shrink-0">
              <ScanSearch className="mr-2 h-4 w-4" />{" "}
              Supplemental-Documentation-System
            </Button>
            <Button variant="outline" size="sm" className="flex-shrink-0">
              <Drum className="mr-2 h-4 w-4" /> TaikoDive
            </Button>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
      <Separator />
      <CardFooter className="flex-col gap-2 px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-6">
          <SocialButton
            href="https://twitter.com/fumolat"
            icon={Twitter}
            label="X"
          />
          <SocialButton
            href="https://www.instagram.com/hamaryo_2"
            icon={Instagram}
            label="Instagram"
          />
          <SocialButton
            href="https://github.com/HamaguchiRyota"
            icon={Github}
            label="GitHub"
          />
          <SocialButton
            href="https://www.youtube.com/@Fumolat"
            icon={Youtube}
            label="YouTube"
          />
        </div>
      </CardFooter>
    </Card>
  );
}

const SocialButton = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => (
  <Button
    variant="ghost"
    size="sm"
    className="border-border/50 bg-background/30 text-muted-foreground backdrop-blur-sm"
  >
    <Link href={href} passHref target="_blank" rel="noreferrer">
      <Icon className="h-5 w-5" />
      <span className="sr-only">{label}</span>
    </Link>
  </Button>
);
