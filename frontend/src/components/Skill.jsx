// Note: Add `import React from 'react'` if your environment requires it
// Also import './styles.css' for the CSS below
import "../style/skill.css"
export default function Skill() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-dark p-4 sm:p-6 lg:p-8 overflow-hidden" id="skill">
      <div className="cosmic-web-bg">
        <div className="nebula"></div>
      </div>
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
          <span className="text-primary">03.</span> My Cosmic Web of Skills
        </h2>
        <p className="mt-4 max-w-2xl text-base text-gray-400 md:text-lg">
        🌠  Orbiting through front-end, back-end, and everything in between.
        </p>
        <div className="relative mt-16 w-full aspect-[16/10] lg:aspect-video cosmic-web">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="progressGradient" x1="0%" x2="100%" y1="0%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8"></stop>
                <stop offset="100%" stopColor="#0db9f2"></stop>
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur result="blur" stdDeviation="3"></feGaussianBlur>
                <feMerge>
                  <feMergeNode in="blur"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>
            <g stroke="rgba(13, 185, 242, 0.2)" strokeWidth="0.5">
              <line className="connection-line related" x1="100" x2="250" y1="250" y2="125"></line>
              <line className="connection-line related" x1="100" x2="250" y1="250" y2="250"></line>
              <line className="connection-line related" x1="100" x2="250" y1="250" y2="375"></line>
              <line className="connection-line" x1="250" x2="425" y1="125" y2="75"></line>
              <line className="connection-line" x1="250" x2="425" y1="125" y2="175"></line>
              <line className="connection-line" x1="250" x2="425" y1="250" y2="225"></line>
              <line className="connection-line" x1="250" x2="425" y1="250" y2="300"></line>
              <line className="connection-line" x1="250" x2="425" y1="375" y2="350"></line>
              <line className="connection-line" x1="250" x2="425" y1="375" y2="425"></line>
              <line className="connection-line" x1="425" x2="575" y1="75" y2="75"></line>
              <line className="connection-line" x1="425" x2="575" y1="175" y2="75"></line>
              <line className="connection-line" x1="425" x2="575" y1="225" y2="250"></line>
              <line className="connection-line" x1="425" x2="575" y1="300" y2="250"></line>
              <line className="connection-line" x1="425" x2="575" y1="350" y2="400"></line>
              <line className="connection-line" x1="425" x2="575" y1="425" y2="400"></line>
              <line className="connection-line related" x1="575" x2="700" y1="75" y2="250"></line>
              <line className="connection-line related" x1="575" x2="700" y1="250" y2="250"></line>
              <line className="connection-line related" x1="575" x2="700" y1="400" y2="250"></line>
            </g>
          </svg>

          <SkillNode
            left="calc(12.5% - 40px)"
            top="calc(50% - 40px)"
            delay="0.1s"
            size="h-20 w-20"
            label="Core"
            percent="95%"
            progress={14.15}
          />
          <SkillNode
            left="calc(31.25% - 35px)"
            top="calc(25% - 35px)"
            delay="0.3s"
            size="h-[70px] w-[70px]"
            label="Frontend"
            percent="90%"
            progress={28.3}
          />
          <SkillNode
            left="calc(31.25% - 35px)"
            top="calc(50% - 35px)"
            delay="0.2s"
            size="h-[70px] w-[70px]"
            label="Backend"
            percent="88%"
            progress={33.96}
          />
          <SkillNode
            left="calc(31.25% - 35px)"
            top="calc(75% - 35px)"
            delay="0.4s"
            size="h-[70px] w-[70px]"
            label="Database"
            percent="85%"
            progress={42.45}
          />
          <SkillNode
            left="calc(53.125% - 28px)"
            top="calc(15% - 28px)"
            delay="0.6s"
            size="h-14 w-14"
            label="React"
            percent="92%"
            progress={22.64}
          />
          <SkillNode
            left="calc(53.125% - 28px)"
            top="calc(35% - 28px)"
            delay="0.5s"
            size="h-14 w-14"
            label="Next.js"
            percent="90%"
            progress={28.3}
          />
          <SkillNode
            left="calc(53.125% - 28px)"
            top="calc(60% - 28px)"
            delay="0.7s"
            size="h-14 w-14"
            label="Node.js"
            percent="88%"
            progress={33.96}
          />
          <SkillNode
            left="calc(53.125% - 28px)"
            top="calc(85% - 28px)"
            delay="0.8s"
            size="h-14 w-14"
            label="MongoDB"
            percent="88%"
            progress={33.96}
          />
          <SkillNode
            left="calc(71.875% - 35px)"
            top="calc(15% - 35px)"
            delay="0.9s"
            size="h-[70px] w-[70px]"
            label="Frameworks"
            percent="90%"
            progress={28.3}
          />
          <SkillNode
            left="calc(71.875% - 35px)"
            top="calc(50% - 35px)"
            delay="1s"
            size="h-[70px] w-[70px]"
            label="Languages"
            percent="92%"
            progress={22.64}
          />
          <SkillNode
            left="calc(71.875% - 35px)"
            top="calc(80% - 35px)"
            delay="1.1s"
            size="h-[70px] w-[70px]"
            label="Tools"
            percent="88%"
            progress={33.96}
          />
          <SkillNode
            left="calc(87.5% - 40px)"
            top="calc(50% - 40px)"
            delay="1.2s"
            size="h-20 w-20"
            label="Expertise"
            percent="92%"
            progress={22.64}
          />
        </div>
      </div>
    </div>
  )
}

// Component for each skill node
function SkillNode({ left, top, delay, size, label, percent, progress }) {
  return (
    <div
      className="skill-node absolute"
      style={{
        left,
        top,
        animationDelay: delay,
      }}
    >
      <svg className={size} viewBox="0 0 100 100">
        <circle className="supernova-wave" cx="50" cy="50" fill="none" r="15" stroke="#0db9f2" strokeWidth="2"></circle>
        <circle cx="50" cy="50" fill="rgba(13, 185, 242, 0.05)" r="45" stroke="rgba(13, 185, 242, 0.1)" strokeWidth="1"></circle>
        <circle
          className="plasma-ring"
          cx="50"
          cy="50"
          fill="transparent"
          r="45"
          stroke="url(#progressGradient)"
          strokeDasharray="283"
          strokeLinecap="round"
          strokeWidth="3"
          style={{ '--progress': progress }}
          transform="rotate(-90 50 50)"
        ></circle>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`font-bold text-white ${size.includes('h-20') ? 'text-sm' : 'text-xs'}`}>{label}</span>
        <span className={`${size.includes('h-20') ? 'text-xs' : 'text-[10px]'} text-primary`}>{percent}</span>
      </div>
    </div>
  )
}
