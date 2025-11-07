import React from 'react';
import Spline from '@splinetool/react-spline';

const ElegantHero = () => {
  return (
    <section className="relative h-[78vh] md:h-[86vh] isolate">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Soft vignette overlay that doesn't block scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-neutral-950" />

      <div className="relative mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="tracking-[0.2em] text-[11px] uppercase text-amber-300/80">Boldcaster • Online Growth</p>
        <h1 className="mt-4 font-semibold leading-tight tracking-tight text-white text-4xl md:text-6xl">
          Elegance in Structure.
          <br className="hidden md:block" />
          Discipline in Motion.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-neutral-300 md:text-lg">
          A refined growth rhythm for entrepreneurs who want clarity, calm, and control. Learn, review, and execute — month after month.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#elegant-pricing" className="inline-flex items-center justify-center rounded-full bg-amber-400/90 px-6 py-3 text-sm font-semibold text-black shadow-[0_8px_30px_rgba(251,191,36,0.25)] transition hover:bg-amber-300">
            Start Your Rhythm
          </a>
          <a href="#elegant-how" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-neutral-100 transition hover:bg-white/10">
            Explore the System
          </a>
        </div>
      </div>
    </section>
  );
};

export default ElegantHero;
