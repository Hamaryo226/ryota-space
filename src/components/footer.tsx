import * as React from "react";

export function Footer() {
  return (
    <footer className="py-6 text-sm text-zinc-500/60 text-center w-full mt-auto bg-zinc-950">
      <p>© {new Date().getFullYear()} Ryota Hamaguchi. All rights reserved.</p>
    </footer>
  );
}
