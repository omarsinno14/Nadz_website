import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="card-dark p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold">Let’s connect</h3>
              <p className="mt-2 text-white/70">
                Open to roles in finance, operations, and analytics. Happy to share more detail on projects and experience.
              </p>

              <div className="mt-5 space-y-2 text-sm">
                <a href="mailto:nadimboukarroum@gmail.com" className="block text-brand-primary hover:underline">
                  nadimboukarroum@gmail.com
                </a>
                <a href="tel:+15148931388" className="block hover:underline">
                  +1 (514) 893-1388
                </a>
                <a href="https://www.linkedin.com/in/nadim-bou-karroum-44b910265/" target="_blank" rel="noreferrer" className="block hover:underline">
                  LinkedIn
                </a>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Inquiry from ${fd.get("name") || "Portfolio"}`);
                const body = encodeURIComponent(
                  `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\n\nMessage:\n${fd.get("message")}`
                );
                window.location.href = `mailto:nadimboukarroum@gmail.com?subject=${subject}&body=${body}`;
              }}
              className="space-y-4"
            >
              <input
                name="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40"
              />
              <input
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40"
                required
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Message"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40"
                required
              />
              <button
                className="rounded-full border border-brand-primary/40 bg-brand-primary/20 px-6 py-2 text-sm hover:bg-brand-primary/30 shadow-glow"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="relative mt-12 h-2 section-glow" />
    </section>
  );
}
