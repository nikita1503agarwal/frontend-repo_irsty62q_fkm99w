import React from 'react';
import { motion } from 'framer-motion';

export default function Slide({ number, title, subtitle, bullets = [], body, kicker }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_60%)]" />
      <div className="relative w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.8, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm tracking-widest uppercase text-indigo-300/80 mb-4"
        >
          {number}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white tracking-tight"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-lg md:text-xl text-indigo-100/90"
          >
            {subtitle}
          </motion.p>
        )}

        {body && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-indigo-100/90 text-lg leading-relaxed"
          >
            {body}
          </motion.p>
        )}

        {bullets.length > 0 && (
          <ul className="mt-8 grid md:grid-cols-2 gap-3 text-indigo-100/90 text-lg">
            {bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.02 * i }}
                className="flex items-start gap-3"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_0_3px_rgba(99,102,241,0.25)]" />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>
        )}

        {kicker && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-10 p-5 rounded-xl border border-white/10 bg-white/5 text-white"
          >
            {kicker}
          </motion.div>
        )}
      </div>
    </section>
  );
}
