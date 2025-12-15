import React from 'react'

const CertificatesPage = () => {
  return (
    <div
      id='certificate'
      className='dark'
      style={{
        fontFamily: '"Space Grotesk", "Noto Sans", sans-serif',
        backgroundColor: '#050a0f', // background-dark
        color: 'white'
      }}
    >
      {/* Top Navigation */}

      <main className='relative min-h-screen pt-20 flex flex-col antialiased overflow-x-hidden selection:bg-[#0d93f2] selection:text-white'>
        {/* Background Elements */}
        <div className='fixed inset-0 z-0 pointer-events-none'>
          {/* Grid */}
          <div
            className='absolute inset-0 opacity-[0.03] bg-grid-mask'
            style={{
              backgroundImage:
                'linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          />
          {/* Glows */}
          <div
            className='absolute top-[-20%] left-[-10%] rounded-full blur-[120px] animate-float'
            style={{
              width: '600px',
              height: '600px',
              backgroundColor: 'rgba(13,147,242,0.1)' // primary/10
            }}
          />
          <div
            className='absolute bottom-[-10%] right-[-5%] rounded-full blur-[100px] animate-float-delayed'
            style={{
              width: '500px',
              height: '500px',
              backgroundColor: 'rgba(0,240,255,0.05)' // accent-cyan/5
            }}
          />
          {/* Scanlines */}
          <div className='scanlines' />
        </div>

        <div className='relative z-10 flex-1 flex flex-col items-center px-6 py-16 md:py-24 max-w-7xl mx-auto w-full'>
          {/* Hero Section */}
          <div className='text-center max-w-3xl mx-auto mb-20 animate-float'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0d93f2]/10 border border-[#0d93f2]/20 text-[#0d93f2] text-xs font-bold tracking-widest uppercase mb-6'>
              <span className='w-1.5 h-1.5 rounded-full bg-[#0d93f2] animate-pulse' />
              Internships & Certifications
            </div>
            <h1 className='text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter mb-6 drop-shadow-2xl'>
              ACCREDITATIONS
            </h1>
            <p className='text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto'>
              Industry-recognized certifications and internships that validate
              my full-stack development skills, cloud fundamentals, and hands-on
              experience through real projects and professional training.
            </p>

            {/* Search Bar */}
          </div>

          {/* Certificates Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full perspective-1000'>
            {/* Card 1:  */}
            <div className='glass-card group relative flex flex-col rounded-2xl p-6 h-full overflow-hidden cursor-pointer'>
              <a
              target='_blank'
              href="/certificates/html-certi.jpg">
              <div className='absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500'>
                <span className='material-symbols-outlined text-white/50 text-2xl group-hover:text-[#0d93f2]'>
                  open_in_new
                </span>
              </div>
                </a>
              <div className='size-14 rounded-xl bg-[#232f3e] flex items-center justify-center mb-6 shadow-lg border border-white/5 group-hover:border-[#0d93f2]/50 transition-colors'>
                <img
                  alt='html'
                  className='w-8 h-8 opacity-80 group-hover:opacity-100 transition-opacity'
                  src='/certificates/html-certi.jpg'
                />
              </div>
              <div className='flex-1'>
                <div className='text-[#00f0ff] text-xs font-bold tracking-wider mb-2'>
                  Frontend Development
                </div>
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-[#0d93f2] transition-colors'>
                  HTML5 Fundamentals
                </h3>
                <p className='text-gray-400 text-sm leading-relaxed line-clamp-2'>
                  Completed structured training focused on semantic HTML,
                  accessibility, and building clean, well-structured web
                  layouts.
                </p>
              </div>
              <div className='mt-6 pt-6 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-500'>
                <span>Codeliber (Learning App)</span>
                <span className='text-gray-400'>Issued: Jul 2025</span>
              </div>
              {/* Hover Glow Effect */}
              <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-[#0d93f2]/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
            </div>

            {/* Card 2:  */}
            <div className='glass-card group relative flex flex-col rounded-2xl p-6 h-full overflow-hidden cursor-pointer'>
              <a
              target='_blank' 
              href="/certificates/css-certi.jpg">
              <div className='absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500'>
                <span className='material-symbols-outlined text-white/50 text-2xl group-hover:text-[#0d93f2]'>
                  open_in_new
                </span>
              </div>
              </a>
              <div className='size-14 rounded-xl bg-white flex items-center justify-center mb-6 shadow-lg border border-white/5 group-hover:border-blue-400 transition-colors'>
                <img
                  alt='css'
                  className='w-8 h-8'
                  src='/certificates/css-certi.jpg'
                />
              </div>
              <div className='flex-1'>
                <div className='text-blue-400 text-xs font-bold tracking-wider mb-2'>
                  Frontend Development
                </div>
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors'>
                  CSS3 Styling & Layouts
                </h3>
                <p className='text-gray-400 text-sm leading-relaxed line-clamp-2'>
                  Learned modern CSS concepts including responsive layouts,
                  flexbox, grid systems, and UI styling best practices.
                </p>
              </div>
              <div className='mt-6 pt-6 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-500'>
                <span>Codeliber (Learning App)</span>
                <span className='text-gray-400'>Issued: Jul 2025</span>
              </div>
              <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
            </div>

            {/* Card 3:  */}
            <div className='glass-card group relative flex flex-col rounded-2xl p-6 h-full overflow-hidden cursor-pointer'>
             
             <a
             target='_blank'
             href="/certificates/js-certi.jpg">
              <div className='absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500'>
                <span className='material-symbols-outlined text-white/50 text-2xl group-hover:text-[#0d93f2]'>
                  open_in_new
                </span>
              </div>
              </a>
              <div className='size-14 rounded-xl bg-[#1877F2] flex items-center justify-center mb-6 shadow-lg border border-white/5 group-hover:border-blue-300 transition-colors'>
                <span className='material-symbols-outlined text-white text-3xl'>
                  code
                </span>
              </div>
              <div className='flex-1'>
                <div className='text-indigo-400 text-xs font-bold tracking-wider mb-2'>
                  Frontend Development
                </div>
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors'>
                  JavaScript Programming (ES6)
                </h3>
                <p className='text-gray-400 text-sm leading-relaxed line-clamp-2'>
                  Gained strong fundamentals in JavaScript including variables,
                  functions, DOM manipulation, and core programming logic.
                </p>
              </div>
              <div className='mt-6 pt-6 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-500'>
                <span>Codeliber (Learning App)</span>
                <span className='text-gray-400'>Issued: Jul 2025</span>
              </div>
              <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
            </div>

            {/* Card 4:  */}
            <div className='glass-card group relative flex flex-col rounded-2xl p-6 h-full overflow-hidden cursor-pointer'>
             <a
             target='_blank'
             href="/certificates/codeAlpha-certificate.pdf">
              <div className='absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500'>
                <span className='material-symbols-outlined text-white/50 text-2xl group-hover:text-[#0d93f2]'>
                  open_in_new
                </span>
              </div>
              </a>
              <div className='size-14 rounded-xl bg-red-900/40 flex items-center justify-center mb-6 shadow-lg border border-white/5 group-hover:border-red-500 transition-colors'>
                <span className='material-symbols-outlined text-red-400 text-3xl'>
                  shield_lock
                </span>
              </div>
              <div className='flex-1'>
                <div className='text-red-400 text-xs font-bold tracking-wider mb-2'>
                  Full Stack Development
                </div>
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors'>
                  Full Stack Web Developer Intern
                </h3>
                <p className='text-gray-400 text-sm leading-relaxed line-clamp-2'>
                  Worked as a full-stack intern and successfully built complete
                  e-commerce and social media web applications within deadlines.
                  Received offer letter, completion certificate, and Letter of
                  Recommendation.
                </p>
              </div>
              <div className='mt-6 pt-6 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-500'>
                <span>CodeAlpha</span>
                <span className='text-gray-400'>Issued: Nov 2025</span>
              </div>
              <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-red-500/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
            </div>

            {/* Card 5: */}
            <div className='glass-card group relative flex flex-col rounded-2xl p-6 h-full overflow-hidden cursor-pointer'>
               <a
             target='_blank'
             href="/certificates/ISTE.pdf">
              <div className='absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500'>
                <span className='material-symbols-outlined text-white/50 text-2xl group-hover:text-[#0d93f2]'>
                  open_in_new
                </span>
              </div>
              </a>
              <div className='size-14 rounded-xl bg-[#326ce5]/20 flex items-center justify-center mb-6 shadow-lg border border-white/5 group-hover:border-[#326ce5] transition-colors'>
                <span className='material-symbols-outlined text-[#326ce5] text-3xl'>
                  deployed_code
                </span>
              </div>
              <div className='flex-1'>
                <div className='text-[#326ce5] text-xs font-bold tracking-wider mb-2'>
                  Professional Membership
                </div>
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-[#326ce5] transition-colors'>
                  Student Member – ISTE
                </h3>
                <p className='text-gray-400 text-sm leading-relaxed line-clamp-2'>
                  Recognized student member of ISTE through Government
                  Polytechnic Bhuj, supporting technical growth, innovation, and
                  professional development.
                </p>
              </div>
              <div className='mt-6 pt-6 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-500'>
                <span>Indian Society for Technical Education (ISTE)</span>
                <span className='text-gray-400'>Issued: 2025</span>
              </div>
              <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-[#326ce5]/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
            </div>
            {/* Card 6:*/}
            <div className='glass-card group relative flex flex-col rounded-2xl p-6 h-full overflow-hidden cursor-pointer'>
               <a
             target='_blank'
             href="/certificates/codec-certificate.pdf">
              <div className='absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500'>
                <span className='material-symbols-outlined text-white/50 text-2xl group-hover:text-[#0d93f2]'>
                  open_in_new
                </span>
              </div>
              </a>
              <div className='size-14 rounded-xl bg-[#326ce5]/20 flex items-center justify-center mb-6 shadow-lg border border-white/5 group-hover:border-[#326ce5] transition-colors'>
                <span className='material-symbols-outlined text-[#326ce5] text-3xl'>
                  deployed_code
                </span>
              </div>
              <div className='flex-1'>
                <div className='text-[#326ce5] text-xs font-bold tracking-wider mb-2'>
                  MERN Stack Development
                </div>
                <h3 className='text-xl font-bold text-white mb-2 group-hover:text-[#326ce5] transition-colors'>
                  MERN Stack Developer Intern
                </h3>
                <p className='text-gray-400 text-sm leading-relaxed line-clamp-2'>
                  Trained on real-world MERN stack workflows and project
                  structures. Improved backend logic, API handling, and
                  development discipline. Received training certificate, offer
                  letter, completion certificate, and LOR.
                </p>
              </div>
              <div className='mt-6 pt-6 border-t border-white/5 flex justify-between items-center text-xs font-mono text-gray-500'>
                <span>Codec Technologies</span>
                <span className='text-gray-400'>Issued:Dec 2025</span>
              </div>
              <div className='absolute -bottom-10 -right-10 w-40 h-40 bg-[#326ce5]/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
            </div>

            {/* Card 6: Placeholder */}
            {/* <div className='glass-card group relative flex flex-col items-center justify-center rounded-2xl p-6 h-full min-h-[280px] border-dashed border-2 border-white/10 hover:border-[#0d93f2]/40 bg-transparent hover:bg-white/[0.02] cursor-pointer transition-all'>
              <div className='size-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
                <span className='material-symbols-outlined text-gray-500 group-hover:text-[#0d93f2] text-3xl transition-colors'>
                  add
                </span>
              </div>
              <h3 className='text-lg font-bold text-gray-400 group-hover:text-white transition-colors'>
                View All Credentials
              </h3>
              <p className='text-gray-600 text-sm mt-2'>
                See full history on LinkedIn
              </p>
            </div> */}
          </div>

          {/* Featured / Highlight Section */}
          <div className='w-full mt-24'>
            <div className='glass-card rounded-2xl p-1 overflow-hidden relative'>
              <div className='relative bg-[#0f161e] rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 overflow-hidden'>
                {/* Content */}
                <div className='flex-1 relative z-10'>
                  <div className='flex items-center gap-2 mb-4'>
                    <span className='px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/30 uppercase tracking-wider'>
                      GCP
                    </span>
                    <span className='px-2 py-0.5 rounded text-[10px] font-bold bg-white/5 text-gray-400 border border-white/10 uppercase tracking-wider'>
                      Cloud
                    </span>
                  </div>
                  <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                    Google Cloud Platform — Skill Badges & Learning Progress
                  </h2>
                  <p className='text-gray-400 text-base mb-8 max-w-xl'>
                    Actively learning cloud computing fundamentals through
                    Google Cloud Skill Boost. Earned multiple hands-on badges by
                    completing labs on cloud infrastructure, services, and
                    deployment concepts. This ongoing journey strengthens my
                    understanding of scalable systems, cloud hosting, and
                    real-world production environments.
                  </p>
                  <div className='flex flex-wrap gap-4'>
                    <a target="_blank" href="https://www.skills.google/public_profiles/19b83dbf-4185-4074-94d3-5273184803d2">
                    <button className='bg-[#0d93f2] hover:bg-[#0d93f2]/90 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(13,147,242,0.4)] transition-all hover:-translate-y-1'>
                      <span className='material-symbols-outlined text-lg'>
                        verified
                      </span>
                      View GCP Badges
                    </button>
                    </a>
                  </div>
                </div>

                {/* Graphic */}
                <div className='relative w-full md:w-1/3 aspect-video md:aspect-square flex items-center justify-center z-10'>
                  <div className='absolute inset-0 bg-gradient-to-tr from-[#0d93f2]/20 to-[#00f0ff]/20 rounded-full blur-[80px]' />
                  <div className='relative w-full h-full bg-[#1a2632] rounded-xl border border-white/10 shadow-2xl flex items-center justify-center p-8 transform md:rotate-6 hover:rotate-0 transition-transform duration-500'>
                    <div className="w-full h-full border border-dashed border-white/20 rounded-lg flex flex-col items-center justify-center gap-4 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                      <img
                        alt='GCP logo'
                        className='w-20 opacity-90'
                        src='https://tse2.mm.bing.net/th/id/OIP.cynx13E0y0LJsT8uXG4_9wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
                      />
                      <div className='text-center'>
                        <p className='text-white font-bold text-lg'>
                          Developer
                        </p>
                        <p className='text-[#0d93f2] text-sm font-bold tracking-widest uppercase'>
                          Student
                        </p>
                      </div>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity pointer-events-none rounded-xl' />
                  </div>
                </div>

                {/* BG Decoration */}
                <div className='absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#0d93f2]/5 to-transparent pointer-events-none' />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Modal Backdrop (hidden by default) */}
      <div
        id='cert-modal'
        className='fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm hidden'
      >
        <div className='relative w-full max-w-4xl mx-4 bg-[#0f161e] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row'>
          <button className='absolute top-4 right-4 text-gray-400 hover:text-white z-20'>
            <span className='material-symbols-outlined'>close</span>
          </button>
          <div className='w-full md:w-1/2 bg-[#050a0f] p-8 flex items-center justify-center relative overflow-hidden'>
            <div
              className='absolute inset-0 opacity-10'
              style={{
                backgroundImage:
                  'linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />
            <div className='relative w-full aspect-[4/3] bg-white rounded shadow-lg p-8 flex flex-col items-center justify-center text-black'>
              <div className='border-4 border-double border-gray-200 w-full h-full p-4 flex flex-col items-center justify-center text-center'>
                <div className='text-2xl font-serif font-bold text-gray-800 mb-2'>
                  Certificate of Completion
                </div>
                <div className='text-sm text-gray-500 mb-4'>
                  This is to certify that
                </div>
                <div className='text-xl font-bold text-blue-900 border-b border-gray-300 pb-1 mb-4 w-3/4'>
                  Alex Developer
                </div>
                <div className='text-sm text-gray-500'>
                  Has successfully completed
                </div>
                <div className='text-lg font-bold text-gray-800 mt-2'>
                  AWS Solutions Architect
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 p-8 flex flex-col justify-center'>
            <div className='flex items-center gap-3 mb-2'>
              <img
                alt='AWS Logo Small'
                className='w-6 opacity-70'
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuC6tKgVcHOvR2ITn0WPkjCCn-AtGI9VRLSSLnxOjKUFmhoyySsEHacbPGLYqLdG2pES7Yuk_ScJk1ibdkoS0CH9F28SiBMBJtLUUGTdAG0EicmQ9hqxzsEQMDtGi-WIH5OmpNlSox4MstP2KmsFf_1R37kVMfTNhR6SeuXXYh4c485clvM0jQbzC2Ki6rL2AEmBOUzG7L5WAQYvICkyqbZnT8K40qnG_TCVyUMJ6iYH2m3UoIVdZ73uqR2h6IvEFrJ-zJia30cG8L0'
              />
              <span className='text-[#0d93f2] text-sm font-bold tracking-wider'>
                AMAZON WEB SERVICES
              </span>
            </div>
            <h2 className='text-2xl font-bold text-white mb-4'>
              AWS Certified Solutions Architect – Associate
            </h2>
            <p className='text-gray-400 text-sm mb-6 leading-relaxed'>
              Earners of this certification have a comprehensive understanding
              of AWS services and technologies. They demonstrated the ability to
              build secure and robust solutions using architectural design
              principles based on customer requirements.
            </p>
            <div className='grid grid-cols-2 gap-4 mb-8'>
              <div className='bg-white/5 rounded-lg p-3 border border-white/5'>
                <div className='text-gray-500 text-xs uppercase mb-1'>
                  Issued Date
                </div>
                <div className='text-white text-sm font-mono'>Oct 24, 2023</div>
              </div>
              <div className='bg-white/5 rounded-lg p-3 border border-white/5'>
                <div className='text-gray-500 text-xs uppercase mb-1'>
                  Expiration
                </div>
                <div className='text-white text-sm font-mono'>Oct 24, 2026</div>
              </div>
              <div className='bg-white/5 rounded-lg p-3 border border-white/5 col-span-2'>
                <div className='text-gray-500 text-xs uppercase mb-1'>
                  Validation ID
                </div>
                <div className='text-white text-sm font-mono select-all'>
                  AWS-BNA-12345678
                </div>
              </div>
            </div>
            <div className='flex gap-4'>
              <button className='flex-1 bg-[#0d93f2] hover:bg-[#0d93f2]/90 text-white py-3 rounded-lg text-sm font-bold shadow-lg shadow-[#0d93f2]/20 transition-all'>
                Verify Online
              </button>
              <button className='flex-1 bg-transparent border border-white/20 hover:bg-white/5 text-white py-3 rounded-lg text-sm font-bold transition-all'>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Styles ported from original CSS */}
    </div>
  )
}

export default CertificatesPage
