import React from "react";

export default function Highlights() {
  const items = [
    {
      k: "Experience",
      v: "Financial Analyst — Banque du Liban",
      d: "Analyzed financial data and economic indicators; supported budgeting, reporting, and benchmarking within Financial Operations and Statistics.",
    },
    {
      k: "Operations",
      v: "Accounting Advisor — Dental Clinic",
      d: "Implemented efficient bookkeeping, improved cash-flow tracking and reporting, and coordinated scheduling to maximize productivity.",
    },
    {
      k: "Education & Tutoring",
      v: "Private Mathematics Tutor",
      d: "Assessed needs, built tailored study plans, and tracked progress to improve outcomes in a supportive learning environment.",
    },
  ];

  return (
    <section id="highlights" className="relative py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-5 md:grid-cols-3">
          {items.map((x) => (
            <div key={x.k} className="card-dark p-6">
              <p className="text-xs text-white/60">{x.k}</p>
              <p className="mt-1 text-xl text-brand-primary">{x.v}</p>
              <p className="mt-2 text-sm text-white/70">{x.d}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-12 h-2 section-glow" />
    </section>
  );
}
