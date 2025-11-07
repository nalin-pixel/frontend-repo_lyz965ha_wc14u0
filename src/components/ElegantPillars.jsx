import React from 'react';

const Pillar = ({ title, desc }) => (
  <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 backdrop-blur-sm">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-neutral-300">{desc}</p>
  </div>
);

const ElegantPillars = () => {
  return (
    <section id="elegant-how" className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">An Elegant Operating Rhythm</h2>
          <p className="mt-3 text-neutral-300">Five pillars that keep you focused, composed, and consistently moving forward.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Pillar title="E‑Learning" desc="Concise modules on strategy, rhythm, leadership, and team dynamics — sharpen your edge on your schedule." />
          <Pillar title="OPSP Review" desc="Begin with a strategic clarity call to refine direction and unblock momentum. Less talk, more focus." />
          <Pillar title="Community" desc="A discerning network that challenges your thinking and multiplies your accountability." />
          <Pillar title="Monthly Design" desc="Define critical + counter numbers, adjust OKRs, reflect, and reset — every month." />
          <Pillar title="Live Momentum" desc="Strategy days, meetups, alumni sessions — step out of the noise and work on the business." />
        </div>
      </div>
    </section>
  );
};

export default ElegantPillars;
