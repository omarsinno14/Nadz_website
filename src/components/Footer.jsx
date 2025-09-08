import React from "react";

export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur md:flex-row">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Nadim Bou Karroum — All rights reserved.
          </p>
          <p className="text-sm text-white/50">
            Built with <span className="text-brand-primary">React</span> & <span className="text-brand-secondary">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
