import React from 'react'

const PremiumProjects = () => {
  return (
    <div
      id='project'
      className='dark'
      style={{
        fontFamily: '"Space Grotesk", sans-serif',
        backgroundColor: '#050a0e',
        color: 'white'
      }}
    >
      {/* Background Ambient Glow */}
      <div className='fixed inset-0 pointer-events-none z-0'>
        <div
          className='absolute top-[-10%] left-[-10%] rounded-full blur-[120px]'
          style={{
            width: '40vw',
            height: '40vw',
            backgroundColor: 'rgba(13,162,231,0.1)' // bg-primary/10
          }}
        />
        <div
          className='absolute bottom-[-10%] right-[-10%] rounded-full blur-[120px]'
          style={{
            width: '40vw',
            height: '40vw',
            backgroundColor: 'rgba(0,240,255,0.05)' // bg-secondary-glow/5
          }}
        />
        <div
          className='absolute inset-0 bg-[length:40px_40px] opacity-20'
          style={{
            backgroundImage:
              'linear-gradient(rgba(13, 162, 231, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(13, 162, 231, 0.03) 1px, transparent 1px)'
          }}
        />
      </div>

      <div className='relative z-10 flex flex-col min-h-screen overflow-x-hidden antialiased selection:bg-[#0da2e7] selection:text-white'>
        {/* Navigation */}

        {/* Main Content */}
        <main className='flex-grow flex flex-col items-center py-12 md:py-20 relative'>
          {/* Page Heading */}
          <div className='w-full max-w-7xl px-6 mb-12 md:mb-20'>
            <div
              className='flex flex-col md:flex-row md:items-end justify-between gap-6 border-b pb-8'
              style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}
            >
              <div className='space-y-2'>
                <h1 className='text-5xl md:text-7xl font-bold tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400'>
                  PROJECTS
                  <br />
                  <span className='text-[#0da2e7] drop-shadow-[0_0_15px_rgba(13,162,231,0.3)]'>
                    I’VE BUILT
                  </span>
                </h1>
              </div>
              <p className='text-gray-400 max-w-md text-base md:text-lg leading-relaxed text-right md:text-right self-end'>
                A collection of real-world applications built using the MERN
                stack, focused on solving practical problems with clean UI and
                scalable logic.
              </p>
            </div>
          </div>

          {/* Horizontal Project Carousel */}
          <div className='w-full overflow-x-auto hide-scrollbar pb-12 pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))] pr-6 snap-x snap-mandatory'>
            <div className='flex gap-8 w-max'>
              {/* Card 1 */}
              <div
                className='group relative w-[85vw] md:w-[600px] snap-center shrink-0 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-[#0da2e7]/50 hover:scale-[1.01]'
                style={{
                  background: 'rgba(16, 29, 35, 0.4)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow:
                    '0 0 10px rgba(13, 162, 231, 0.3), 0 0 20px rgba(13, 162, 231, 0.1)'
                }}
              >
                <div
                  className='aspect-video w-full relative overflow-hidden'
                  style={{ backgroundColor: '#0f1921' }}
                >
                  <div
                    className='absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0 z-10'
                    data-alt='Modern dashboard interface with data visualization charts'
                    style={{
                      backgroundImage:
                        'url("/projectImage/landing-desktopSocialmeida.png")'
                    }}
                  />
                  <div
                    className='absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100 z-0'
                    data-alt='Animated version of dashboard showing real-time updates'
                    style={{
                      backgroundImage:
                        'url("/projectImage/profile-desktop-social-media.png")'
                    }}
                  />
                  <div
                    className='absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-90 z-20'
                    style={{
                      backgroundImage:
                        'linear-gradient(to top, #050a0e, transparent, transparent)'
                    }}
                  />
                  <div className='absolute bottom-0 left-0 right-0 p-8 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                    <a
                    target='_blank'
                    href="https://github.com/Kushdeveloper68/CodeAlpha_Social-media">
                    <div className='flex justify-between items-end mb-2'>
                      <div className='text-[#0da2e7] text-sm font-bold tracking-widest mb-1'>
                        01 / Full Stack
                      </div>
                      <span className='material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 p-2 rounded-full backdrop-blur-md'>
                        arrow_outward
                      </span>
                    </div>
                    </a>
                    <h3 className='text-3xl font-bold text-white mb-2 group-hover:text-[#0da2e7] transition-colors'>
                      Social Media Web App
                    </h3>
                    <p className='text-gray-400 text-sm max-w-sm opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden'>
                      A social media platform where users can create accounts,
                      upload posts, like and comment on content, and interact
                      with other users in real time.
                    </p>
                    <div className='flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100'>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        React.js
                      </span>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        MongoDB
                      </span>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        Node.js
                      </span>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        Multer
                      </span>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        Tailwind
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className='group relative w-[85vw] md:w-[600px] snap-center shrink-0 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-[#0da2e7]/50 hover:scale-[1.01]'
                style={{
                  background: 'rgba(16, 29, 35, 0.4)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow:
                    '0 0 10px rgba(13, 162, 231, 0.3), 0 0 20px rgba(13, 162, 231, 0.1)'
                }}
              >
                <div
                  className='aspect-video w-full relative overflow-hidden'
                  style={{ backgroundColor: '#0f1921' }}
                >
                  <div
                    className='absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0 z-10'
                    data-alt='Abstract 3D shapes floating in a dark void'
                    style={{
                      backgroundImage:
                        'url("/projectImage/e-commerce2.png")'
                    }}
                  />
                  <div
                    className='absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100 z-0'
                    data-alt='Interactive 3D scene with glowing particles'
                    style={{
                      backgroundImage:
                        'url("/projectImage/e-commerce.png")'
                    }}
                  />
                  <div
                    className='absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-90 z-20'
                    style={{
                      backgroundImage:
                        'linear-gradient(to top, #050a0e, transparent, transparent)'
                    }}
                  />
                  <div className='absolute bottom-0 left-0 right-0 p-8 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                    <a
                    target='_blank'
                    href="https://github.com/Kushdeveloper68/CodeAlpha_Simplee-commerceStore">
                    <div className='flex justify-between items-end mb-2'>
                      <div className='text-[#0da2e7] text-sm font-bold tracking-widest mb-1'>
                        02 / Full Stack
                      </div>
                      <span className='material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 p-2 rounded-full backdrop-blur-md'>
                        arrow_outward
                      </span>
                    </div>
                    </a>
                    <h3 className='text-3xl font-bold text-white mb-2 group-hover:text-[#0da2e7] transition-colors'>
                      E-Commerce Web Application
                    </h3>
                    <p className='text-gray-400 text-sm max-w-sm opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden'>
                      A complete e-commerce platform allowing users to browse
                      products, add items to cart, place orders, and view order
                      history.
                    </p>
                    <div className='flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100'>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        Node.js
                      </span>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        Express.js
                      </span>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        React.js
                      </span>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        MongoDB
                      </span>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        Tailwind
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div
                className='group relative w-[85vw] md:w-[600px] snap-center shrink-0 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-[#0da2e7]/50 hover:scale-[1.01]'
                style={{
                  background: 'rgba(16, 29, 35, 0.4)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow:
                    '0 0 10px rgba(13, 162, 231, 0.3), 0 0 20px rgba(13, 162, 231, 0.1)'
                }}
              >
                <div
                  className='aspect-video w-full relative overflow-hidden'
                  style={{ backgroundColor: '#0f1921' }}
                >
                  <div
                    className='absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0 z-10'
                    data-alt='Close up of mechanical keyboard with neon lighting'
                    style={{
                      backgroundImage:
                        'url("/projectImage/github.png")'
                    }}
                  />
                  <div
                    className='absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100 z-0'
                    data-alt='E-commerce platform interface on a laptop screen'
                    style={{
                      backgroundImage:
                        'url("/projectImage/mainpage-github-explorer.png")'
                    }}
                  />
                  <div
                    className='absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-90 z-20'
                    style={{
                      backgroundImage:
                        'linear-gradient(to top, #050a0e, transparent, transparent)'
                    }}
                  />
                  <div className='absolute bottom-0 left-0 right-0 p-8 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                    <a
                    target='_blank'
                    href="https://github.com/Kushdeveloper68/Own-Github-Explorer">
                    <div className='flex justify-between items-end mb-2'>
                      <div className='text-[#0da2e7] text-sm font-bold tracking-widest mb-1'>
                        03 / Frontend + API Integration
                      </div>
                      <span className='material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 p-2 rounded-full backdrop-blur-md'>
                        arrow_outward
                      </span>
                    </div>
</a>
                    <h3 className='text-3xl font-bold text-white mb-2 group-hover:text-[#0da2e7] transition-colors'>
                      GitHub Explorer
                    </h3>
                    <p className='text-gray-400 text-sm max-w-sm opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden'>
                      A developer tool that lets users search any GitHub profile
                      and view repositories, starred repos, and account details
                      in a clean UI.
                    </p>
                    <div className='flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100'>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        React.js
                      </span>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        GitHub API
                      </span>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        Tailwind CSS
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div
                className='group relative w-[85vw] md:w-[600px] snap-center shrink-0 rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-[#0da2e7]/50 hover:scale-[1.01]'
                style={{
                  background: 'rgba(16, 29, 35, 0.4)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow:
                    '0 0 10px rgba(13, 162, 231, 0.3), 0 0 20px rgba(13, 162, 231, 0.1)'
                }}
              >
                <div
                  className='aspect-video w-full relative overflow-hidden'
                  style={{ backgroundColor: '#0f1921' }}
                >
                  <div
                    className='absolute inset-0 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-0 z-10'
                    data-alt='Close up of mechanical keyboard with neon lighting'
                    style={{
                      backgroundImage:
                        'url("/projectImage/workerproject.png")'
                    }}
                  />
                  <div
                    className='absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-105 group-hover:scale-100 z-0'
                    data-alt='E-commerce platform interface on a laptop screen'
                    style={{
                      backgroundImage:
                        'url("/projectImage/worker-manager-project2.png")'
                    }}
                  />
                  <div
                    className='absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-90 z-20'
                    style={{
                      backgroundImage:
                        'linear-gradient(to top, #050a0e, transparent, transparent)'
                    }}
                  />
                  <div className='absolute bottom-0 left-0 right-0 p-8 z-30 translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                    <a
                    target='_blank'
                    href="https://github.com/Kushdeveloper68/worker-project">
                    <div className='flex justify-between items-end mb-2'>
                      <div className='text-[#0da2e7] text-sm font-bold tracking-widest mb-1'>
                        03 / Full Stack
                      </div>
                      <span className='material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 p-2 rounded-full backdrop-blur-md'>
                        arrow_outward
                      </span>
                    </div>
</a>
                    <h3 className='text-3xl font-bold text-white mb-2 group-hover:text-[#0da2e7] transition-colors'>
                      Worker Manager System
                    </h3>
                    <p className='text-gray-400 text-sm max-w-sm opacity-0 h-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden'>
                      A management system to track workers’ daily attendance,
                      work hours, salary per day, and complete work history.
                    </p>
                    <div className='flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100'>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        React.js
                      </span>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        Node.js
                      </span>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        MongoDB
                      </span>
                      <span className='px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300'>
                        Tailwind CSS
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5 */}
              
            </div>
          </div>

          {/* Expanded Case Study Section */}
          <div className='w-full max-w-7xl px-6 mt-20 md:mt-32'>
            <div
              className='relative rounded-3xl overflow-hidden border'
              style={{
                background: 'rgba(16, 29, 35, 0.4)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderColor: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              <div
                className='absolute top-0 right-0 rounded-full blur-[100px] pointer-events-none'
                style={{
                  width: '500px',
                  height: '500px',
                  backgroundColor: 'rgba(13,162,231,0.05)' // bg-primary/5
                }}
              />
              <div className='grid grid-cols-1 lg:grid-cols-2'>
                {/* Left: Visuals */}
                <div
                  className='p-8 md:p-12 lg:border-r relative min-h-[400px] lg:min-h-[600px] flex flex-col justify-between'
                  style={{ borderColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <div className='absolute top-6 left-6 z-10'>
                    <span className='bg-[#0da2e7] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider'>
                      Attendence Management System
                    </span>
                  </div>
                  <div className='flex-1 flex items-center justify-center'>
                    <div className='relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-white/10 group'>
                      <div
                        className='absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105'
                        data-alt='Detailed view of the NeonFin dashboard charts'
                        style={{
                          backgroundImage:
                            'url("/projectImage/studentpage.png")'
                        }}
                      />
                      
                    </div>
                  </div>
                  <div className='mt-8 flex gap-4 overflow-x-auto hide-scrollbar'>
                    <div
                      className='w-32 h-20 shrink-0 rounded-lg bg-cover bg-center border border-white/10 cursor-pointer hover:border-[#0da2e7] transition-colors'
                      data-alt='Mobile responsive view of dashboard'
                      style={{
                        backgroundImage:
                          'url("/projectImage/studentpage.png")'
                      }}
                    />
                    <div
                      className='w-32 h-20 shrink-0 rounded-lg bg-cover bg-center border border-white/10 cursor-pointer hover:border-[#0da2e7] transition-colors'
                      data-alt='Dark mode color palette breakdown'
                      style={{
                        backgroundImage:
                          'url("/projectImage/teacherpage-attendence-home.png")'
                      }}
                    />
                    <div
                      className='w-32 h-20 shrink-0 rounded-lg bg-cover bg-center border border-white/10 cursor-pointer hover:border-[#0da2e7] transition-colors'
                      data-alt='Wireframe sketches of user flow'
                      style={{
                        backgroundImage:
                          'url("/projectImage/adminpage-attendence-home.png")'
                      }}
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div className='p-8 md:p-12 flex flex-col'>
                  <h2 className='text-4xl font-bold mb-2'>Attendance Home</h2>
                  <p className='text-[#0da2e7] text-lg mb-8'>
                    QR-Powered Attendance Management System
                  </p>
                  <div className='space-y-8 flex-1'>
                    <div>
                      <h4 className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-3'>
                        The Challenge
                      </h4>
                      <p className='text-gray-300 leading-relaxed'>
                        Traditional attendance systems are time-consuming,
                        error-prone, and easy to manipulate. Manual roll calls
                        waste class time, proxy attendance is common, and
                        institutions struggle to maintain accurate records
                        across students, teachers, and administrators.
                      </p>
                    </div>
                    <div>
                      <h4 className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-3'>
                        The Solution
                      </h4>
                      <p className='text-gray-300 leading-relaxed'>
                        Attendance Home solves these problems by introducing a
                        secure, role-based, QR-powered attendance system
                        designed for real classrooms. Teachers generate
                        time-bound, unique QR codes, students scan them to mark
                        attendance, and admins manage everything through a
                        centralized dashboard. JWT authentication, OTP
                        verification, IP logging, and duplicate-scan prevention
                        ensure fraud-proof attendance.
                      </p>
                    </div>
                    <div>
                      <h4 className='text-xs font-bold text-gray-500 uppercase tracking-widest mb-3'>
                        Tech Stack
                      </h4>
                      <div className='flex flex-wrap gap-3'>
                        <div
                          className='flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10'
                          style={{ backgroundColor: '#0f1921' }}
                        >
                          <span className='material-symbols-outlined text-[#0da2e7] text-lg'>
                            code
                          </span>
                          <span className='text-sm'>React</span>
                        </div>
                        <div
                          className='flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10'
                          style={{ backgroundColor: '#0f1921' }}
                        >
                          <span className='material-symbols-outlined text-[#0da2e7] text-lg'>
                            data_object
                          </span>
                          <span className='text-sm'>Node.js</span>
                        </div>
                        <div
                          className='flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10'
                          style={{ backgroundColor: '#0f1921' }}
                        >
                          <span className='material-symbols-outlined text-[#0da2e7] text-lg'>
                            cloud_sync
                          </span>
                          <span className='text-sm'>MongoDB</span>
                        </div>
                        <div
                          className='flex items-center gap-2 px-3 py-2 rounded-lg border border-white/10'
                          style={{ backgroundColor: '#0f1921' }}
                        >
                          <span className='material-symbols-outlined text-[#0da2e7] text-lg'>
                            speed
                          </span>
                          <span className='text-sm'>Tailwind CSS</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className='mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-4'>
                   <a
                   target='_blank'
                   href="https://github.com/Kushdeveloper68/attendence-home">
                    <button className='flex-1 min-w-[160px] bg-[#0da2e7] hover:bg-[#0da2e7]/90 text-black font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(13,162,231,0.3)] hover:shadow-[0_0_30px_rgba(13,162,231,0.5)]'>
                      <span className='material-symbols-outlined text-xl'>
                        rocket_launch
                      </span>
                      <span>View Project</span>
                    </button>
                    </a>
                    {/* <button className='flex-1 min-w-[160px] bg-transparent border border-white/20 hover:border-[#0da2e7] text-white hover:text-[#0da2e7] font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2'>
                      <span className='material-symbols-outlined text-xl'>
                        code
                      </span>
                      <span>Source Code</span>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
      </div>
    </div>
  )
}

export default PremiumProjects
