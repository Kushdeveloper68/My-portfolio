import { useEffect, useRef } from "react";

const KushParticleFooter = () => {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const sub = subRef.current;

    let W, H, dpr;
    let particles = [];
    let mouse = { x: -9999, y: -9999 };
    let animId;
    let fontLoaded = false;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      W = root.offsetWidth;
      H = root.offsetHeight;

      canvas.width = W * dpr;
      canvas.height = H * dpr;

      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (fontLoaded) buildParticles();
    }

    function sampleText() {
      const off = document.createElement("canvas");

      const fontSize = Math.min(W * 0.52, H * 0.72, 200);

      off.width = W;
      off.height = H;

      const oc = off.getContext("2d");

      oc.fillStyle = "#fff";
      oc.font = `900 ${fontSize}px 'Bebas Neue', 'Arial Black', Impact, sans-serif`;
      oc.textAlign = "center";
      oc.textBaseline = "middle";

      oc.fillText("KUSH", W / 2, H / 2 - 10);

      const imgData = oc.getImageData(0, 0, W, H).data;

      const pts = [];
      const gap = Math.max(3, Math.floor(W / 160));

      for (let y = 0; y < H; y += gap) {
        for (let x = 0; x < W; x += gap) {
          const i = (y * W + x) * 4;

          if (imgData[i + 3] > 128) {
            pts.push({ x, y });
          }
        }
      }

      return pts;
    }

    function buildParticles() {
      const pts = sampleText();

      particles = pts.map((p) => {
        const angle = Math.random() * Math.PI * 2;
        const dist = 300 + Math.random() * 400;

        return {
          tx: p.x,
          ty: p.y,

          x: p.x + Math.cos(angle) * dist,
          y: p.y + Math.sin(angle) * dist,

          vx: 0,
          vy: 0,

          size: 1.2 + Math.random() * 1.4,

          hue:
            Math.random() < 0.6
              ? 260 + Math.random() * 40
              : 200 + Math.random() * 30,

          brightness: 55 + Math.random() * 35,

          alpha: 0,
          delay: Math.random() * 80,
          frame: 0,
        };
      });
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);

      const mx = mouse.x;
      const my = mouse.y;

      const repelR = 90;
      const attractR = 160;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.frame++;

        if (p.frame < p.delay) continue;

        p.alpha = Math.min(1, p.alpha + 0.025);

        const dx = mx - p.x;
        const dy = my - p.y;

        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        let ax = 0;
        let ay = 0;

        if (dist < repelR) {
          const force = ((repelR - dist) / repelR) * 4.5;

          ax -= (dx / dist) * force;
          ay -= (dy / dist) * force;
        }

        const tdx = p.tx - p.x;
        const tdy = p.ty - p.y;

        const pullStrength = dist < attractR ? 0.04 : 0.09;

        ax += tdx * pullStrength;
        ay += tdy * pullStrength;

        p.vx = (p.vx + ax) * 0.82;
        p.vy = (p.vy + ay) * 0.82;

        p.x += p.vx;
        p.y += p.vy;

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);

        const lit =
          dist < repelR
            ? 95
            : p.brightness + Math.min(speed * 8, 20);

        const sat = dist < repelR ? 80 : 70;
        const hue = dist < repelR ? p.hue + 30 : p.hue;

        ctx.globalAlpha =
          p.alpha * (0.7 + Math.min(speed * 0.15, 0.3));

        ctx.fillStyle = `hsl(${hue},${sat}%,${lit}%)`;

        ctx.beginPath();

        const r =
          p.size * (1 + Math.min(speed * 0.12, 0.8));

        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);

        ctx.fill();
      }

      ctx.globalAlpha = 1;

      animId = requestAnimationFrame(tick);
    }

    const handleMouseMove = (e) => {
      const rect = root.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;

      sub.style.color = "rgba(255,255,255,0.4)";
    };

    const handleMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;

      sub.style.color = "rgba(255,255,255,0.2)";
    };

    root.addEventListener("mousemove", handleMouseMove);
    root.addEventListener("mouseleave", handleMouseLeave);

    const ro = new ResizeObserver(resize);
    ro.observe(root);

    resize();

    if (document.fonts?.load) {
      document.fonts
        .load("900 160px 'Bebas Neue'")
        .then(() => {
          fontLoaded = true;
          buildParticles();
          tick();
        })
        .catch(() => {
          setTimeout(() => {
            fontLoaded = true;
            buildParticles();
            tick();
          }, 800);
        });
    } else {
      setTimeout(() => {
        fontLoaded = true;
        buildParticles();
        tick();
      }, 800);
    }

    return () => {
      cancelAnimationFrame(animId);

      ro.disconnect();

      root.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      root.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative flex h-[340px] w-full items-center justify-center overflow-hidden bg-black"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />

      <span
        className="pointer-events-none absolute top-7 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.22em] text-white/10"
      >
        move your cursor
      </span>

      <span
        ref={subRef}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.28em] text-white/20 transition-colors duration-500"
      >
        Full Stack Developer · Kush Pandit · 2025
      </span>
    </div>
  );
};

export default KushParticleFooter;