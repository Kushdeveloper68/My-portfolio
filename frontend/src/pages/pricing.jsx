import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Code2,
  Layers3,
  Zap,
  Database,
  Workflow,
  Rocket,
  Sparkles,
} from 'lucide-react';

const P = '#0da2e7';

const capabilities = [
  {
    number: '01',
    title: 'Web Experiences',
    description:
      'Websites that feel intentional, fast and memorable — not another template with a logo changed.',
    tags: ['Landing Pages', 'Business Websites', 'Portfolio', 'Marketing'],
    icon: Layers3,
    size: 'large',
  },
  {
    number: '02',
    title: 'Web Applications',
    description:
      'Real products with authentication, dashboards, databases, APIs and everything happening behind the screen.',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API'],
    icon: Code2,
    size: 'small',
  },
  {
    number: '03',
    title: 'Custom Systems',
    description:
      'If your business has a workflow that does not fit into a standard package, we build around the workflow.',
    tags: ['Automation', 'Integrations', 'Payments', 'Admin Panels'],
    icon: Workflow,
    size: 'small',
  },
  {
    number: '04',
    title: 'From Idea to Launch',
    description:
      'From the first screen to production deployment — architecture, development, testing and launch in one process.',
    tags: ['Architecture', 'Deployment', 'Optimization', 'Support'],
    icon: Rocket,
    size: 'large',
  },
];

const marqueeItems = [
  'CUSTOM DEVELOPMENT',
  'REACT',
  'NODE.JS',
  'NEXT.JS',
  'MONGODB',
  'REST APIs',
  'DASHBOARDS',
  'AUTOMATION',
  'UI / UX',
  'DEPLOYMENT',
];

