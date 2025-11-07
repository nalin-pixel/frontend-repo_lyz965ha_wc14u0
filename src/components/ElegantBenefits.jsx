import React from 'react';

const Benefit = ({ label }) => (
  <li className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-200">{label}</li>
);

const ElegantBenefits = () => {
  return (
    <section className="bg-gradient-to-b from-neutral-950 via-[#0e0e12] to-neutral-950 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-8 backdrop-blur-md">
          <h3 className="text-2xl font-semibold text-white">What You’ll Notice in 90 Days</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            <Benefit label="Sharper Direction" />
            <Benefit label="Operational Rhythm" />
            <Benefit label="Better Decisions" />
            <Benefit label="Less Chaos" />
            <Benefit label="Accountability" />
            <Benefit label="Continuous Learning" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ElegantBenefits;
