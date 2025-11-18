import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ onContinue }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient aura overlay to blend with brand */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.25),rgba(59,130,246,0.15)_40%,transparent_65%)]" />

      {/* Content */}
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm/0"
        >
          <p className="text-sm md:text-base tracking-widest uppercase text-indigo-200/80 mb-3">Cystems × House of Mojo</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_30px_rgba(99,102,241,0.25)]">
            AI Operating System & Strategic Architecture
          </h1>
          <p className="mt-5 text-indigo-100 text-lg md:text-xl">Presented by: Sean Champ Smith</p>

          <motion.button
            onClick={onContinue}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-white border border-white/20 backdrop-blur-md shadow-2xl hover:bg-white/15 transition"
          >
            Begin the deck
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M4.5 12a.75.75 0 0 1 .75-.75h11.69l-3.72-3.72a.75.75 0 1 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H5.25A.75.75 0 0 1 4.5 12z" clipRule="evenodd"/></svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Soft vignette edges */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(2,6,23,0.35)_80%,rgba(2,6,23,0.7))]" />
    </section>
  );
}
