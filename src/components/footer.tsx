import * as React from "react";

export function Footer() {
  return (
    <footer className="absolute bottom-4 text-sm text-zinc-500/60">
      <p>© {new Date().getFullYear()} Ryota Hamaguchi. All rights reserved.</p>
    </footer>
  );
}
