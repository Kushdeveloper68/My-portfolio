import React from "react";
import "../style/about.css";

export default function About() {
  return (
    <div
      className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden font-display"
      style={{
        backgroundImage:
          "radial-gradient(circle at top left, rgba(13, 185, 242, 0.1), transparent 30%), radial-gradient(circle at bottom right, rgba(13, 185, 242, 0.1), transparent 30%)",
        backgroundColor: "#101e22"
      }}
      id="about"
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="relative flex flex-1 justify-center py-16 px-4 sm:px-6 lg:px-8">
          {/* Animated floating particles */}
          <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
            <div
              className="particle"
              style={{
                top: "20%",
                left: "80%",
                animationDuration: "12s",
                animationDelay: "-2s",
                "--end-x": "-15vw",
                "--end-y": "-20vh"
              }}
            />
            <div
              className="particle"
              style={{
                top: "50%",
                left: "10%",
                animationDuration: "9s",
                animationDelay: "-5s",
                "--end-x": "10vw",
                "--end-y": "15vh"
              }}
            />
            <div
              className="particle"
              style={{
                top: "80%",
                left: "90%",
                animationDuration: "15s",
                animationDelay: "-1s",
                "--end-x": "-8vw",
                "--end-y": "12vh"
              }}
            />
            <div
              className="particle"
              style={{
                top: "90%",
                left: "30%",
                animationDuration: "8s",
                animationDelay: "-8s",
                "--end-x": "12vw",
                "--end-y": "-18vh"
              }}
            />
            <div
              className="particle"
              style={{
                top: "10%",
                left: "25%",
                animationDuration: "18s",
                animationDelay: "-12s",
                "--end-x": "-10vw",
                "--end-y": "25vh"
              }}
            />
          </div>

          <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1">
            <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16 items-center">
              {/* Portrait Card */}
              <div
                className="md:col-span-2 flex justify-center animate-fadeIn"
                style={{ "--delay": "0.2s" }}
              >
                <div className="relative w-full max-w-sm p-2 group">
                  <div className="absolute inset-0 rounded-lg bg-[#0db9f2] opacity-20 blur-xl transition-all duration-500 group-hover:opacity-40 group-hover:blur-2xl"></div>
                  <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-[#0db9f2]/20 bg-[#101e22]/50 backdrop-blur-sm shadow-[0_0_15px_rgba(13,185,242,0.3)] animate-pulseGlow">
                    <div
                      className="w-full h-full bg-center bg-no-repeat bg-cover"
                      style={{
                        backgroundImage:
                          'url("/profilepic.jpg")'
                      }}
                      data-alt="A stylized portrait of Developer Kush in a futuristic setting."
                    />
                    <div className="hologram-scanline"></div>
                    <div className="absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-300 group-hover:border-[#0db9f2]"></div>
                  </div>
                </div>
              </div>
              {/* About Content */}
              <div className="md:col-span-3 flex flex-col">
                <h2
                  className="text-3xl font-bold leading-tight tracking-tighter text-gray-900 dark:text-white sm:text-4xl animate-fadeIn"
                  style={{ "--delay": "0.4s" }}
                >
                  <span className="text-[#0db9f2]">01.</span> About Me
                </h2>
                <div className="mt-6 space-y-4 text-base font-normal leading-relaxed text-gray-600 dark:text-gray-300">
                  <p className="animate-fadeIn" style={{ "--delay": "0.6s" }}>
                    Hey there! I’m Kush Pandit, a passionate and self-driven <span
                      className="transition-all duration-300 hover:text-[#0db9f2] hover:drop-shadow-[0_0_8px_rgba(13,185,242,0.8)]"
                    > Full Stack Web Developer currently pursuing a Diploma in Computer Engineering.</span>
                     I love transforming ideas into interactive, fast, and visually stunning web applications.
                     From designing sleek user interfaces to building scalable backend systems — I enjoy every step of the development process.
                    
                  </p>
                  <p className="animate-fadeIn" style={{ "--delay": "0.8s" }}>
                    My journey in coding started with curiosity and quickly turned into a full-blown obsession. 
                    I’ve worked with technologies like <span
                      className="transition-all duration-300 hover:text-[#0db9f2] hover:drop-shadow-[0_0_8px_rgba(13,185,242,0.8)]"
                    > HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and SQL,</span> and
                     I’m constantly exploring new tools and frameworks to push my limits.
                  </p>
                  <p className="animate-fadeIn" style={{ "--delay": "1s" }}>
                    Right now, I’m focused on building modern web projects, improving my UI/UX design sense, 
                    and preparing to start my freelancing journey to turn my skills into real-world impact.
                    When I’m not coding, you’ll probably find me <span
                      className="transition-all duration-300 hover:text-[#0db9f2] hover:drop-shadow-[0_0_8px_rgba(13,185,242,0.8)]"
                    > exploring tech blogs, playing games, or brainstorming my next big project.
                    </span>
                  </p>
                </div>
                {/* Skills Pills */}
                <div className="mt-8 flex flex-wrap gap-3 group/skills animate-fadeIn" style={{ "--delay": "1.2s" }}>
                  {[
                    "Frontend",
                    "Backend",
                    "Database",
                    "React",
                    "Node.js",
                    "MongoDB"
                  ].map((skill, idx) => (
                    <div
                      key={skill}
                      className="relative flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full border border-[#0db9f2]/30 bg-[#0db9f2]/10 px-4 transition-all duration-300 ease-out hover:scale-110 hover:!opacity-100 opacity-70"
                    >
                      <div className="absolute -inset-px rounded-full border-2 border-transparent transition-all duration-300 hover:border-[#0db9f2] hover:shadow-[0_0_15px_rgba(13,185,242,0.7),inset_0_0_10px_rgba(13,185,242,0.5)]"></div>
                      <p className="text-sm font-medium leading-normal text-[#0db9f2]">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
