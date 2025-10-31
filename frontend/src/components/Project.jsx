import React, { useRef } from "react";
import "../style/project.css";

const projects = [
  {
    name: "IP tracker website",
    description: "The IP Tracker Website is a simple and efficient tool that allows users to track and retrieve information about IP addresses. This website leverages the IPInfo API to gather details about a user's IP address, including location data such as latitude, longitude, and city. The application also displays the retrieved location on a map.",
    image: "/iptracker.webp",
    text:"Live demo",
    live: "https://ip-tracker-q18v.onrender.com",
    code: "https://github.com/Kushdeveloper68/Ip-tracker-website-"
  },
  {
    name: "Github Explorer",
    description: "A modern and beautifully designed GitHub Explorer built with Vite + React. This project allows users to search any GitHub username and view their profile details, repositories, and starred repositories using the official GitHub REST API.",
    image: "/github.png",
    text:"Live demo",
    live: "https://github-explorer-git-main-kushdeveloper68s-projects.vercel.app/",
    code: "https://github.com/Kushdeveloper68/Own-Github-Explorer"
  },
  {
    name: "Worker Manager",
    description: "A full-stack worker management system built with React (Vite), Node.js, and MongoDB. This project allows organizations or individuals to manage workers efficiently with features like email OTP-based signup, worker records management, and future capabilities like profile images and filtering by date/profession.",
    image: "/workerproject.png",
    text:"Live demo",
    live: "https://worker-manager.onrender.com/",
    code: "https://github.com/Kushdeveloper68/worker-project"
  },
  {
    name: "Portfolio Website",
    description: "My personal portfolio site built with React.js and Tailwind CSS, showcasing my journey into modern web development.",
    image: "/portfolioimage.png",
    text:"Page is live",
    live: "#",
    code: "#"
  },
  {
    name: "Attendence Home",
    description: "attendence-home is a robust, full-stack attendance solution designed to streamline and digitally secure attendance workflows at educational institutions. With role-based web apps for students, teachers, and admins, the project builds a QR-scanning, token-secured, real-time attendance management system.",
    image: "/studentpage.png",
    text:"No Live demo",
    code: "https://github.com/Kushdeveloper68/attendence-home"
  },
  {
    name: "React Todo",
    description: "A simple, responsive Todo App built using React.js and Tailwind CSS. This project is part of my React learning journey following the amazing tutorials by Hitesh Choudhary on his Chai aur Code YouTube channel — along with my own improvements.",
    image: "/todo.png",
    text:"No Live demo",
    code: "https://github.com/Kushdeveloper68/React-Todo"
  },
  {
    name: "Currency Convertor",
    description: "A simple and functional currency converter built using React, custom hooks, and live exchange rates from Fawaz Ahmed's Currency API. This tool allows users to convert between INR and other currencies, with an intuitive swap function and a minimal UI design.",
    image: "/currencyconverterimage.jpeg",
    text:"No Live demo",
    code: "https://github.com/Kushdeveloper68/currency-converter-using-react-"
  }
];

function ProjectCard({ project, delay }) {
  const cardRef = useRef();

  // Mouse move for glow effect
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div className="project-card-wrapper animate-fade-in-zoom-out"
      style={{ animationDelay: `${delay}ms` }}
      onMouseMove={handleMouseMove}
    >
      <div className="project-card glass-card flex h-full flex-col gap-4 rounded-xl p-6" ref={cardRef}>
        <div className="overflow-hidden rounded-lg">
          <div
            className="project-thumbnail w-full aspect-video bg-cover bg-center"
            style={{ backgroundImage: `url('${project.image}')` }}
            data-alt={`Screenshot of ${project.name}`}
          ></div>
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <h3 className="text-white text-xl font-bold leading-normal">{project.name}</h3>
          <p className="text-[#9cb2ba] text-sm font-normal leading-normal flex-grow">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0db9f2] text-[#101e22] text-sm font-bold leading-normal tracking-[0.015em] glow-button"
          >
            <span className="truncate">{project.text}</span>
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#283539] text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-[#3a4c52] glow-button"
          >
            <span className="truncate">View Code</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Project() {
  return (
    <div className="min-h-screen w-full bg-[#f5f8f8] dark:bg-[#101e22] text-white font-display selection:bg-[#0db9f2]/30" id="project">
      <main className="flex h-full grow flex-col items-center">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col items-center mb-12 sm:mb-16 section-header-visible">
            <h2 className="text-3xl font-bold tracking-[-0.015em] sm:text-4xl md:text-5xl text-white animated-underline animated-underline-visible">
              <span className="text-primary">01.</span> My Projects
            </h2>
            <p className="mt-4 max-w-2xl text-center text-base text-[#9cb2ba] sm:text-lg">
              A selection of my work. I'm always looking for new challenges and opportunities to learn.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.name} project={project} delay={i * 150} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
