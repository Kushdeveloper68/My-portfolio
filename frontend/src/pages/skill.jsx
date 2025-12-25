import React, { useState } from 'react'

const primary = '#0da2e7'
const primaryDark = '#007bb5'
const backgroundDark = '#101c22'

const CapabilityCard = ({ icon, title, description }) => {
  const [expanded, setExpanded] = useState(false)

  const toggle = () => setExpanded(prev => !prev)

  return (
    <div className='holographic-card rounded-xl p-6 flex flex-col justify-between h-64 group relative overflow-hidden'>
      <div
        className='absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-primary/10'
        style={{ backgroundColor: 'rgba(13,162,231,0.05)' }}
      ></div>
      <div className='icon-box w-12 h-12 rounded-lg flex items-center justify-center mb-4'>
        <span className='material-symbols-outlined text-2xl'>{icon}</span>
      </div>
      <div className='relative z-10'>
        <h3
          className='text-xl font-bold text-white mb-2'
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className={`text-sm text-slate-400 ${expanded ? '' : 'line-clamp-2'}`}
        >
          {description}
        </p>
      </div>
      <div className='mt-4 pt-4 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity'>
        <span className='text-xs font-mono' style={{ color: primary }}>
          <button
            onClick={toggle}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') toggle()
            }}
            className='cursor-pointer bg-transparent text-xs font-mono'
            aria-expanded={expanded}
          >
            {expanded ? 'SHOW_LESS' : 'EXPAND_INFO'}
          </button>
        </span>
        <span
          role='button'
          tabIndex={0}
          onClick={toggle}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') toggle()
          }}
          className='material-symbols-outlined text-sm cursor-pointer'
          style={{
            color: primary,
            transform: expanded ? 'rotate(90deg)' : 'none',
            transition: 'transform .18s ease'
          }}
        >
          arrow_forward
        </span>
      </div>
    </div>
  )
}

