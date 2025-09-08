import React from "react";

const groups = [
  {
    title: "Financial & Analytical",
    chips: [
      "Budgeting & Forecasting",
      "Bookkeeping",
      "Variance Analysis",
      "Reporting & Compliance",
      "Market Research",
      "Benchmarking",
      "Data Entry & QA",
    ],
  },
  {
    title: "Tools",
    chips: [
      "MS Excel (Pivot Tables, VLOOKUP)",
      "Google Sheets",
      "PowerPoint",
      "Word",
      "Data Organization",
    ],
  },
  {
    title: "Professional",
    chips: [
      "Communication",
      "Time Management",
      "Attention to Detail",
      "Organization",
      "Adaptability",
      "Collaboration",
      "Quick Learner",
    ],
  },
  {
    title: "Languages & Interests",
    chips: [
      "English",
      "French",
      "Arabic",
      "Soccer",
      "Stocks & Options",
      "Real Estate",
      "Chess",
      "Reading",
      "Hiking",
      "Animals",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-14">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold">
            Core <span className="text-brand-secondary">Skills</span>
          </h2>
          <p className="mt-2 text-white/70">
            Practical finance, reliable operations, and clear communication.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.title} className="card-dark p-5">
              <p className="text-sm text-white/70">{g.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-12 h-2 section-glow" />
    </section>
  );
}
