import React from 'react';

export default function SceneFallback() {
  return (
    <div className="w-full h-full min-h-0 bg-transparent flex flex-col items-center justify-center p-4 select-none">
      {/* Crisp vector blueprint fallback */}
      <svg
        viewBox="0 0 400 300"
        className="w-full max-w-[320px] h-auto text-[#111215]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orbital Guide Rings */}
        <ellipse cx="200" cy="150" rx="140" ry="70" stroke="#E3DDD4" strokeWidth="1.5" strokeDasharray="3 3" />
        <ellipse cx="200" cy="150" rx="90" ry="45" stroke="#E3DDD4" strokeWidth="1.5" />

        {/* Dynamic Connective Lines */}
        <line x1="100" y1="90" x2="300" y2="100" stroke="#8A857D" strokeWidth="1.2" strokeOpacity="0.4" />
        <line x1="100" y1="90" x2="260" y2="220" stroke="#D9381E" strokeWidth="1.5" strokeOpacity="0.7" />
        <line x1="300" y1="100" x2="260" y2="220" stroke="#8A857D" strokeWidth="1.2" strokeOpacity="0.4" />
        <line x1="160" y1="50" x2="260" y2="220" stroke="#8A857D" strokeWidth="1.2" strokeDasharray="4 4" />

        {/* Nodes */}
        {/* Student Node */}
        <g transform="translate(100, 90)">
          <circle r="14" fill="#FFFFFF" stroke="#D9381E" strokeWidth="2" />
          <circle r="4" fill="#D9381E" />
          <text x="-24" y="28" fill="#111215" fontSize="10" fontFamily="monospace" fontWeight="bold">
            STUDENT
          </text>
        </g>

        {/* Faculty Node */}
        <g transform="translate(300, 100)">
          <rect x="-12" y="-12" width="24" height="24" fill="#FFFFFF" stroke="#111215" strokeWidth="2" />
          <circle r="3" fill="#111215" />
          <text x="-24" y="28" fill="#111215" fontSize="10" fontFamily="monospace">
            FACULTY
          </text>
        </g>

        {/* Institute Node */}
        <g transform="translate(260, 220)">
          <polygon points="0,-14 13,10 -13,10" fill="#FFFFFF" stroke="#111215" strokeWidth="2" />
          <circle r="3" fill="#111215" />
          <text x="-28" y="26" fill="#111215" fontSize="10" fontFamily="monospace">
            INSTITUTE
          </text>
        </g>

        {/* Central Authority Node */}
        <g transform="translate(160, 50)">
          <polygon points="0,-12 12,0 0,12 -12,0" fill="#FFFFFF" stroke="#D9381E" strokeWidth="2" />
          <circle r="3" fill="#D9381E" />
          <text x="-32" y="-18" fill="#D9381E" fontSize="9" fontFamily="monospace" fontWeight="bold">
            AUTHORITY
          </text>
        </g>
      </svg>

      <div className="mt-4 text-center">
        <p className="font-mono-code text-[11px] uppercase tracking-wider text-[#8A857D]">
          Topology Mesh Initializing...
        </p>
      </div>
    </div>
  );
}