const SkillsPage = () => {
  return (
    <div
      id='skill'
      className='dark min-h-screen flex flex-col overflow-x-hidden text-slate-800 dark:text-slate-100'
      style={{
        backgroundColor: backgroundDark, // bg-background-dark
        fontFamily: '"Space Grotesk", sans-serif'
      }}
    >
      {/* Top Navigation */}

      {/* Main Content Wrapper */}
      <main
        className='flex-grow pt-20 bg-fixed relative'
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230da2e7' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" // bg-tech-grid
        }}
      >
        {/* Ambient Glow Background */}
        <div
          className='fixed top-20 left-1/4 w-96 h-96 rounded-full blur-[128px] pointer-events-none -z-10'
          style={{ backgroundColor: 'rgba(13,162,231,0.1)' }} // bg-primary/10
        ></div>
        <div className='fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[128px] pointer-events-none -z-10'></div>

        {/* HERO SECTION */}
        <section className='relative min-h-[85vh] flex items-center justify-center py-20 overflow-hidden'>
          <div className='max-w-7xl w-full mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center'>
            {/* Hero Text */}
            <div className='flex flex-col gap-6 relative z-10 order-2 lg:order-1'>
              <div
                className='inline-flex items-center gap-2 px-3 py-1 rounded-full border w-fit'
                style={{
                  backgroundColor: 'rgba(13,162,231,0.1)', // bg-primary/10
                  borderColor: 'rgba(13,162,231,0.2)' // border-primary/20
                }}
              >
                <span
                  className='w-2 h-2 rounded-full animate-pulse'
                  style={{ backgroundColor: primary }} // bg-primary
                ></span>
                <span
                  className='text-xs font-bold tracking-widest uppercase'
                  style={{ color: primary }} // text-primary
                >
                  System Online
                </span>
              </div>
              <h1 className='text-5xl md:text-7xl font-display font-black leading-tight text-white tracking-tight'>
                TECHNICAL <br />
                <span
                  className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400'
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #0da2e7, #a855f7)' // from-primary to-purple-400
                  }}
                >
                  ARSENAL
                </span>
              </h1>
              <p
                className='text-slate-400 text-lg max-w-lg leading-relaxed border-l-2 pl-4'
                style={{ borderColor: 'rgba(13,162,231,0.3)' }}
              >
                A focused set of modern web technologies I use to design,
                develop, deploy, and maintain real-world web applications.
              </p>
              <div className='flex flex-wrap gap-4 mt-4'>
                <a href="#skills">
                <button
                  className='flex items-center h-12 px-8 text-white font-bold rounded-lg shadow-neon hover:shadow-neon-strong transition-all duration-300'
                  style={{ backgroundColor: primary }} // bg-primary
                  onMouseEnter={e =>
                    (e.currentTarget.style.backgroundColor = primaryDark)
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.style.backgroundColor = primary)
                  }
                >
                  Explore Skills
                </button>
                </a>
                <a href="#project">
                <button className='flex items-center h-12 px-8 bg-transparent border border-slate-600 hover:border-white text-white font-medium rounded-lg hover:bg-white/5 transition-all'>
                  View Projects
                </button></a>
              </div>
            </div>

            {/* 3D Visualization Sphere */}
            <div className='relative h-[500px] flex items-center justify-center perspective-1000 order-1 lg:order-2 group cursor-grab active:cursor-grabbing'>
              <div className='relative w-80 h-80 animate-spin-slow hover:[animation-play-state:paused] transition-all duration-500'>
                {/* Central Core */}
                <div
                  className='absolute inset-0 m-auto w-32 h-32 rounded-full blur-xl animate-pulse'
                  style={{ backgroundColor: 'rgba(13,162,231,0.2)' }} // bg-primary/20
                ></div>
                <div className='absolute inset-0 m-auto w-24 h-24 bg-gradient-radial from-primary to-transparent rounded-full opacity-80 z-10 flex items-center justify-center border border-primary/50 shadow-neon'>
                  <span className='material-symbols-outlined text-white text-4xl'>
                    code
                  </span>
                </div>

                {/* Orbit Rings */}
                <div
                  className='absolute inset-0 rounded-full border scale-150'
                  style={{ borderColor: 'rgba(13,162,231,0.1)' }} // border-primary/10
                ></div>
                <div
                  className='absolute inset-0 rounded-full border border-dashed scale-[1.8] animate-spin-slow'
                  style={{
                    borderColor: 'rgba(13,162,231,0.2)', // border-primary/20
                    animationDirection: 'reverse',
                    animationDuration: '30s'
                  }}
                ></div>

                {/* Floating Skills */}
                <div
                  className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 animate-float'
                  style={{ animationDelay: '0s' }}
                >
                  <div className='glass-panel px-4 py-2 rounded-lg text-primary font-bold shadow-neon text-sm flex items-center gap-2'>
                    <span className='material-symbols-outlined text-base'>
                      javascript
                    </span>{' '}
                    React
                  </div>
                </div>
                <div
                  className='absolute bottom-10 right-0 translate-x-12 animate-float'
                  style={{ animationDelay: '1s' }}
                >
                  <div className='glass-panel px-4 py-2 rounded-lg text-white font-bold shadow-lg text-sm flex items-center gap-2 border border-white/10'>
                    <span className='material-symbols-outlined text-base text-green-400'>
                      data_object
                    </span>{' '}
                    Node.js
                  </div>
                </div>
                <div
                  className='absolute bottom-10 left-0 -translate-x-12 animate-float'
                  style={{ animationDelay: '2s' }}
                >
                  <div className='glass-panel px-4 py-2 rounded-lg text-white font-bold shadow-lg text-sm flex items-center gap-2 border border-white/10'>
                    <span className='material-symbols-outlined text-base text-blue-400'>
                      javascript
                    </span>{' '}
                    Javascript
                  </div>
                </div>
                <div
                  className='absolute top-1/2 right-[-60px] animate-float'
                  style={{ animationDelay: '1.5s' }}
                >
                  <div className='glass-panel px-4 py-2 rounded-lg text-white font-bold shadow-lg text-sm flex items-center gap-2 border border-white/10'>
                    <span className='material-symbols-outlined text-base text-orange-400'>
                      code
                    </span>{' '}
                    Python
                  </div>
                </div>
                <div
                  className='absolute top-1/2 left-[-60px] animate-float'
                  style={{ animationDelay: '0.5s' }}
                >
                  <div className='glass-panel px-4 py-2 rounded-lg text-white font-bold shadow-lg text-sm flex items-center gap-2 border border-white/10'>
                    <span className='material-symbols-outlined text-base text-purple-400'>
                      brush
                    </span>{' '}
                    Figma
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce'>
            <span className='text-[10px] tracking-[0.2em] uppercase text-white'>
              Scroll to Analyze
            </span>
            <span
              className='material-symbols-outlined'
              style={{ color: primary }} // text-primary
            >
              keyboard_arrow_down
            </span>
          </div>
        </section>
        {/* CORE CAPABILITIES (Cards) */}
        <section className='py-20 relative z-10'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='flex items-center justify-between mb-10 border-b border-white/10 pb-4'>
              <h2 className='text-3xl font-bold text-white tracking-tight flex items-center gap-3'>
                <span
                  className='w-1 h-8 rounded-full'
                  style={{ backgroundColor: primary }} // bg-primary
                ></span>
                CORE CAPABILITIES
              </h2>
              <span
                className='font-mono text-sm hidden sm:block'
                style={{ color: 'rgba(13,162,231,0.5)' }} // text-primary/50
              >
                01 // OVERVIEW
              </span>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {[
                {
                  icon: 'architecture',
                  title: 'Full Stack <br /> Architecture',
                  desc: 'Frontend and backend development using modern JavaScript frameworks, REST APIs, and database-driven architectures.'
                },
                {
                  icon: 'palette',
                  title: 'Frontend Engineering',
                  desc: 'Responsive, accessible, and performance-focused UI development using React, Tailwind CSS, and modern design principles.'
                },
                {
                  icon: 'dns',
                  title: 'Backend & Databases',
                  desc: 'API development, database design, and server-side logic using Node.js, MongoDB, and RESTful architecture.'
                },
                {
                  icon: 'devices',
                  title: 'Deployment & Cloud',
                  desc: 'Application hosting, cloud basics, and deployment workflows using Git, CLI tools, and Google Cloud Platform.'
                }
              ].map(item => (
                <CapabilityCard
                  key={item.icon}
                  icon={item.icon}
                  title={item.title}
                  description={item.desc}
                />
              ))}
            </div>
          </div>
        </section>

        {/* DETAILED BREAKDOWN SECTION */}
        <section
  id="skills-showcase"
  className="py-24 relative overflow-hidden bg-[#16252d]/80"
