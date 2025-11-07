import React from 'react';
import { Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-[80vh] md:h-[88vh] isolate">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradients overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-neutral-950" />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-purple-200/90 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-purple-300" />
          Online Growth
        </span>
        <h1 className="mt-4 bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent md:text-6xl">
          Structure. Rhythm. Growth.
          <br className="hidden md:block" />
          Without endless programs.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base text-neutral-300 md:text-lg">
          Growth doesn’t stop after six months. Online Growth helps entrepreneurs with 0–25 employees stay structured, focused, and in motion — through e-learning, community, monthly rhythm checks, and live events.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-md bg-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Get Started
          </a>
          <a
            href="#how"
            className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-neutral-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            How it works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