const techItems = [
  'Frontend',
  'Backend',
  'Database',
  'Authentication',
  'APIs',
  'Payments',
  'Automation',
  'Cloud',
  'Performance',
  'Responsive UI',
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CustomBuildSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#080b12] text-white"
    >
      {/* =========================================================
          AMBIENT BACKGROUND
      ========================================================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[5%] left-[-10%] w-[40vw] h-[40vw] rounded-full blur-[140px]"
          style={{ background: 'rgba(13,162,231,0.055)' }}
        />

        <div
          className="absolute top-[45%] right-[-12%] w-[38vw] h-[38vw] rounded-full blur-[140px]"
          style={{ background: 'rgba(168,85,247,0.045)' }}
        />

        <div
          className="absolute bottom-[-10%] left-[30%] w-[30vw] h-[30vw] rounded-full blur-[130px]"
          style={{ background: 'rgba(13,162,231,0.035)' }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(to right,#6b9bb0 1px,transparent 1px),linear-gradient(to bottom,#6b9bb0 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Vertical center line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/[0.025]" />
      </div>

      <div className="relative z-10 py-28 md:py-36">
        {/* =========================================================
            HERO / EMOTIONAL MESSAGE
        ========================================================= */}
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="max-w-5xl"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-8 h-px"
                style={{ backgroundColor: P }}
              />

              <span
                className="text-[11px] font-bold uppercase tracking-[0.25em]"
                style={{ color: P }}
              >
                Not another template
              </span>
            </div>

            {/* Main heading */}
            <h2 className="text-[clamp(3rem,7vw,6.8rem)] font-bold tracking-[-0.055em] leading-[0.9]">
              Your idea
              <br />

              <span className="text-white/35">deserves to be</span>

              <br />

              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    'linear-gradient(100deg,#0da2e7 0%,#62d5ff 45%,#a855f7 100%)',
                }}
              >
                built properly.
              </span>
            </h2>

            <div className="mt-9 max-w-2xl">
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Whether you need a website, a full-stack application or a
                completely custom system, I build around{' '}
                <span className="text-gray-200">
                  what your business actually needs
                </span>
                — not around a predefined package.
              </p>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            BIG MARQUEE
        ========================================================= */}
        <div className="relative mt-20 mb-28 overflow-hidden border-y border-white/[0.06]">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 z-10 bg-gradient-to-r from-[#080b12] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 z-10 bg-gradient-to-l from-[#080b12] to-transparent pointer-events-none" />

          <motion.div
            className="flex w-max py-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <React.Fragment key={`${item}-${index}`}>
                <div className="flex items-center gap-8 px-8">
                  <span className="text-sm md:text-base font-bold tracking-[0.16em] text-white/35 whitespace-nowrap">
                    {item}
                  </span>

                  <Sparkles
                    size={13}
                    strokeWidth={1.5}
                    style={{ color: P }}
                    className="shrink-0"
                  />
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* =========================================================
            SECTION INTRO
        ========================================================= */}
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.22em] mb-3"
                style={{ color: P }}
              >
                What we can build
              </p>

              <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
                No fixed package.
                <br />
                <span className="text-white/35">
                  Just the right solution.
                </span>
              </h3>
            </div>

            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              The technology is chosen according to the problem — not because
              it looks impressive on a proposal.
            </p>
          </motion.div>

          {/* =========================================================
              ASYMMETRIC CAPABILITY GRID
          ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.025] backdrop-blur-xl ${
                    item.size === 'large'
                      ? 'md:min-h-[330px]'
                      : 'md:min-h-[270px]'
                  }`}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute -right-24 -top-24 w-64 h-64 rounded-full blur-[90px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{ background: 'rgba(13,162,231,0.13)' }}
                  />

                  {/* Top line */}
                  <div
                    className="absolute top-0 left-10 right-10 h-px opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        'linear-gradient(90deg,transparent,#0da2e7,transparent)',
                    }}
                  />

                  <div className="relative h-full p-7 md:p-9 flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[11px] text-white/25">
                        /{item.number}
                      </span>

                      <div className="relative">
                        <div className="absolute inset-0 rounded-xl blur-xl bg-[#0da2e7]/10 group-hover:bg-[#0da2e7]/20 transition-all" />

                        <div className="relative w-11 h-11 rounded-xl border border-white/[0.08] bg-white/[0.035] flex items-center justify-center group-hover:border-[#0da2e7]/30 transition-colors">
                          <Icon
                            size={19}
                            strokeWidth={1.5}
                            className="text-white/60 group-hover:text-[#0da2e7] transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mt-12">
                      <h4 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
                        {item.title}
                      </h4>

                      <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                        {item.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mt-6">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full border border-white/[0.07] bg-white/[0.025] text-[10px] font-medium text-gray-500 group-hover:text-gray-400 group-hover:border-white/[0.12] transition-all"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom number */}
                  <div className="absolute bottom-5 right-7 text-[70px] leading-none font-black text-white/[0.018] select-none group-hover:text-[#0da2e7]/[0.04] transition-colors">
                    {item.number}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================
            CENTRAL STATEMENT
        ========================================================= */}
        <div className="max-w-5xl mx-auto px-5 md:px-10 mt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative text-center"
          >
            {/* Decorative circles */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full border border-white/[0.025]" />
              <div className="absolute inset-10 rounded-full border border-white/[0.025]" />
            </div>

            <div className="relative">
              <div className="flex justify-center mb-7">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                  style={{
                    background: 'rgba(13,162,231,0.06)',
                    borderColor: 'rgba(13,162,231,0.15)',
                  }}
                >
                  <Zap
                    size={20}
                    style={{ color: P }}
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <p className="text-[clamp(2rem,4vw,4rem)] font-bold leading-[1.05] tracking-[-0.04em]">
                Good software isn't about
                <span className="text-white/30"> adding everything.</span>
                <br />
                It's about {" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg,#0da2e7,#a855f7)',
                  }}
                >
                  building what matters.
                </span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            SECOND MARQUEE / CAPABILITIES
        ========================================================= */}
        <div className="mt-32 overflow-hidden">
          <motion.div
            className="flex w-max"
            animate={{ x: ['-50%', '0%'] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {[...techItems, ...techItems].map((item, index) => (
              <div
                key={`${item}-${index}`}
                className="flex items-center gap-5 px-6 md:px-10"
              >
                <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white/[0.16] whitespace-nowrap">
                  {item}
                </span>

                <span
                  className="w-1 h-1 rounded-full"
                  style={{ backgroundColor: P }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <div className="max-w-7xl mx-auto px-5 md:px-10 mt-32">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            className="relative overflow-hidden rounded-[32px] border border-white/[0.08]"
            style={{
              background:
                'linear-gradient(135deg,rgba(13,162,231,0.075),rgba(255,255,255,0.025) 45%,rgba(168,85,247,0.055))',
            }}
          >
            {/* CTA glow */}
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full blur-[100px] pointer-events-none"
              style={{ background: 'rgba(13,162,231,0.10)' }}
            />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="relative z-10 px-7 py-14 md:px-16 md:py-20 text-center">
              <p
                className="text-xs font-bold uppercase tracking-[0.25em] mb-5"
                style={{ color: P }}
              >
                Have something in mind?
              </p>

              <h3 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[0.95]">
                Let's turn your idea
                <br />
                <span className="text-white/35">into something real.</span>
              </h3>

              <p className="max-w-xl mx-auto mt-6 text-gray-500 text-sm md:text-base leading-relaxed">
                Tell me what you're trying to build, what problem you're
                solving, or even just the idea in your head. We can figure out
                the rest together.
              </p>

              <div className="mt-9">
                <a
                  href="#connect"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: P,
                    boxShadow: '0 0 35px rgba(13,162,231,0.22)',
                  }}
                >
                  Let's Discuss

                  <ArrowUpRight
                    size={17}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>

              <p className="mt-5 text-[11px] text-gray-600">
                No fixed packages. No unnecessary features. Just your project.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}