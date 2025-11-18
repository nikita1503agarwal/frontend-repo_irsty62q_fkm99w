import React, { useRef } from 'react';
import Hero from './components/Hero';
import Deck from './components/Deck';
import Topbar from './components/Topbar';

function App() {
  const deckRef = useRef(null);

  const scrollToDeck = () => {
    deckRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Topbar />
      {/* Hero with Spline animation */}
      <Hero onContinue={scrollToDeck} />

      {/* Deck */}
      <div id="deck" ref={deckRef} className="relative">
        <Deck />
      </div>

      {/* Contact section */}
      <section id="contact" className="relative py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">Let’s move forward.</h3>
            <p className="mt-3 text-indigo-100/90">AI is the operating system of the future. The architecture is ready. The systems are designed. The opportunity is massive.</p>
            <form className="mt-8 grid md:grid-cols-3 gap-4">
              <input type="text" placeholder="Name" className="col-span-1 rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input type="email" placeholder="Email" className="col-span-1 rounded-lg bg-white/10 border border-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button type="button" className="col-span-1 rounded-lg bg-indigo-600 hover:bg-indigo-500 px-4 py-3 text-white font-medium transition">Request the roadmap</button>
            </form>
          </div>
        </div>
      </section>

      {/* Background styling */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.15),transparent_40%),radial-gradient(circle_at_40%_80%,rgba(34,197,94,0.12),transparent_45%)]" />
    </div>
  );
}

export default App;
