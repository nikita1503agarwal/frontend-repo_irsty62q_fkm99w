import React, { useRef } from 'react';
import Slide from './Slide';

export default function Deck() {
  const sectionsRef = useRef([]);

  const jumpTo = (idx) => {
    sectionsRef.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const slides = [
    {
      number: 'Slide 2',
      title: 'The Industry Shift',
      subtitle: 'Real estate has entered a new operational era',
      bullets: [
        'Manual → Digital → Automated → AI-Driven',
        'Companies that build AI infrastructure now will lead the future.'
      ],
    },
    {
      number: 'Slide 3',
      title: 'The Current Bottlenecks',
      subtitle: 'As Mojo scales, the system strain increases',
      bullets: [
        'Fragmented platforms',
        'Lead leakage',
        'Manual follow-up',
        'Slower response times',
        'Limited content output',
        'No unified knowledge engine',
        'Heavy dependency on individuals',
        'Operational bottlenecks',
        'Lack of automation across departments',
        'These issues slow down growth and increase cost per lead.'
      ],
    },
    {
      number: 'Slide 4',
      title: 'The Vision',
      subtitle: 'Build a unified, AI-powered operating system connecting:',
      bullets: [
        'Inbound • Outbound • Rentals • Sharing',
        'Marketing • Media • CRM',
        'Dashboards • Knowledge • Data',
        'Automations • Leadership Insights',
        'One intelligence layer powering the entire organization.'
      ],
    },
    {
      number: 'Slide 5',
      title: 'Why CYSTEMS',
      subtitle: 'A rare, ideal combination for Mojo',
      bullets: [
        '15+ Years Global Production Experience',
        'NatGeo, Netflix, Discovery, VICE — world-class storytelling & media systems.',
        'AI + Automation Architecture Expertise',
        'Deep experience with AI agents, automation, CRM architecture, and content engines.',
        'Creative + Operational + Technical',
        'AI video workflows',
        'Marketing automation',
        'HubSpot + Make.com systems',
        'Vapi voice logic',
        'RAG knowledge systems',
        'Months of foundational R&D already completed for Mojo.'
      ],
    },
    {
      number: 'Slide 6',
      title: 'Phase 1 — Build the AI Core',
      bullets: [
        'Mette inbound AI (V2)',
        'Upmarket integration',
        'Rentals CRM merge',
        'Website AI assistant',
        'Outbound AI (V2)',
        'Feedback Agent',
        'Dashboards v1 & v2',
        'Multilingual routing',
        'HubSpot deep alignment',
        'Foundational technical layer'
      ],
    },
    {
      number: 'Slide 7',
      title: 'Phase 2 — AI Media Engine & Marketing Automation',
      bullets: [
        'AI Video Creation Systems',
        '5–10× more content',
        '80–90% faster production',
        'Cinematic consistency',
        'Automated subtitles, pacing, localization',
        'AI Content Machine',
        '30–40 posts/month per department',
        'Multi-platform automation',
        'Intelligent repurposing & scheduling',
        'Brand consistency at scale',
        'AI Funnel Systems (ManyChat)',
        'High-conversion, low-cost DM channel',
        'Automated conversations',
        '24/7 qualification → CRM routing',
        'Ownable lead acquisition medium',
        'Department AI Toolkits',
        'Sales • Rentals • Legal • Maintenance • Architecture • Guest Services',
        'Company-wide AI enablement.'
      ],
    },
    {
      number: 'Slide 8',
      title: 'What is a RAG Agent?',
      body: `RAG = Retrieval-Augmented Generation. A RAG Agent is Mojo’s private, internal ChatGPT that searches, understands, and uses Mojo’s own data to provide accurate, sourced answers instantly. In simple terms: A RAG Agent is Mojo’s internal brain, with full knowledge of listings, SOPs, CRM records, legal docs, processes, training materials, department workflows, and archives. Why it’s superior to normal AI: Normal AI guesses. RAG retrieves real company data first. ✓ No hallucinations ✓ Fully accurate ✓ 100% sourced ✓ Permission-aware ✓ Consistent across departments. What it delivers: Eliminates bottlenecks, accelerates onboarding, protects institutional knowledge, powers leadership audits, and integrates into Mette for consistent inbound accuracy. Analogy: “If every Mojo employee had instant access to the entire company brain — that’s RAG.”`,
    },
    {
      number: 'Slide 9',
      title: 'Phase 3 — Enterprise Knowledge & Optimization Layer',
      bullets: [
        'Company-wide RAG knowledge engine',
        'Unified data architecture',
        'Instant, sourced answers',
        'Leadership insights & audits',
        'System-wide optimization',
        'Documentation & SOP engines',
        'Scalable foundation for global expansion',
        'Long-term advantage for Mojo'
      ],
    },
    {
      number: 'Slide 10',
      title: 'Compounding Effects',
      bullets: [
        'Faster operations',
        'Lower marketing cost',
        'Higher conversion',
        '5–10× content output',
        'Automated lead generation',
        'Reduced dependency risk',
        'Greater alignment',
        'Real-time visibility',
        'Multi-market readiness',
        'A durable competitive moat'
      ],
    },
    {
      number: 'Slide 11',
      title: 'What This Enables',
      bullets: [
        'International expansion',
        'Automated content flywheel',
        'Predictable revenue systems',
        'Faster onboarding',
        'Unified customer journey',
        'AI-first operational identity',
        'Premium brand positioning',
        'The modern operating system for real estate'
      ],
    },
    {
      number: 'Slide 12',
      title: 'Why This Requires Structured Phases',
      body: 'We’re not “building a tool.” We’re constructing a company-wide AI operating system, requiring architecture, data pipelines, AI agents, a RAG knowledge system, CRM automation, media & content engine, dashboards, department-level AI tools, training & enablement, documentation, iteration & refinement, and long-term optimization. This is foundational, scalable, and transformational.'
    },
    {
      number: 'Slide 13',
      title: 'Closing',
      body: 'AI is the operating system of the future. This roadmap positions House of Mojo to become the AI-first real estate leader in Europe. The architecture is ready. The systems are designed. The opportunity is massive. Let’s move forward.'
    }
  ];

  return (
    <div className="relative">
      {/* Fixed nav dots for quick jump */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => jumpTo(i)}
            className="h-2.5 w-2.5 rounded-full bg-white/30 hover:bg-white/80 transition"
            aria-label={`Go to slide ${i + 2}`}
          />
        ))}
      </div>

      {slides.map((s, i) => (
        <div ref={(el) => (sectionsRef.current[i] = el)} key={i}>
          <Slide {...s} />
        </div>
      ))}

      {/* Footer CTA */}
      <section className="relative py-24 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white">Ready to build the AI Operating System for Mojo?</h3>
          <p className="mt-4 text-indigo-100">Let’s align on the roadmap and start implementation.</p>
          <a href="#contact" className="inline-block mt-8 rounded-full bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 transition">Get in touch</a>
        </div>
      </section>
    </div>
  );
}
