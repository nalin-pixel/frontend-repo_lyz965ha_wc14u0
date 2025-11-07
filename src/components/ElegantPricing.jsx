import React from 'react';

const ElegantPricing = () => {
  return (
    <section id="elegant-pricing" className="bg-neutral-950 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-amber-300/80">Program</p>
              <h4 className="mt-1 text-2xl font-semibold text-white">Online Growth</h4>
              <p className="mt-2 max-w-md text-sm text-neutral-300">E-learning, community, monthly calls & events. Cancel anytime.</p>
            </div>
            <div className="text-right">
              <span className="text-4xl font-semibold text-white">€240</span>
              <span className="ml-2 text-neutral-400">/ month</span>
              <div className="mt-4">
                <a href="#test" className="inline-flex items-center justify-center rounded-full bg-amber-400/90 px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_30px_rgba(251,191,36,0.25)] transition hover:bg-amber-300">Take the Bold Test</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElegantPricing;
