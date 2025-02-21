import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/dark-toggle";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type React from "react"; // Import React
import { StarHalf } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white bg-opacity-45 dark:bg-black dark:bg-opacity-45 dark:border-zinc-500 border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-center px-5 mx-auto">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <StarHalf />
            <p className="font-bold">ryota-space</p>
          </Link>
          <div className="hidden md:flex">
            <DesktopNav />
          </div>
        </div>
        <div className="flex justify-between items-end">
          <MobileNav />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} bg-opacity-0 hover:bg-opacity-20 dark:bg-opacity-0 dark:hover:bg-opacity-30`}
            >
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="">
              <Button
                className={`${navigationMenuTriggerStyle()} bg-opacity-0 hover:bg-opacity-20 dark:bg-opacity-0 dark:hover:bg-opacity-30`}
                variant="ghost"
              >
                Project
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Public</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/Project/Frailty-Check-System">
                    Frailty-Check-System
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/Project/Supplemental-Documentation-System">
                    Supplemental-Documentation-System
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Private</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link href="/Private/Taiko-Re-Strap">Taiko-Re-Strap</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/Private/Taiko-Re-Strap-Next">
                    Taiko-Re-Strap-Next
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/About" legacyBehavior passHref>
            <NavigationMenuLink
              className={`${navigationMenuTriggerStyle()} bg-opacity-0 hover:bg-opacity-20 dark:bg-opacity-0 dark:hover:bg-opacity-30`}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/">Home</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/About">About</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/Project">Public Project</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/Private">Private Project</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
