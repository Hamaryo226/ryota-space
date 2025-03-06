import * as React from "react";

export function Footer() {
  return (
    <footer className="py-5 bottom-4 text-sm text-zinc-500/60 text-center w-full">
      <p>© {new Date().getFullYear()} Ryota Hamaguchi. All rights reserved.</p>
    </footer>
  );
}
