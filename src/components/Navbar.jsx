import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", href: "#home" },
    { name: "Highlights", href: "#highlights" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-4">
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-5 py-3 shadow-glow">
          <a href="#home" className="text-lg font-semibold tracking-wide">
            <span className="text-brand-primary">Fin</span>
            <span className="text-brand-secondary">Sight</span>
          </a>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border border-white/10 px-3 py-2 text-sm"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>

          <ul className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <li key={l.name}>
                <a
                  href={l.href}
                  className="text-sm text-white/80 hover:text-white"
                >
                  {l.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/CV.pdf"
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm hover:bg-white/15 shadow-glow2"
              >
                CV
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4">
          <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    className="block rounded-md px-3 py-2 text-white/90 hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {l.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/CV.pdf"
                  className="block rounded-md px-3 py-2 text-brand-primary hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