>
  <div
    className="absolute inset-0 opacity-10 animate-pulse pointer-events-none"
    style={{
      backgroundImage:
        "url('https://www.transparenttextures.com/patterns/stardust.png')",
    }}
  ></div>

  <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0da2e7]/30 to-transparent"></div>
  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0da2e7]/30 to-transparent"></div>

  <div className="absolute top-20 left-10 w-64 h-64 bg-[#0da2e7]/5 rounded-full blur-3xl animate-float pointer-events-none"></div>

  <div
    className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float pointer-events-none"
    style={{ animationDelay: "2s" }}
  ></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
        Creative{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          Skills Universe
        </span>
      </h2>
      <p className="text-slate-400 max-w-2xl mx-auto text-lg">
        An interactive constellation of technologies powering my full-stack
        capabilities. Explore the system nodes.
      </p>
    </div>

    {/* Frontend Galaxy */}
    <div className="mb-24 relative group/category">
      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 rounded-full opacity-50"></div>

      <div className="flex items-center gap-4 mb-10 pl-4 md:pl-6 border-l border-white/5">
        <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
          <span className="material-symbols-outlined text-3xl">
            code_blocks
          </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          Frontend <span className="text-cyan-400">Galaxy</span>
        </h3>
        <span className="text-xs font-mono text-cyan-500/50 ml-auto hidden sm:block">
          02 // VISUAL
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-16 perspective-1000 py-10">
        {/* React/Next */}
        <div
          className="relative group cursor-pointer animate-float"
          style={{ animationDelay: "0s" }}
        >
          <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-400/40 transition-all duration-500 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-150"></div>
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-2 transition-all duration-500 group-hover:border-cyan-400/50 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] z-10">
            <span className="material-symbols-outlined text-4xl text-cyan-200 group-hover:text-white transition-colors">
              code
            </span>
            <span className="text-xs font-bold text-cyan-100 tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
              React/vite
            </span>
          </div>
        </div>

        {/* Tailwind */}
        <div
          className="relative group cursor-pointer animate-float"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl group-hover:bg-cyan-400/40 transition-all duration-500 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-150"></div>
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-2 transition-all duration-500 group-hover:border-cyan-400/50 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] z-10">
            <span className="material-symbols-outlined text-4xl text-cyan-200 group-hover:text-white transition-colors">
             css
            </span>
            <span className="text-xs font-bold text-cyan-100 tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
              Tailwind
            </span>
          </div>
        </div>

        {/* javaScript */}
        <div
          className="relative group cursor-pointer animate-float"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-400/40 transition-all duration-500 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-150"></div>
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-2 transition-all duration-500 group-hover:border-blue-400/50 group-hover:scale-110 group-hover:-translate-y-2 group-hover:-rotate-3 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] z-10">
            <span className="material-symbols-outlined text-4xl text-blue-200 group-hover:text-white transition-colors">
              javascript
            </span>
            <span className="text-xs font-bold text-blue-100 tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
              Javascript
            </span>
          </div>
        </div>

        {/* Figma  */}
        <div
          className="relative group cursor-pointer animate-float"
          style={{ animationDelay: "2.2s" }}
        >
          <div className="absolute inset-0 bg-pink-500/20 rounded-full blur-xl group-hover:bg-pink-400/40 transition-all duration-500 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-150"></div>
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-2 transition-all duration-500 group-hover:border-pink-400/50 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-12 group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] z-10">
            <span className="material-symbols-outlined text-4xl text-pink-200 group-hover:text-white transition-colors">
              view_in_ar
            </span>
            <span className="text-xs font-bold text-pink-100 tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
              Figma
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Backend Nebula */}
    <div className="mb-24 relative group/category">
      <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0 rounded-full opacity-50"></div>

      <div className="flex items-center justify-end gap-4 mb-10 pr-4 md:pr-6 border-r border-white/5">
        <span className="text-xs font-mono text-purple-500/50 mr-auto hidden sm:block">
          03 // SYSTEM
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          Backend <span className="text-purple-400">Nebula</span>
        </h3>
        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
          <span className="material-symbols-outlined text-3xl">dns</span>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-16 perspective-1000 py-10">
        {/* Node.js */}
        <div
          className="relative group cursor-pointer animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-400/40 transition-all duration-500 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-150"></div>
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-2 transition-all duration-500 group-hover:border-green-400/50 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(74,222,128,0.3)] z-10">
            <span className="material-symbols-outlined text-4xl text-green-200 group-hover:text-white transition-colors">
              data_object
            </span>
            <span className="text-xs font-bold text-green-100 tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
              Node.js
            </span>
          </div>
        </div>

        {/* Python */}
        <div
          className="relative group cursor-pointer animate-float"
          style={{ animationDelay: "2.5s" }}
        >
          <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl group-hover:bg-yellow-400/40 transition-all duration-500 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-150"></div>
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-2 transition-all duration-500 group-hover:border-yellow-400/50 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-6 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] z-10">
            <span className="material-symbols-outlined text-4xl text-yellow-200 group-hover:text-white transition-colors">
              terminal
            </span>
            <span className="text-xs font-bold text-yellow-100 tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
              Python
            </span>
          </div>
        </div>

        {/* Postgres */}
        <div
          className="relative group cursor-pointer animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-all duration-500 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-150"></div>
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-2 transition-all duration-500 group-hover:border-blue-500/50 group-hover:scale-110 group-hover:-translate-y-2 group-hover:-rotate-6 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] z-10">
            <span className="material-symbols-outlined text-4xl text-blue-300 group-hover:text-white transition-colors">
              database
            </span>
            <span className="text-xs font-bold text-blue-200 tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
            MongoDB
            </span>
          </div>
        </div>

        {/* GraphQL */}
        <div
          className="relative group cursor-pointer animate-float"
          style={{ animationDelay: "1.8s" }}
        >
          <div className="absolute inset-0 bg-pink-600/20 rounded-full blur-xl group-hover:bg-pink-500/40 transition-all duration-500 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-150"></div>
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center justify-center gap-2 transition-all duration-500 group-hover:border-pink-500/50 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-12 group-hover:shadow-[0_0_30px_rgba(219,39,119,0.3)] z-10">
            <span className="material-symbols-outlined text-4xl text-pink-300 group-hover:text-white transition-colors">
              schema
            </span>
            <span className="text-xs font-bold text-pink-200 tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
              Database Design
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Tools & Platforms */}
    <div className="relative group/category pt-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="flex items-center justify-center gap-4 mb-16">
        <div className="px-8 py-3 rounded-full bg-slate-800/50 border border-white/10 backdrop-blur text-slate-300 shadow-[0_0_10px_rgba(13,162,231,0.3),0_0_20px_rgba(13,162,231,0.1)] flex items-center gap-3">
          <span className="material-symbols-outlined text-[#0da2e7] text-xl">
            construction
          </span>
          <span className="text-sm font-bold tracking-widest uppercase">
            Tools &amp; Platforms
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
        {/* vs code */}
        <div className="group relative">
          <div className="absolute inset-0 bg-[#0da2e7]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative h-24 bg-[#16252d] border border-white/5 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#0da2e7]/50 group-hover:bg-[#1d2e38]">
            <span className="material-symbols-outlined text-3xl text-[#0da2e7]/70 group-hover:text-[#0da2e7] transition-colors">
              code
            </span>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">
              VS code
            </span>
          </div>
        </div>

        {/* cli */}
        <div className="group relative">
          <div className="absolute inset-0 bg-[#0da2e7]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative h-24 bg-[#16252d] border border-white/5 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#0da2e7]/50 group-hover:bg-[#1d2e38]">
            <span className="material-symbols-outlined text-3xl text-[#0da2e7]/70 group-hover:text-[#0da2e7] transition-colors">
              Terminal
            </span>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">
              CLI
            </span>
          </div>
        </div>

        {/* Linux */}
        <div className="group relative">
          <div className="absolute inset-0 bg-[#0da2e7]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative h-24 bg-[#16252d] border border-white/5 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#0da2e7]/50 group-hover:bg-[#1d2e38]">
            <span className="material-symbols-outlined text-3xl text-[#0da2e7]/70 group-hover:text-[#0da2e7] transition-colors">
              terminal
            </span>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">
              Linux
            </span>
          </div>
        </div>

        {/* Git */}
        <div className="group relative">
          <div className="absolute inset-0 bg-[#0da2e7]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative h-24 bg-[#16252d] border border-white/5 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#0da2e7]/50 group-hover:bg-[#1d2e38]">
            <span className="material-symbols-outlined text-3xl text-[#0da2e7]/70 group-hover:text-[#0da2e7] transition-colors">
              code
            </span>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">
              Git
            </span>
          </div>
        </div>

        {/* Figma */}
        <div className="group relative">
          <div className="absolute inset-0 bg-[#0da2e7]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative h-24 bg-[#16252d] border border-white/5 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#0da2e7]/50 group-hover:bg-[#1d2e38]">
            <span className="material-symbols-outlined text-3xl text-[#0da2e7]/70 group-hover:text-[#0da2e7] transition-colors">
              design_services
            </span>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">
              Figma
            </span>
          </div>
        </div>

        {/* Redis */}
        <div className="group relative">
          <div className="absolute inset-0 bg-[#0da2e7]/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative h-24 bg-[#16252d] border border-white/5 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#0da2e7]/50 group-hover:bg-[#1d2e38]">
            <span className="material-symbols-outlined text-3xl text-[#0da2e7]/70 group-hover:text-[#0da2e7] transition-colors">
              api
            </span>
            <span className="text-sm font-medium text-slate-300 group-hover:text-white">
             Postman
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* CTA */}
    <div className="mt-24 rounded-2xl p-1 bg-gradient-to-r from-[#0da2e7]/20 via-[#0da2e7]/50 to-[#0da2e7]/20">
      <div className="bg-[#101c22] rounded-xl px-10 py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h3 className="text-3xl md:text-4xl font-bold text-white max-w-2xl">
           Ready to build something real together?
          </h3>
          <p className="text-slate-400 max-w-lg">
           I focus on clean code, practical solutions, and continuous learning. Let’s turn your idea into a working product.
          </p>
          <a href="#connect">
          <button  className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-[#0da2e7] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#007bb5] shadow-[0_0_10px_rgba(13,162,231,0.3),0_0_20px_rgba(13,162,231,0.1)] hover:shadow-[0_0_15px_rgba(13,162,231,0.6),0_0_30px_rgba(13,162,231,0.2)] transition-all duration-300 mt-4">
            Start Collaboration
          </button>
          </a>
        </div>
      </div>
    </div>
  </div>
      </section>

      </main>

      {/* Footer */}
    </div>
  )
}

export default SkillsPage
