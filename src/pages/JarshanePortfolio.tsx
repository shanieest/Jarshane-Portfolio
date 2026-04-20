import jarshane1 from '../assets/1.png';

export default function JarshanePortfolio() {
  return (
    <div className="relative min-h-screen bg-[#f5f0eb] flex items-center justify-center overflow-hidden font-serif">

      {/* Background grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      />

      {/* Decorative lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-[#c8b89a] opacity-40" />
        <div className="absolute right-8 top-0 bottom-0 w-px bg-[#c8b89a] opacity-40" />
        <div className="absolute top-8 left-0 right-0 h-px bg-[#c8b89a] opacity-40" />
        <div className="absolute bottom-8 left-0 right-0 h-px bg-[#c8b89a] opacity-40" />
      </div>

      {/* Main card */}
      <div
        className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20 px-10 py-14"
        style={{ animation: 'fadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both' }}
      >

        {/* Photo */}
        <div className="relative flex-shrink-0">
          {/* Offset shadow block */}
          <div className="absolute -bottom-3 -right-3 w-full h-full bg-[#c8b89a] rounded-sm" />
          <div className="relative w-52 h-64 md:w-64 md:h-80 overflow-hidden rounded-sm border border-[#c8b89a]">
            <img
              src={jarshane1}
              alt="Jarshane Tolentino"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="text-left max-w-sm">

          {/* Eyebrow label */}
          <p
            className="text-[10px] tracking-[0.3em] uppercase text-[#9c7e5a] mb-5 font-sans"
            style={{ animation: 'fadeUp 0.9s 0.15s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            Portfolio — 2025
          </p>

          {/* Name */}
          <h1
            className="text-5xl md:text-6xl font-bold leading-[1.0] text-[#1a1410] mb-1"
            style={{
              fontFamily: '"Georgia", "Times New Roman", serif',
              letterSpacing: '-0.02em',
              animation: 'fadeUp 0.9s 0.25s cubic-bezier(0.22,1,0.36,1) both',
            }}
          >
            Jarshane
          </h1>
          <h1
            className="text-5xl md:text-6xl font-bold leading-[1.0] text-[#1a1410] mb-6"
            style={{
              fontFamily: '"Georgia", "Times New Roman", serif',
              letterSpacing: '-0.02em',
              animation: 'fadeUp 0.9s 0.33s cubic-bezier(0.22,1,0.36,1) both',
            }}
          >
            Tolentino
          </h1>

          {/* Divider */}
          <div
            className="flex items-center gap-3 mb-5"
            style={{ animation: 'fadeUp 0.9s 0.41s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <div className="h-px flex-1 bg-[#c8b89a]" />
            <span className="text-[#c8b89a] text-xs">✦</span>
            <div className="h-px flex-1 bg-[#c8b89a]" />
          </div>

          {/* Role */}
          <p
            className="text-sm tracking-[0.18em] uppercase text-[#5c4a35] font-sans"
            style={{ animation: 'fadeUp 0.9s 0.49s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            Frontend Developer
          </p>

          {/* CTA */}
          <div
            className="mt-8"
            style={{ animation: 'fadeUp 0.9s 0.57s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <button className="group inline-flex items-center gap-2 border border-[#1a1410] text-[#1a1410] text-xs tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300 hover:bg-[#1a1410] hover:text-[#f5f0eb] font-sans">
              View Work
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
