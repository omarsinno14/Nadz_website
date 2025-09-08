import React from "react";

const projects = [
  {
    title: "Financial Operations & Reporting (Healthcare)",
    blurb:
      "Designed and maintained a streamlined bookkeeping workflow for a busy dental clinic, improving cash-flow tracking, invoicing accuracy, and monthly reporting cadence.",
    tags: ["Bookkeeping", "Cash Flow", "Reporting"],
  },
  {
    title: "Budget vs. Forecast Variance Review",
    blurb:
      "Assisted with budget monitoring and variance analysis; compared actuals to forecasts and explained key drivers to support data-informed decisions.",
    tags: ["Budgeting", "Variance", "Analysis"],
  },
  {
    title: "Market & Economic Indicator Review",
    blurb:
      "Supported research on economic indicators and competitive positioning; summarized findings to inform benchmarking and process improvements.",
    tags: ["Research", "Benchmarking", "Economics"],
  },
  {
    title: "Mathematics Tutoring Program",
    blurb:
      "Developed personalized learning plans, assessed baseline proficiency, and tracked progress to help students reach targeted outcomes.",
    tags: ["Education", "Planning", "Feedback"],
  },
];

function Card({ p }) {
  return (
    <article className="card-dark p-5 hover:bg-white/[0.07] transition">
      <header className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <div className="h-2 w-2 rounded-full bg-brand-primary shadow-glow" />
      </header>
      <p className="mt-3 text-sm text-white/75">{p.blurb}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px]">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-14">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold">
            Selected <span className="text-brand-primary">Work</span>
          </h2>
          <p className="mt-2 text-white/70">
            Practical contributions across finance operations, analytics, and education.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title} p={p} />
          ))}
        </div>
      </div>

      <div className="relative mt-12 h-2 section-glow" />
    </section>
  );
}
