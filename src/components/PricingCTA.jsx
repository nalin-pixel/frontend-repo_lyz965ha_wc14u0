import React from 'react';
import { BadgeCheck } from 'lucide-react';

const Check = ({ children }) => (
  <li className="flex items-start gap-3"><BadgeCheck className="mt-0.5 h-5 w-5 text-purple-400" /><span className="text-neutral-300">{children}</span></li>
);

const PricingCTA = () => {
  return (
    <section id="pricing" className="relative z-0 bg-gradient-to-b from-neutral-950 via-[#0d0c12] to-neutral-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">
              Calm. Direction. Results. On your own terms.
            </h3>
            <p className="mt-4 max-w-xl text-neutral-300">
              After three months, you’ll feel the difference: clarity in direction, rhythm in data and meetings, more control and less chaos, stronger accountability, and continuous growth — without hand-holding.
            </p>
            <ul className="mt-6 space-y-2">
              <Check>Monthly focus and reflection</Check>
              <Check>Better decision-making and discipline</Check>
              <Check>A stronger rhythm with your team</Check>
              <Check>Continuous learning and improvement</Check>
              <Check>More calm, more control, more growth</Check>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 shadow-xl shadow-black/30">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-purple-300">Program</div>
            <div className="flex items-end gap-2">
              <div className="text-4xl font-semibold text-white">€240</div>
              <div className="pb-1 text-neutral-400">per month</div>
            </div>
            <p className="mt-2 text-sm text-neutral-400">E-learning, community, monthly calls & events. Cancel anytime.</p>
            <a
              href="#test"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Take the test — Are you one of The Bold Ones?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
