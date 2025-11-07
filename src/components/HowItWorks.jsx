import React from 'react';
import { BookOpen, CheckCircle2, Users, CalendarDays, Sparkles } from 'lucide-react';

const Step = ({ icon: Icon, title, children }) => (
  <div className="group rounded-xl border border-white/10 bg-neutral-900/40 p-6 transition hover:border-purple-400/40 hover:bg-neutral-900/60">
    <div className="mb-3 flex items-center gap-2 text-purple-300">
      <Icon className="h-5 w-5" />
      <h3 className="text-sm font-semibold uppercase tracking-wide">{title}</h3>
    </div>
    <p className="text-sm leading-relaxed text-neutral-300">{children}</p>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="how" className="relative z-0 bg-neutral-950 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="bg-gradient-to-b from-white to-neutral-300 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl">How It Works</h2>
          <p className="mt-3 text-neutral-300">A simple, powerful rhythm to keep you in motion — with clarity, discipline, and support.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Step icon={BookOpen} title="E-Learning: Grow at Your Own Pace">
            Instant access to Boldcaster modules on Strategy & KPIs, Focus & Rhythm, Leadership & Communication, and Structure & Team Dynamics. Short, practical, directly applicable.
          </Step>
          <Step icon={CheckCircle2} title="Strategy Review + OPSP Check">
            Start with a strategic check call to review your OPSP and growth direction. No talk — just direction.
          </Step>
          <Step icon={Users} title="Online Community">
            Join a network of entrepreneurs building structure, rhythm, and growth. Share progress, learn, and stay accountable.
          </Step>
          <Step icon={CalendarDays} title="Monthly ‘Design Your Month’">
            Define your critical number, choose your counter number, adjust your OKRs, reflect and refocus every month.
          </Step>
          <Step icon={Sparkles} title="Events & Live Momentum">
            Access annual strategy days, community meetups, and alumni gatherings. Step out of the grind and work on your business.
          </Step>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
