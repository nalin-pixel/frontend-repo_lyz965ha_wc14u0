import React from 'react';
import { Target, Activity } from 'lucide-react';

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-400" /> <span className="text-neutral-300">{children}</span></li>
);

const Card = ({ icon: Icon, title, children }) => (
  <div className="rounded-xl border border-white/10 bg-neutral-900/50 p-6 shadow-xl shadow-black/30">
    <div className="mb-3 inline-flex items-center gap-2 text-purple-300">
      <Icon className="h-4 w-4" />
      <span className="text-sm font-semibold uppercase tracking-wide">{title}</span>
    </div>
    <div className="space-y-3 text-sm leading-relaxed text-neutral-300">{children}</div>
  </div>
);

const ChallengeSolution = () => {
  return (
    <section className="relative z-0 -mt-16 scroll-mt-16 bg-gradient-to-b from-neutral-950 via-[#0b0b0f] to-neutral-950 py-24" id="challenge">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <Card icon={Target} title="The Challenge">
            <p>
              After implementing a strategy or growth system, the real test begins: staying disciplined in the day-to-day. Most entrepreneurs fall back into old patterns. Plans exist — but the rhythm fades, priorities blur, and the team drifts.
            </p>
            <ul className="mt-4 space-y-2">
              <Bullet>Rhythm fades after the kick-off</Bullet>
              <Bullet>Priorities blur in the daily grind</Bullet>
              <Bullet>Teams drift off course without a cadence</Bullet>
            </ul>
          </Card>
          <Card icon={Activity} title="The Solution">
            <p>
              Online Growth prevents drift. Not motivation — momentum. Not a program — a rhythm. Stay on track month after month with e-learning, community, monthly structure calls, and live events.
            </p>
            <ul className="mt-4 space-y-2">
              <Bullet>Clarity in direction and focus</Bullet>
              <Bullet>Structure, rhythm, and accountability</Bullet>
              <Bullet>Calm, control, and measurable growth</Bullet>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSolution;
