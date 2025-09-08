import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-brand-primary/25 blur-3xl" />
        <div className="absolute left-[10%] top-[40%] h-[280px] w-[280px] rounded-full bg-brand-secondary/25 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="mb-3 text-xs tracking-[0.2em] text-white/60">
              FINANCE · ANALYTICS · OPERATIONS
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Nadim Bou Karroum
              <span className="block text-2xl sm:text-3xl mt-3 font-normal text-white/80">
                BCom Finance — John Molson School of Business
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-white/70">
              I manage and analyze financial information, streamline bookkeeping,
              and translate data into clear, decision-ready reports. Recent work spans
              financial operations in a healthcare setting, private mathematics tutoring,
              and analytical support within a central bank environment.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-brand-primary/20 px-5 py-2 text-sm border border-brand-primary/40 hover:bg-brand-primary/30 shadow-glow"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full bg-white/10 px-5 py-2 text-sm border border-white/10 hover:bg-white/15"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="card-dark p-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/60">Education</p>
                <p className="mt-1 text-xl">BCom, Finance</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/60">Experience</p>
                <p className="mt-1 text-xl">Central Bank · Clinic</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-white/60">Tools</p>
                <p className="mt-1 text-xl">Excel · Sheets</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/70">
                Comfortable with budgeting, variance analysis, and data organization;
                strong communication and attention to detail in fast-paced settings.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-16 h-2 section-glow" />
    </section>
  );
}
