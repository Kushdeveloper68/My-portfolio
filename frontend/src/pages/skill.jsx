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
        id='skills'
          className='py-20 relative'
          style={{ backgroundColor: 'rgba(22,37,45,0.5)' }} // bg-surface-dark/50
        >
          <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16'>
            {/* FRONTEND ENGINEERING */}
            <div>
              <div className='flex items-center justify-between mb-8 pb-4 border-b border-white/10'>
                <h2 className='text-2xl font-bold text-white tracking-tight flex items-center gap-3'>
                  <span
                    className='w-1 h-6 rounded-full'
                    style={{ backgroundColor: primary }}
                  ></span>
                  FRONTEND ENGINEERING
                </h2>
                <span
                  className='font-mono text-sm'
                  style={{ color: 'rgba(13,162,231,0.5)' }} // text-primary/50
                >
                  02 // VISUAL
                </span>
              </div>

              <div className='space-y-8'>
                {/* Skill Item */}
                <div className='group'>
                  <div className='flex justify-between mb-2'>
                    <span className='text-white font-medium flex items-center gap-2'>
                      <span
                        className='material-symbols-outlined text-lg'
                        style={{ color: primary }} // text-primary
                      >
                        code_blocks
                      </span>
                      HTML5 / CSS3
                    </span>
                    <span
                      className='font-mono text-sm'
                      style={{ color: primary }}
                    >
                      95%
                    </span>
                  </div>
                  <div
                    className='h-2 w-full rounded-full overflow-hidden relative'
                    style={{ backgroundColor: '#1d2e38' }} // bg-secondary
                  >
                    <div className='skill-bar-fill h-full rounded-full w-[95%] relative group-hover:brightness-125 transition-all'>
                      <div className='absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]'></div>
                    </div>
                  </div>
                </div>

                {/* Skill Item */}
                <div className='group'>
                  <div className='flex justify-between mb-2'>
                    <span className='text-white font-medium flex items-center gap-2'>
                      <span
                        className='material-symbols-outlined text-lg'
                        style={{ color: primary }}
                      >
                        javascript
                      </span>
                      JavaScript (ES6+)
                    </span>
                    <span
                      className='font-mono text-sm'
                      style={{ color: primary }}
                    >
                      85%
                    </span>
                  </div>
                  <div
                    className='h-2 w-full rounded-full overflow-hidden'
                    style={{ backgroundColor: '#1d2e38' }}
                  >
                    <div className='skill-bar-fill h-full rounded-full w-[85%] relative group-hover:brightness-125 transition-all'>
                      <div className='absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]'></div>
                    </div>
                  </div>
                </div>
                {/* Skill Item */}
                <div className='group'>
                  <div className='flex justify-between mb-2'>
                    <span className='text-white font-medium flex items-center gap-2'>
                      <span
                        className='material-symbols-outlined text-lg'
                        style={{ color: primary }}
                      >
                        view_in_ar
                      </span>
                      Tailwind CSS
                    </span>
                    <span
                      className='font-mono text-sm'
                      style={{ color: primary }}
                    >
                      75%
                    </span>
                  </div>
                  <div
                    className='h-2 w-full rounded-full overflow-hidden'
                    style={{ backgroundColor: '#1d2e38' }}
                  >
                    <div className='skill-bar-fill h-full rounded-full w-[75%] relative group-hover:brightness-125 transition-all'>
                      <div className='absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]'></div>
                    </div>
                  </div>
                </div>
                {/* Skill Item */}
                <div className='group'>
                  <div className='flex justify-between mb-2'>
                    <span className='text-white font-medium flex items-center gap-2'>
                      <span
                        className='material-symbols-outlined text-lg'
                        style={{ color: primary }}
                      >
                        code
                      </span>
                      React + Vite
                    </span>
                    <span
                      className='font-mono text-sm'
                      style={{ color: primary }}
                    >
                      80%
                    </span>
                  </div>
                  <div
                    className='h-2 w-full rounded-full overflow-hidden'
                    style={{ backgroundColor: '#1d2e38' }}
                  >
                    <div className='skill-bar-fill h-full rounded-full w-[80%] relative group-hover:brightness-125 transition-all'>
                      <div className='absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]'></div>
                    </div>
                  </div>
                </div>

                {/* Skill Item */}
                <div className='group'>
                  <div className='flex justify-between mb-2'>
                    <span className='text-white font-medium flex items-center gap-2'>
                      <span
                        className='material-symbols-outlined text-lg'
                        style={{ color: primary }}
                      >
                        view_in_ar
                      </span>
                      UI Design (Figma)
                    </span>
                    <span
                      className='font-mono text-sm'
                      style={{ color: primary }}
                    >
                      70%
                    </span>
                  </div>
                  <div
                    className='h-2 w-full rounded-full overflow-hidden'
                    style={{ backgroundColor: '#1d2e38' }}
                  >
                    <div className='skill-bar-fill h-full rounded-full w-[70%] relative group-hover:brightness-125 transition-all'>
                      <div className='absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BACKEND & DATA */}
            <div>
              <div className='flex items-center justify-between mb-8 pb-4 border-b border-white/10'>
                <h2 className='text-2xl font-bold text-white tracking-tight flex items-center gap-3'>
                  <span
                    className='w-1 h-6 rounded-full'
                    style={{ backgroundColor: primary }}
                  ></span>
                  BACKEND &amp; DATA
                </h2>
                <span
                  className='font-mono text-sm'
                  style={{ color: 'rgba(13,162,231,0.5)' }}
                >
                  03 // SYSTEM
                </span>
              </div>
              <div className='grid grid-cols-2 gap-8'>
                {[
                  {
                    label: 'Node.js',
                    sub: 'Express/Rest APIs',
                    percent: '288deg',
                    value: '80%'
                  },
                  {
                    label: 'Python',
                    sub: 'Django',
                    percent: '216deg',
                    value: '60%'
                  },
                  {
                    label: 'MongoDB',
                    sub: 'Complex Schema',
                    percent: '288deg',
                    value: '80%'
                  },
                  {
                    label: 'Database Design',
                    sub: 'Compass',
                    percent: '252deg',
                    value: '70%'
                  }
                ].map(item => (
                  <div
                    key={item.label}
                    className='flex flex-col items-center gap-4 p-6 glass-panel rounded-xl group hover:border-primary/50 transition-colors'
                  >
                    <div
                      className='radial-progress shadow-neon group-hover:shadow-neon-strong transition-shadow duration-500'
                      style={{ ['--percent']: item.percent }}
                    >
                      <div className='radial-text flex flex-col items-center'>
                        <span className='text-2xl font-bold text-white'>
                          {item.value}
                        </span>
                      </div>
                    </div>
                    <div className='text-center'>
                      <h4 className='text-white font-bold mb-1'>
                        {item.label}
                      </h4>
                      <span className='text-xs text-slate-400'>{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TOOLS & PLATFORMS */}
        <section className='py-20'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='flex items-center justify-between mb-10 pb-4 border-b border-white/10'>
              <h2 className='text-2xl font-bold text-white tracking-tight flex items-center gap-3'>
                <span
                  className='w-1 h-6 rounded-full'
                  style={{ backgroundColor: primary }}
                ></span>
                TOOLS &amp; INFRASTRUCTURE
              </h2>
              <span
                className='font-mono text-sm'
                style={{ color: 'rgba(13,162,231,0.5)' }}
              >
                04 // STACK
              </span>
            </div>

            <div className='flex flex-wrap gap-4 justify-center'>
              {[
                { icon: 'code', label: 'VS Code' },
                { icon: 'terminal', label: 'CLI' },
                { icon: 'terminal', label: 'Linux' },
                { icon: 'code', label: 'Git' },
                { icon: 'design_services', label: 'Figma' },
                { icon: 'api', label: 'Postman' }
              ].map(tool => (
                <div
                  key={tool.label}
                  className='group relative px-6 py-3 border border-white/5 rounded-full hover:border-primary/50 transition-all cursor-default'
                  style={{ backgroundColor: '#1d2e38' }} // bg-secondary
                >
                  <div
                    className='absolute inset-0 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity'
                    style={{ backgroundColor: 'rgba(13,162,231,0.1)' }} // bg-primary/10
                  ></div>
                  <div className='relative flex items-center gap-3 text-slate-300 group-hover:text-white'>
                    <span className='material-symbols-outlined text-lg'>
                      {tool.icon}
                    </span>
                    <span className='font-medium'>{tool.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div className='mt-20 rounded-2xl p-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20'>
              <div
                className='rounded-xl px-10 py-16 text-center relative overflow-hidden'
                style={{ backgroundColor: backgroundDark }} // bg-background-dark
              >
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className='relative z-10 flex flex-col items-center gap-6'>
                  <h3 className='text-3xl md:text-4xl font-bold text-white max-w-2xl'>
                    Ready to build something real together?
                  </h3>
                  <p className='text-slate-400 max-w-lg'>
                    I focus on clean code, practical solutions, and continuous
                    learning. Let’s turn your idea into a working product.
                  </p>
                  <a href="#connect">
                  <button
                    className='flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 text-white text-base font-bold leading-normal tracking-[0.015em] shadow-neon hover:shadow-neon-strong transition-all duration-300 mt-4'
                    style={{ backgroundColor: primary }} // bg-primary
                    onMouseEnter={e =>
                      (e.currentTarget.style.backgroundColor = primaryDark)
                    }
                    onMouseLeave={e =>
                      (e.currentTarget.style.backgroundColor = primary)
                    }
                  >
                    Start Collaboration
                  </button></a>
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
