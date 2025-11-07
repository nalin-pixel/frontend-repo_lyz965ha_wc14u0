import React from 'react';
import ElegantHero from './components/ElegantHero.jsx';
import ElegantPillars from './components/ElegantPillars.jsx';
import ElegantBenefits from './components/ElegantBenefits.jsx';
import ElegantPricing from './components/ElegantPricing.jsx';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-amber-300/20 selection:text-amber-100">
      <ElegantHero />
      <ElegantPillars />
      <ElegantBenefits />
      <ElegantPricing />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} Boldcaster • Online Growth</p>
      </footer>
    </div>
  );
}

export default App;
