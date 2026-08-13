import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Cat,
  Activity,
  GitBranch,
  Terminal,
  Search,
  Palette,
  Code2,
  Bug,
  Rocket,
  Headphones,
} from 'lucide-react';

const P = '#0da2e7';
const GITHUB_USER = 'Kushdeveloper68';

const PROCESS_STEPS = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    desc: 'Understand the goal, users and constraints before writing a line of code.',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Design',
    desc: 'Shape the interface, experience and visual language around the product.',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Build',
    desc: 'Turn the idea into clean, modular and maintainable software.',
  },
  {
    number: '04',
    icon: Bug,
    title: 'Test',
    desc: 'Break things before users do — edge cases, devices and browsers.',
  },
  {
    number: '05',
    icon: Rocket,
    title: 'Deploy',
    desc: 'Ship an optimized, production-ready application to the real world.',
  },
  {
    number: '06',
    icon: Headphones,
    title: 'Support',
    desc: 'Keep improving the product after launch based on real usage.',
  },
];

const SIGNALS = [
  'BUILD',
  'TEST',
  'SHIP',
  'ITERATE',
  'OPTIMIZE',
  'REPEAT',
];

function AnimatedNumber({ value, loading }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (loading || value === null || value === undefined) return;

    const target = Number(value) || 0;
    let start = 0;

    const duration = 900;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);

      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);

      start = Math.round(target * eased);
      setDisplay(start);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [value, loading]);

  if (loading) {
    return (
      <div className="w-14 h-8 rounded-lg bg-white/[0.05] overflow-hidden">
        <div className="w-full h-full dsg-shimmer" />
      </div>
    );
  }

  return <>{display}</>;
}

function Stat({
  icon: Icon,
  label,
  value,
  loading,
}) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 rounded-2xl bg-[#0da2e7]/0 group-hover:bg-[#0da2e7]/[0.025] transition-all duration-500" />

      <div className="relative p-5 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="w-9 h-9 rounded-xl border border-white/[0.07] bg-white/[0.025] flex items-center justify-center">
            <Icon
              size={15}
              strokeWidth={1.5}
              className="text-white/40 group-hover:text-[#0da2e7] transition-colors"
            />
          </div>

          <span className="text-[9px] uppercase tracking-[0.18em] text-white/20 font-mono">
            LIVE
          </span>
        </div>

        <div className="text-3xl md:text-4xl font-black tracking-[-0.04em] text-white">
          <AnimatedNumber value={value} loading={loading} />
        </div>

        <p className="mt-2 text-[9px] uppercase tracking-[0.16em] font-mono text-white/30">
          {label}
        </p>
      </div>
    </div>
  );
}

