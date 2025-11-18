import React from 'react';

export default function Topbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-400 via-fuchsia-400 to-amber-300 shadow-lg" />
          <span className="text-white/90 font-semibold tracking-wide">Cystems × House of Mojo</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-white/70">
          <a href="#deck" className="hover:text-white transition">Deck</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </nav>
      </div>
    </header>
  );
}
