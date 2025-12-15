import React, { useEffect } from 'react'

const primary = '#0da2e7'
const backgroundLight = '#f5f7f8'
const backgroundDark = '#101c22'

const About = () => {
  // 3D mouse move effect (React way)
  useEffect(() => {
    const card = document.querySelector('.card-3d')
    const container = document.querySelector('.perspective-container')

    if (!container || !card) return

    const handleMove = e => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = ((y - centerY) / centerY) * -5
      const rotateY = ((x - centerX) / centerX) * 5

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    }

    container.addEventListener('mousemove', handleMove)
    container.addEventListener('mouseleave', handleLeave)

    return () => {
      container.removeEventListener('mousemove', handleMove)
      container.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div
      className='dark'
      style={{
        backgroundColor: backgroundDark, // dark bg
        color: '#ffffff',
        fontFamily: '"Space Grotesk", "Noto Sans", sans-serif'
      }}
    >
      {/* Navigation */}

      {/* Main Content Wrapper */}
      <div
        className='relative min-h-screen flex flex-col pt-24 pb-12'
        id='about'
      >
        {/* Decorative Background Elements */}
        <div className='absolute top-1/4 left-10 opacity-10 animate-float pointer-events-none'>
          <span
            className='material-symbols-outlined text-8xl'
            style={{ color: primary }} // text-primary
          >
            code_blocks
          </span>
        </div>
        <div className='absolute bottom-1/3 right-10 opacity-10 animate-float-delayed pointer-events-none'>
          <span
            className='material-symbols-outlined text-8xl'
            style={{ color: primary }} // text-primary
          >
            layers
          </span>
        </div>
        {/* <div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none'
          style={{ backgroundColor: 'rgba(13,162,231,0.05)' }} // bg-primary/5
        ></div> */}


        <div className='layout-container flex grow flex-col relative z-10'>
          <div className='px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5'>
            <div className='layout-content-container flex flex-col max-w-[1100px] flex-1'>
              {/* Hero/About Grid */}
              <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center'>
                {/* Left Column: 3D Profile Card */}
                <div className='lg:col-span-5 perspective-container group flex justify-center lg:block order-2 lg:order-1'>
                  <div className='card-3d relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden neon-shadow transition-all duration-500'>
                    {/* Card Background Image */}
                    <div
                      className='absolute inset-0 bg-cover bg-center'
                      style={{
                        backgroundImage:
                          "url('/profilepic.jpg')"
                      }}
                    ></div>
                    {/* Card Overlay Gradient */}
                    <div className='absolute inset-0 bg-gradient-to-t from-[#101c22] via-[#101c22]/40 to-transparent'></div>
                    {/* Glass Overlay Content */}
                    <div className='absolute inset-0 flex flex-col justify-end p-6 md:p-8'>
                      <div className='glass-panel p-4 rounded-xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
                        <div className='flex items-center justify-between mb-2'>
                          <h3 className='text-xl font-bold text-white'>
                            Kush Pandit
                          </h3>
                          <span
                            className='px-2 py-0.5 rounded text-[10px] font-bold border uppercase tracking-wider'
                            style={{
                              backgroundColor: 'rgba(13,162,231,0.2)', // bg-primary/20
                              color: primary, // text-primary
                              borderColor: 'rgba(13,162,231,0.3)' // border-primary/30
                            }}
                          >
                            Available
                          </span>
                        </div>
                        <p className='text-sm text-gray-300 font-light mb-4'>
                         Full-Stack Web Developer
                        </p>
                        <div className='flex gap-3'>
                          <a
                          target='_blank'
                           href='https://github.com/Kushdeveloper68'
                          title='github' className='size-8 rounded-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 flex items-center justify-center transition-all text-gray-400'>
                            <span className='material-symbols-outlined text-sm'>
                              code
                            </span>
                          </a>
                          <a
                           href='https://www.instagram.com/kushdev.js'
                           target='_blank'
                          title='instagram' className='size-8 rounded-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 flex items-center justify-center transition-all text-gray-400'>
                            <span className='material-symbols-outlined text-sm'>
                              alternate_email
                            </span>
                          </a>
                          <a 
                          target='_blank'
                           href='https://www.linkedin.com/in/kushdeveloper?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
                           title='linkedin' className='size-8 rounded-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 flex items-center justify-center transition-all text-gray-400'>
                            <span className='material-symbols-outlined text-sm'>
                              link
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Decorative Border */}
                    <div className='absolute inset-0 border border-white/10 rounded-2xl pointer-events-none'></div>
                  </div>
                </div>

                {/* Right Column: Content */}
                <div className='lg:col-span-7 flex flex-col gap-8 order-1 lg:order-2 text-center lg:text-left'>
                  <div
                    className='space-y-2 animate-slide-in-up'
                    style={{ animationDelay: '0.1s' }}
                  >
                    <div
                      className='inline-flex items-center gap-2 px-3 py-1 rounded-full border w-fit mx-auto lg:mx-0'
                      style={{
                        backgroundColor: 'rgba(13,162,231,0.1)', // bg-primary/10
                        borderColor: 'rgba(13,162,231,0.2)' // border-primary/20
                      }}
                    >
                      <span
                        className='block w-2 h-2 rounded-full animate-pulse'
                        style={{ backgroundColor: primary }} // bg-primary
                      ></span>
                      <span
                        className='text-xs font-bold uppercase tracking-widest'
                        style={{ color: primary }} // text-primary
                      >
                        About Me
                      </span>
                    </div>
                    <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight'>
                      Turning Ideas Into
                      <br />
                      <span className='text-gradient'>
                        Real-World Web Solutions
                      </span>
                    </h1>
                  </div>

                  <div
                    className='space-y-6 text-gray-400 text-lg leading-relaxed animate-slide-in-up'
                    style={{ animationDelay: '0.2s' }}
                  >
                    <p className='font-light'>
                      I’m a passionate Full-Stack Web Developer with a strong
                      focus on frontend development and modern{' '}
                      <strong className='text-white font-medium'>
                        JavaScript technologies.
                      </strong>{' '}
                      I enjoy building clean, responsive, and user-friendly web
                      applications that solve{' '}
                      <strong className='text-white font-medium'>
                        real problems.
                      </strong>
                    </p>
                    <p className='font-light'>
                      I have hands-on experience working with React, Tailwind
                      CSS, Node.js, Express, MongoDB, and REST APIs. From
                      designing UI layouts to implementing backend logic, I like
                      understanding and building the complete product.
                    </p>
                    <p className='font-light'>
                      I’m continuously learning, improving my skills through
                      projects, internships, and self-study, with a long-term
                      goal of becoming a professional software developer.
                    </p>
                  </div>

                  {/* Animated Stats Row */}
                  <div
                    className='grid grid-cols-3 gap-4 pt-4 animate-slide-in-up'
                    style={{ animationDelay: '0.3s' }}
                  >
                    <div className='flex flex-col gap-1 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group'>
                      <span className='text-3xl md:text-4xl font-bold text-white group-hover:text-[#0da2e7] transition-colors'>
                        1.5+
                      </span>
                      <span className='text-xs md:text-sm text-gray-500 uppercase tracking-wide'>
                        Years Exp
                      </span>
                    </div>
                    <div className='flex flex-col gap-1 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group'>
                      <span className='text-3xl md:text-4xl font-bold text-white group-hover:text-[#0da2e7] transition-colors'>
                        10+
                      </span>
                      <span className='text-xs md:text-sm text-gray-500 uppercase tracking-wide'>
                        Projects
                      </span>
                    </div>
                    <div className='flex flex-col gap-1 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group'>
                      <span className='text-3xl md:text-4xl font-bold text-white group-hover:text-[#0da2e7] transition-colors'>
                        2+
                      </span>
                      <span className='text-xs md:text-sm text-gray-500 uppercase tracking-wide'>
                        Internships / Training Programs
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div
                    className='flex flex-wrap gap-4 justify-center lg:justify-start pt-4 animate-slide-in-up'
                    style={{ animationDelay: '0.4s' }}
                  >
                    <a href="/developer-kush-resume.pdf" download>
                    <button
                      className='flex items-center gap-2 h-12 px-8 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(13,162,231,0.3)] hover:shadow-[0_0_30px_rgba(13,162,231,0.5)] transform hover:-translate-y-1'
                      style={{
                        backgroundColor: primary // bg-primary
                      }}
                    >
                      <span className='material-symbols-outlined text-[20px]'>
                        download
                      </span>
                      Download CV
                    </button>
                    </a>
                    <a href="#skill">
                    <button className='flex items-center gap-2 h-12 px-8 bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 font-bold rounded-lg transition-all transform hover:-translate-y-1'>
                      View Tech Stack
                    </button></a>
                  </div>
                </div>
              </div>

              {/* Extra Info Section (Skill Tags) */}
              <div className='mt-24 border-t border-white/10 pt-10'>
                <div className='flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-500 text-sm font-medium uppercase tracking-wider'>
                  <div className='flex items-center gap-2'>
                    <span
                      className='material-symbols-outlined text-lg'
                      style={{ color: primary }}
                    >
                      code
                    </span>
                    React / vite
                  </div>
                  <div className='flex items-center gap-2'>
                    <span
                      className='material-symbols-outlined text-lg'
                      style={{ color: primary }}
                    >
                      dns
                    </span>
                    Node.js / Express
                  </div>
                  <div className='flex items-center gap-2'>
                    <span
                      className='material-symbols-outlined text-lg'
                      style={{ color: primary }}
                    >
                      brush
                    </span>
                    Tailwind / Figma
                  </div>
                  <div className='flex items-center gap-2'>
                    <span
                      className='material-symbols-outlined text-lg'
                      style={{ color: primary }}
                    >
                      database
                    </span>
                    MongoDB / SQL
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
      </div>
    </div>
  )
}

export default About