function ProcessNode({ step, index }) {
  const Icon = step.icon;

  return (
    <div className="group relative">
      <div className="relative flex flex-col items-center text-center">
        {/* Number */}
        <span className="mb-5 font-mono text-[10px] tracking-[0.2em] text-white/20 group-hover:text-[#0da2e7]/60 transition-colors">
          {step.number}
        </span>

        {/* Node */}
        <div className="relative">
          <div className="absolute inset-[-7px] rounded-full border border-[#0da2e7]/0 group-hover:border-[#0da2e7]/20 group-hover:scale-110 transition-all duration-500" />

          <div className="relative w-14 h-14 rounded-full border border-white/[0.09] bg-[#0b1017] flex items-center justify-center group-hover:border-[#0da2e7]/50 group-hover:-translate-y-1 transition-all duration-500">
            <Icon
              size={18}
              strokeWidth={1.5}
              className="text-white/40 group-hover:text-[#0da2e7] transition-colors"
            />
          </div>
        </div>

        {/* Content */}
        <div className="mt-5">
          <h4 className="text-sm font-bold text-white">
            {step.title}
          </h4>

          <p className="mt-2 text-[11px] leading-[1.65] text-white/30 max-w-[145px] mx-auto">
            {step.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function DeveloperSignal() {
  const sectionRef = useRef(null);
  const fetchedRef = useRef(false);

  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState('idle');

  const [stats, setStats] = useState({
    repos: null,
    followers: null,
    stars: null,
    since: null,
  });

  const [chartOk, setChartOk] = useState(true);

  /* -----------------------------------------------------------
     START API ONLY WHEN SECTION ENTERS VIEW
  ----------------------------------------------------------- */

  useEffect(() => {
    const el = sectionRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.08,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible || fetchedRef.current) return;

    fetchedRef.current = true;

    let cancelled = false;

    setStatus('loading');

    const fetchGithub = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USER}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('GitHub API unavailable');
        }

        const user = await userRes.json();
        const repos = await reposRes.json();

        if (cancelled) return;

        const totalStars = Array.isArray(repos)
          ? repos.reduce(
              (sum, repo) => sum + (repo.stargazers_count || 0),
              0
            )
          : 0;

        const since = user.created_at
          ? new Date(user.created_at).getFullYear()
          : null;

        setStats({
          repos: user.public_repos ?? repos.length,
          followers: user.followers ?? 0,
          stars: totalStars,
          since,
        });

        setStatus('success');
      } catch {
        if (!cancelled) {
          setStatus('error');
        }
      }
    };

    fetchGithub();

    return () => {
      cancelled = true;
    };
  }, [visible]);

  const isLoading = status === 'loading';

  return (
    <section
      id="signal"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#080b12] text-white"
    >
      <div className="relative py-28 md:py-36">

        {/* =====================================================
            AMBIENT BACKGROUND
        ====================================================== */}

        <div className="absolute inset-0 pointer-events-none">

          <div
            className="absolute top-[-15%] left-[10%] w-[40vw] h-[40vw] rounded-full blur-[140px]"
            style={{
              background: 'rgba(13,162,231,0.055)',
            }}
          />

          <div
            className="absolute bottom-[-15%] right-[5%] w-[35vw] h-[35vw] rounded-full blur-[140px]"
            style={{
              background: 'rgba(168,85,247,0.045)',
            }}
          />

          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage:
                'linear-gradient(to right,#6b9bb0 1px,transparent 1px),linear-gradient(to bottom,#6b9bb0 1px,transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />

          {/* Center glow */}
          <div
            className="absolute left-1/2 top-[30%] -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[150px]"
            style={{
              background: 'rgba(13,162,231,0.035)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">

          {/* =====================================================
              HEADER
          ====================================================== */}

          <div className="max-w-5xl mx-auto">

            <div className="flex items-center justify-center gap-3 mb-7">
              <div className="w-8 h-px bg-[#0da2e7]/50" />

              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#0da2e7]">
                Proof of Work
              </span>

              <div className="w-8 h-px bg-[#0da2e7]/50" />
            </div>

            <h2 className="text-center text-[clamp(3.5rem,8vw,8rem)] font-black tracking-[-0.065em] leading-[0.82]">
              <span className="text-white">
                I DON'T JUST
              </span>

              <br />

              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    'linear-gradient(100deg,#0da2e7 0%,#62d5ff 45%,#a855f7 100%)',
                }}
              >
                WRITE CODE.
              </span>
            </h2>

            <p className="max-w-xl mx-auto text-center mt-8 text-sm md:text-base text-white/35 leading-[1.8]">
              I turn ideas into working products — and the activity below
              is the real trail behind the work.
            </p>

          </div>

          {/* =====================================================
              SIGNAL MARQUEE
          ====================================================== */}

          <div className="relative mt-20 overflow-hidden border-y border-white/[0.055]">

            <div className="absolute left-0 inset-y-0 w-28 bg-gradient-to-r from-[#080b12] to-transparent z-10" />

            <div className="absolute right-0 inset-y-0 w-28 bg-gradient-to-l from-[#080b12] to-transparent z-10" />

            <div className="overflow-hidden">

              <div
                className="flex w-max py-5"
                style={{
                  animation: 'dsg-marquee 25s linear infinite',
                }}
              >
                {[...SIGNALS, ...SIGNALS].map((signal, index) => (
                  <div
                    key={`${signal}-${index}`}
                    className="flex items-center gap-8 px-8"
                  >
                    <span className="text-[11px] font-bold tracking-[0.25em] text-white/20 whitespace-nowrap">
                      {signal}
                    </span>

                    <span className="w-1 h-1 rounded-full bg-[#0da2e7]" />
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* =====================================================
              GITHUB SIGNAL
          ====================================================== */}

          <div className="mt-20">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-6">

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.6)]" />

                  <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-green-400/70">
                    Live developer signal
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  The numbers are real.
                </h3>
              </div>

              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 self-start md:self-auto font-mono text-[10px] uppercase tracking-[0.14em] text-white/30 hover:text-[#0da2e7] transition-colors"
              >
                <Cat size={14} />

                View GitHub

                <ArrowUpRight
                  size={13}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>

            </div>

            <div className="relative rounded-[28px] border border-white/[0.07] overflow-hidden bg-white/[0.02] backdrop-blur-xl">

              {/* top status bar */}
              <div className="h-10 border-b border-white/[0.055] px-5 flex items-center justify-between">

                <div className="flex items-center gap-2">
                  <Terminal size={13} className="text-white/20" />

                  <span className="font-mono text-[9px] text-white/20">
                    developer.signal
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />

                  <span className="font-mono text-[9px] text-green-400/50">
                    {status === 'error'
                      ? 'OFFLINE'
                      : 'CONNECTED'}
                  </span>
                </div>

              </div>

              {/* stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/[0.055]">

                <Stat
                  icon={Code2}
                  label="Public Repositories"
                  value={stats.repos}
                  loading={isLoading}
                />

                <Stat
                  icon={Activity}
                  label="Followers"
                  value={stats.followers}
                  loading={isLoading}
                />

                <Stat
                  icon={Check}
                  label="Total Stars"
                  value={stats.stars}
                  loading={isLoading}
                />

                <Stat
                  icon={GitBranch}
                  label="GitHub Since"
                  value={stats.since}
                  loading={isLoading}
                />

              </div>

              {/* contribution graph */}
              {chartOk && (
                <div className="border-t border-white/[0.055] p-5 md:p-7">

                  <div className="flex items-center justify-between mb-5">

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/25">
                        Contribution activity
                      </span>
                    </div>

                    <span className="font-mono text-[9px] text-white/15">
                      {GITHUB_USER}
                    </span>

                  </div>

                  <div className="w-full overflow-x-auto dsg-scroll">

                    <img
                      src={`https://ghchart.rshah.org/0da2e7/${GITHUB_USER}`}
                      alt={`${GITHUB_USER} GitHub contribution activity`}
                      loading="lazy"
                      className="block min-w-[680px] w-full opacity-70 hover:opacity-100 transition-opacity duration-500"
                      onError={() => setChartOk(false)}
                    />

                  </div>

                </div>
              )}

            </div>

            {status === 'error' && (
              <p className="mt-3 text-center font-mono text-[9px] text-white/20">
                Live GitHub sync is temporarily unavailable.{' '}
                <a
                  href={`https://github.com/${GITHUB_USER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0da2e7]/60 hover:text-[#0da2e7]"
                >
                  View profile directly →
                </a>
              </p>
            )}

          </div>

          {/* =====================================================
              PROCESS
          ====================================================== */}

          <div className="mt-32">

            <div className="text-center mb-16">

              <div className="flex items-center justify-center gap-3 mb-5">
                <span className="w-6 h-px bg-white/10" />

                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/25">
                  The process
                </span>

                <span className="w-6 h-px bg-white/10" />
              </div>

              <h3 className="text-4xl md:text-6xl font-bold tracking-[-0.045em]">
                From{' '}
                <span className="text-white/30">
                  idea
                </span>{' '}
                to{' '}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg,#0da2e7,#a855f7)',
                  }}
                >
                  shipped.
                </span>
              </h3>

              <p className="mt-5 text-sm text-white/30">
                No mystery. No disappearing after delivery.
              </p>

            </div>

            {/* Desktop timeline */}
            <div className="hidden md:block relative">

              {/* connecting line */}
              <div
                className="absolute top-[53px] left-[7%] right-[7%] h-px"
                style={{
                  background:
                    'linear-gradient(90deg,transparent,rgba(13,162,231,0.25),rgba(168,85,247,0.25),rgba(13,162,231,0.25),transparent)',
                }}
              />

              <div className="grid grid-cols-6 gap-4">
                {PROCESS_STEPS.map((step, index) => (
                  <ProcessNode
                    key={step.number}
                    step={step}
                    index={index}
                  />
                ))}
              </div>

            </div>

            {/* Mobile timeline */}
            <div className="md:hidden relative">

              <div className="absolute left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-[#0da2e7]/30 via-white/10 to-[#a855f7]/20" />

              <div className="space-y-9">

                {PROCESS_STEPS.map((step) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.number}
                      className="relative flex gap-5"
                    >

                      <div className="relative z-10 w-14 h-14 shrink-0 rounded-full border border-white/[0.09] bg-[#080b12] flex items-center justify-center">
                        <Icon
                          size={17}
                          className="text-[#0da2e7]"
                          strokeWidth={1.5}
                        />
                      </div>

                      <div className="pt-1">
                        <div className="font-mono text-[9px] tracking-[0.15em] text-white/20 mb-1">
                          {step.number}
                        </div>

                        <h4 className="font-bold text-sm text-white">
                          {step.title}
                        </h4>

                        <p className="mt-2 text-[11px] leading-[1.7] text-white/30">
                          {step.desc}
                        </p>
                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

          {/* =====================================================
              CLOSING STATEMENT
          ====================================================== */}

          <div className="mt-32">

            <div className="relative overflow-hidden rounded-[30px] border border-white/[0.07] bg-white/[0.02]">

              <div
                className="absolute left-1/2 top-[-100px] -translate-x-1/2 w-[450px] h-[220px] rounded-full blur-[100px]"
                style={{
                  background: 'rgba(13,162,231,0.07)',
                }}
              />

              <div className="relative px-7 py-14 md:px-16 md:py-20 text-center">

                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#0da2e7]/70 mb-6">
                  Built with intention
                </p>

                <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.045em] leading-tight">
                  Good products aren't
                  <br />
                  <span className="text-white/25">
                    rushed into existence.
                  </span>
                </h3>

                <p className="max-w-xl mx-auto mt-6 text-sm leading-[1.8] text-white/30">
                  They are understood, designed, built, tested and refined
                  until the technology disappears and the experience just
                  works.
                </p>

              </div>

            </div>

          </div>

        </div>
      </div>

      {/* =========================================================
          KEYFRAMES
      ========================================================== */}

      <style>{`
        @keyframes dsg-marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .dsg-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.025),
            rgba(255,255,255,0.08),
            rgba(255,255,255,0.025)
          );
          background-size: 200% 100%;
          animation: dsg-shimmer 1.5s ease-in-out infinite;
        }

        @keyframes dsg-shimmer {
          0% {
            background-position: 200% 0;
          }

          100% {
            background-position: -200% 0;
          }
        }

        .dsg-scroll::-webkit-scrollbar {
          height: 4px;
        }

        .dsg-scroll::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.025);
        }

        .dsg-scroll::-webkit-scrollbar-thumb {
          background: rgba(13,162,231,0.3);
          border-radius: 999px;
        }
      `}</style>
    </section>
  );
}