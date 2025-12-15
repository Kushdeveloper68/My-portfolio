import React from 'react'

const ExperiencePage = () => {
  return (
    <div
      id='experience'
      className='dark'
      style={{
        fontFamily: '"Space Grotesk", sans-serif',
        backgroundColor: '#101c22', // background-dark
        color: 'white',
        minHeight: '100vh',
        scrollBehavior: 'smooth'
      }}
    >
      <div className='relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden'>
        {/* Ambient Background Glows */}
        <div className='fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0'>
          <div
            className='absolute top-[-10%] left-[-10%] rounded-full blur-[120px]'
            style={{
              width: '40%',
              height: '40%',
              backgroundColor: 'rgba(13,162,231,0.1)' // primary/10
            }}
          />
          <div
            className='absolute bottom-[10%] right-[-5%] rounded-full blur-[100px] bg-purple-500/10'
            style={{
              width: '30%',
              height: '30%'
            }}
          />
        </div>

        {/* Top Navigation */}

        {/* Main Content */}
        <main className='relative z-10 flex flex-col items-center justify-center flex-grow py-16 px-4 md:px-10'>
          {/* Section Header */}
          <div className='w-full max-w-4xl text-center mb-16'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0da2e7]/10 border border-[#0da2e7]/20 text-[#0da2e7] text-xs font-bold tracking-wider uppercase mb-4'>
              <span className='w-2 h-2 rounded-full bg-[#0da2e7] animate-pulse' />
              Career Path
            </div>
            <h1 className='text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight'>
              Professional{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#0da2e7] to-purple-400'>
                Journey
              </span>
            </h1>
            <p className='text-gray-400 max-w-lg mx-auto text-sm md:text-base'>
              My progression from learning fundamentals to building real-world
              full-stack applications and freelance projects.
            </p>
          </div>

          {/* Timeline Container */}
          <div className='relative w-full max-w-5xl'>
            {/* Central Spine */}
            <div className='absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#0da2e7]/50 to-transparent md:-translate-x-1/2' />

            {/* Timeline Items Wrapper */}
            <div className='flex flex-col gap-12 md:gap-24 relative'>
              {/* Item 1 */}
              <div className='group relative flex md:justify-between items-center w-full'>
                {/* Spacer for Desktop Left */}
                <div className='hidden md:block md:w-[45%]' />
                {/* Center Node */}
                <div className='absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20'>
                  <div
                    className='w-12 h-12 rounded-full border-2 group-hover:border-[#0da2e7] group-hover:shadow-[0_0_15px_rgba(13,162,231,0.6)] transition-all duration-300 flex items-center justify-center relative'
                    style={{
                      backgroundColor: '#101c22',
                      borderColor: 'rgba(13,162,231,0.3)'
                    }}
                  >
                    <div className='absolute inset-0 rounded-full bg-[#0da2e7]/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                    <span className='material-symbols-outlined text-[#0da2e7] text-xl'>
                      domain
                    </span>
                  </div>
                </div>
                {/* Card (Right) */}
                <div className='pl-16 md:pl-0 md:w-[45%] w-full'>
                  <div
                    className='rounded-xl p-6 md:p-8 transform transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] group'
                    style={{
                      background:
                        'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      boxShadow: '0 4px 30px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div className='flex flex-col gap-3'>
                      <div className='flex items-center justify-between mb-2'>
                        <span className='px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-[#0da2e7] font-medium'>
                          Present
                        </span>
                        <span className='material-symbols-outlined text-gray-500 group-hover:text-[#0da2e7] transition-colors'>
                          arrow_outward
                        </span>
                      </div>
                      <div>
                        <h3 className='text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#0da2e7] transition-colors'>
                          Full Stack Web Developer
                        </h3>
                        <p className='text-base text-gray-400 font-medium'>
                          Freelance / Independent Projects
                        </p>
                      </div>
                      <p className='text-sm text-gray-400 leading-relaxed mb-4'>
                        Building full-stack web applications using the MERN
                        stack. Focused on scalable backend logic, clean UI with
                        Tailwind CSS, API development, authentication, and
                        real-world problem solving.
                      </p>
                      {/* Chips */}
                      <div className='flex flex-wrap gap-2'>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-[#61DAFB]'>
                            code
                          </span>
                          <span className='text-xs text-gray-300'>React</span>
                        </div>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-[#339933]'>
                            dns
                          </span>
                          <span className='text-xs text-gray-300'>Node.js</span>
                        </div>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-white'>
                            database
                          </span>
                          <span className='text-xs text-gray-300'>MongoDB</span>
                        </div>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-white'>
                            edit
                          </span>
                          <span className='text-xs text-gray-300'>
                            Tailwind
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className='group relative flex flex-row-reverse md:flex-row md:justify-between items-center w-full'>
                {/* Card (Left) */}
                <div className='pl-16 md:pl-0 md:pr-0 md:w-[45%] w-full'>
                  <div
                    className='rounded-xl p-6 md:p-8 transform transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] group md:text-right'
                    style={{
                      background:
                        'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      boxShadow: '0 4px 30px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div className='flex flex-col gap-3'>
                      <div className='flex items-center md:justify-end justify-between mb-2'>
                        <span className='md:hidden material-symbols-outlined text-gray-500 group-hover:text-[#0da2e7] transition-colors'>
                          arrow_outward
                        </span>
                        <span className='px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300 font-medium'>
                          2025 – PRESENT
                        </span>
                        <span className='hidden md:block material-symbols-outlined text-gray-500 group-hover:text-[#0da2e7] transition-colors ml-auto'>
                          arrow_outward
                        </span>
                      </div>
                      <div>
                        <h3 className='text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#0da2e7] transition-colors'>
                          Diploma Student — Computer Engineering
                        </h3>
                        <p className='text-base text-gray-400 font-medium'>
                          Government Polytechnic Bhuj
                        </p>
                      </div>
                      <p className='text-sm text-gray-400 leading-relaxed mb-4 md:ml-auto'>
                        Pursuing a diploma in Computer Engineering while
                        actively applying development skills through projects,
                        internships, and freelancing. Developing communication,
                        teamwork, and technical fundamentals.
                      </p>
                      {/* Chips */}
                      <div className='flex flex-wrap gap-2 md:justify-end'>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-[#F7DF1E]'>
                            code
                          </span>
                          <span className='text-xs text-gray-300'>
                            C programming
                          </span>
                        </div>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-[#CC6699]'>
                            palette
                          </span>
                          <span className='text-xs text-gray-300'>
                            Computer Fundamentals
                          </span>
                        </div>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-[#41B883]'>
                            widgets
                          </span>
                          <span className='text-xs text-gray-300'>
                            Teamwork
                          </span>
                        </div>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-[#41B883]'>
                            communication
                          </span>
                          <span className='text-xs text-gray-300'>
                            Communication
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Node */}
                <div className='absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20'>
                  <div
                    className='w-12 h-12 rounded-full border-2 group-hover:border-[#0da2e7] group-hover:shadow-[0_0_15px_rgba(13,162,231,0.6)] transition-all duration-300 flex items-center justify-center relative'
                    style={{
                      backgroundColor: '#101c22',
                      borderColor: 'rgba(13,162,231,0.3)'
                    }}
                  >
                    <div className='absolute inset-0 rounded-full bg-[#0da2e7]/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                    <span className='material-symbols-outlined text-gray-400 group-hover:text-white transition-colors text-xl'>
                      brush
                    </span>
                  </div>
                </div>
                {/* Spacer for Desktop Right */}
                <div className='hidden md:block md:w-[45%]' />
              </div>

              {/* Item 3 */}
              <div className='group relative flex md:justify-between items-center w-full'>
                {/* Spacer for Desktop Left */}
                <div className='hidden md:block md:w-[45%]' />
                {/* Center Node */}
                <div className='absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20'>
                  <div
                    className='w-12 h-12 rounded-full border-2 group-hover:border-[#0da2e7] group-hover:shadow-[0_0_15px_rgba(13,162,231,0.6)] transition-all duration-300 flex items-center justify-center relative'
                    style={{
                      backgroundColor: '#101c22',
                      borderColor: 'rgba(13,162,231,0.3)'
                    }}
                  >
                    <span className='material-symbols-outlined text-gray-400 group-hover:text-white transition-colors text-xl'>
                      design_services
                    </span>
                  </div>
                </div>
                {/* Card (Right) */}
                <div className='pl-16 md:pl-0 md:w-[45%] w-full'>
                  <div
                    className='rounded-xl p-6 md:p-8 transform transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] group'
                    style={{
                      background:
                        'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      boxShadow: '0 4px 30px rgba(0,0,0,0.1)'
                    }}
                  >
                   <div className='flex flex-col gap-3'>
                      <div className='flex items-center md:justify-end justify-between mb-2'>
                        <span className='md:hidden material-symbols-outlined text-gray-500 group-hover:text-[#0da2e7] transition-colors'>
                          arrow_outward
                        </span>
                        <span className='px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300 font-medium'>
                          Nov 2025
                        </span>
                        <span className='hidden md:block material-symbols-outlined text-gray-500 group-hover:text-[#0da2e7] transition-colors ml-auto'>
                          arrow_outward
                        </span>
                      </div>
                      <div>
                        <h3 className='text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#0da2e7] transition-colors'>
MERN Stack Developer Intern
                        </h3>
                        <p className='text-base text-gray-400 font-medium'>
                          CodeAlpha & Codec Technologies
                        </p>
                      </div>
                      <p className='text-sm text-gray-400 leading-relaxed mb-4 md:ml-auto'>
                      Worked as a full-stack intern on real-world projects including
e-commerce and social media platforms. Learned production workflows,
deadline-based delivery, and collaborative development practices.

                      </p>
                      {/* Chips */}
                      <div className='flex flex-wrap gap-2 md:justify-end'>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-orange-500'>
                            javascript
                          </span>
                          <span className='text-xs text-gray-300'>Nodejs</span>
                        </div>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-blue-500'>
                           code
                          </span>
                          <span className='text-xs text-gray-300'>React</span>
                        </div>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-blue-500'>
                           database
                          </span>
                          <span className='text-xs text-gray-300'>MongoDB</span>
                        </div>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-blue-500'>
                           hub
                          </span>
                          <span className='text-xs text-gray-300'>Git &amp; Github</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className='group relative flex flex-row-reverse md:flex-row md:justify-between items-center w-full'>
                {/* Card (Left) */}
                <div className='pl-16 md:pl-0 md:pr-0 md:w-[45%] w-full'>
                  <div
                    className='rounded-xl p-6 md:p-8 transform transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] group md:text-right'
                    style={{
                      background:
                        'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      boxShadow: '0 4px 30px rgba(0,0,0,0.1)'
                    }}
                  >
                     <div className='flex flex-col gap-3'>
                      <div className='flex items-center justify-between mb-2'>
                        <span className='px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300 font-medium'>
                          2024 – 2025
                        </span>
                        <span className='material-symbols-outlined text-gray-500 group-hover:text-[#0da2e7] transition-colors'>
                          arrow_outward
                        </span>
                      </div>
                      <div>
                        <h3 className='text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#0da2e7] transition-colors'>
                          Backend & Full Stack Learner
                        </h3>
                        <p className='text-base text-gray-400 font-medium'>
                          Self-Learning & Personal Projects
                        </p>
                      </div>
                      <p className='text-sm text-gray-400 leading-relaxed mb-4'>
                        Expanded from frontend into backend development. Built
                        REST APIs, handled authentication, database design, and
                        complete full-stack applications using Node.js and
                        MongoDB.
                      </p>
                      {/* Chips */}
                      <div className='flex flex-wrap gap-2'>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-pink-500'>
                            javascript
                          </span>
                          <span className='text-xs text-gray-300'>Node.js</span>
                        </div>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-blue-400'>
                            database
                          </span>
                          <span className='text-xs text-gray-300'>
                            MongoDB
                          </span>
                        </div>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-blue-400'>
                            code
                          </span>
                          <span className='text-xs text-gray-300'>
                           Express
                          </span>
                        </div>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-blue-400'>
                            token
                          </span>
                          <span className='text-xs text-gray-300'>
                            JWT
                          </span>
                        </div>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-blue-400'>
                           html
                          </span>
                          <span className='text-xs text-gray-300'>
                            EJS
                          </span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
                {/* Center Node */}
                <div className='absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20'>
                  <div
                    className='w-12 h-12 rounded-full border-2 group-hover:border-[#0da2e7] group-hover:shadow-[0_0_15px_rgba(13,162,231,0.6)] transition-all duration-300 flex items-center justify-center relative'
                    style={{
                      backgroundColor: '#101c22',
                      borderColor: 'rgba(13,162,231,0.3)'
                    }}
                  >
                    <span className='material-symbols-outlined text-gray-400 group-hover:text-white transition-colors text-xl'>
                      terminal
                    </span>
                  </div>
                </div>
                {/* Spacer for Desktop Right */}
                <div className='hidden md:block md:w-[45%]' />
              </div>

              {/* Item 5 */}
              <div className='group relative flex md:justify-between items-center w-full'>
                {/* Spacer for Desktop Left */}
                <div className='hidden md:block md:w-[45%]' />
                {/* Center Node */}
                <div className='absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20'>
                  <div
                    className='w-12 h-12 rounded-full border-2 group-hover:border-[#0da2e7] group-hover:shadow-[0_0_15px_rgba(13,162,231,0.6)] transition-all duration-300 flex items-center justify-center relative'
                    style={{
                      backgroundColor: '#101c22',
                      borderColor: 'rgba(13,162,231,0.3)'
                    }}
                  >
                    <span className='material-symbols-outlined text-gray-400 group-hover:text-white transition-colors text-xl'>
                      design_services
                    </span>
                  </div>
                </div>
                {/* Card (Right) */}
                <div className='pl-16 md:pl-0 md:w-[45%] w-full'>
                  <div
                    className='rounded-xl p-6 md:p-8 transform transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] group'
                    style={{
                      background:
                        'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      boxShadow: '0 4px 30px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div className='flex flex-col gap-3'>
                      <div className='flex items-center justify-between mb-2'>
                        <span className='px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-300 font-medium'>
                         Sep 2023
                        </span>
                        <span className='material-symbols-outlined text-gray-500 group-hover:text-[#0da2e7] transition-colors'>
                          arrow_outward
                        </span>
                      </div>
                      <div>
                        <h3 className='text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-[#0da2e7] transition-colors'>
                          Frontend Web Developer (Beginner)
                        </h3>
                        <p className='text-base text-gray-400 font-medium'>
                          Self-Learning

                        </p>
                      </div>
                      <p className='text-sm text-gray-400 leading-relaxed mb-4'>
                        Started web development journey with HTML, CSS, and JavaScript.
Built UI layouts and small interactive projects, forming a strong
foundation in frontend development.

                      </p>
                      {/* Chips */}
                      <div className='flex flex-wrap gap-2'>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-pink-500'>
                            html
                          </span>
                          <span className='text-xs text-gray-300'>HTML</span>
                        </div>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-blue-400'>
                            css
                          </span>
                          <span className='text-xs text-gray-300'>
                          CSS
                          </span>
                        </div>
                        <div
                          className='flex items-center gap-1 px-2 py-1 rounded-md border border-white/5'
                          style={{ backgroundColor: '#101c22' }}
                        >
                          <span className='material-symbols-outlined text-[16px] text-blue-400'>
                            javascript
                          </span>
                          <span className='text-xs text-gray-300'>
                            Javascript
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <a href="/developer-kush-resume.pdf" download>
          <div className='mt-24 w-full flex justify-center'>
            <button className='relative group flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-[#0da2e7]/10 border border-[#0da2e7]/40 text-white gap-3 transition-all duration-300 hover:bg-[#0da2e7]/20 hover:border-[#0da2e7] hover:shadow-[0_0_30px_rgba(13,162,231,0.3)]'>
              <span className='absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]' />
              <span className='material-symbols-outlined text-[#0da2e7] group-hover:text-white transition-colors'>
                download
              </span>
              <span className='font-bold text-lg tracking-wide group-hover:[text-shadow:0_0_10px_rgba(13,162,231,0.5)] transition-all'>
                Download Resume
              </span>
            </button>
          </div>
          </a>
        </main>

        {/* Footer */}
      </div>

      {/* Shimmer keyframes */}
    </div>
  )
}

export default ExperiencePage
