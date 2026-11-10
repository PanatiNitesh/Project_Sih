import React, { useState } from 'react';
import { Palette, Check, Shield, GraduationCap, Building2 } from 'lucide-react';
import crestLogo from '../../assets/logo.png';

const THEME_PRESETS = [
  {
    id: 'iit',
    name: 'Apex Institute of Technology',
    code: 'INST-01 · CRIMSON',
    primary: '#881337',
    accent: '#BE123C',
    bgTint: '#FFF1F2',
    motto: 'Knowledge is Supreme Strength',
    naac: 'A++ (CGPA 3.88)',
  },
  {
    id: 'nid',
    name: 'National Design & Science Academy',
    code: 'INST-02 · COBALT',
    primary: '#1E3A8A',
    accent: '#2563EB',
    bgTint: '#EFF6FF',
    motto: 'Design with Rigor & Precision',
    naac: 'A+ (CGPA 3.64)',
  },
  {
    id: 'state',
    name: 'State Autonomous Technical University',
    code: 'INST-03 · EMERALD',
    primary: '#14532D',
    accent: '#15803D',
    bgTint: '#F0FDF4',
    motto: 'Industry Integration & Research',
    naac: 'A++ (CGPA 3.76)',
  },
  {
    id: 'heritage',
    name: 'Vedic Heritage Institute of Engineering',
    code: 'INST-04 · OCHRE',
    primary: '#78350F',
    accent: '#D97706',
    bgTint: '#FFFBEB',
    motto: 'Truth, Service & Innovation',
    naac: 'A (CGPA 3.42)',
  },
];

export default function ThemingDemoSection() {
  const [selectedTheme, setSelectedTheme] = useState(THEME_PRESETS[0]);
  const [customPrimary, setCustomPrimary] = useState(selectedTheme.primary);

  const handleSelectPreset = (preset) => {
    setSelectedTheme(preset);
    setCustomPrimary(preset.primary);
  };

  return (
    <section id="theming" className="py-20 bg-[#F4EFEB]/60 landing-hairline-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#D9381E] font-medium">
              04 // Institutional Sovereignty
            </span>
            <span className="text-[#8A857D] font-mono-code text-xs">·</span>
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#8A857D]">
              Autonomous Theming
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#111215] tracking-tight leading-[1.08]">
            Every college owns its identity. CampusVersa re-themes instantly.
          </h2>

          <p className="mt-4 font-sans-body text-base text-[#504D48] leading-relaxed">
            Autonomous universities and technical institutions cannot accept generic software branding. 
            CampusVersa isolates themes at the tenant level: college heraldry, primary heraldic palettes, 
            and accreditation badges adapt across student, faculty, and administrative views.
          </p>
        </div>

        {/* Live Interactive Playground */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls: Theme Selector */}
          <div className="lg:col-span-5 space-y-4">
            <p className="font-mono-code text-xs uppercase tracking-wider text-[#8A857D]">
              Select Institutional Identity:
            </p>

            <div className="space-y-2.5">
              {THEME_PRESETS.map((preset) => {
                const isSelected = selectedTheme.id === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectPreset(preset)}
                    className={`w-full p-3.5 text-left transition-all border flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#FFFFFF] border-[#111215] shadow-sm'
                        : 'bg-[#FBF9F5] border-[#E3DDD4] hover:bg-[#FFFFFF]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: preset.primary }}
                      />
                      <div>
                        <p className="text-xs font-bold text-[#111215] font-sans">
                          {preset.name}
                        </p>
                        <p className="font-mono-code text-[10px] text-[#8A857D]">
                          {preset.code}
                        </p>
                      </div>
                    </div>

                    {isSelected && (
                      <span className="font-mono-code text-[11px] text-[#D9381E] font-semibold">
                        ACTIVE
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Live Custom Swatch Override */}
            <div className="p-4 bg-[#FFFFFF] border border-[#E3DDD4] mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono-code text-xs uppercase text-[#111215] font-semibold flex items-center gap-2">
                  <Palette size={13} />
                  <span>Custom Accent Hex</span>
                </span>
                <span className="font-mono-code text-xs text-[#504D48]">
                  {customPrimary}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={customPrimary}
                  onChange={(e) => setCustomPrimary(e.target.value)}
                  className="w-10 h-9 p-0.5 border border-[#E3DDD4] cursor-pointer bg-white"
                  title="Choose custom brand accent"
                />
                <input
                  type="text"
                  value={customPrimary}
                  onChange={(e) => setCustomPrimary(e.target.value)}
                  placeholder="#111215"
                  className="font-mono-code text-xs px-3 py-1.5 border border-[#E3DDD4] flex-1 uppercase"
                />
              </div>
            </div>
          </div>

          {/* Canvas: Live Re-themed Student Portal Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] border border-[#E3DDD4] shadow-sm p-6 relative overflow-hidden">
              {/* Institution Crest Masthead */}
              <div 
                className="p-4 -mx-6 -mt-6 mb-6 text-white flex items-center justify-between transition-colors"
                style={{ backgroundColor: customPrimary }}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={crestLogo}
                    alt="Institute Crest"
                    className="w-9 h-9 object-contain bg-white/10 p-1 rounded-sm"
                  />
                  <div>
                    <h3 className="font-sans font-bold text-sm tracking-tight leading-snug">
                      {selectedTheme.name}
                    </h3>
                    <p className="font-mono-code text-[10px] text-white/80">
                      Autonomous College · Affiliated to State Tech Board
                    </p>
                  </div>
                </div>

                <div className="hidden sm:block text-right">
                  <span className="font-mono-code text-[10px] bg-white/20 px-2 py-0.5 rounded-none uppercase">
                    NAAC: {selectedTheme.naac}
                  </span>
                </div>
              </div>

              {/* Sample Student Identity Fragment */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F4EFEB]">
                  <div>
                    <p className="font-mono-code text-[11px] text-[#8A857D] uppercase">
                      Student Credential // Verified
                    </p>
                    <p className="font-sans text-base font-bold text-[#111215] mt-0.5">
                      Aarav Sharma · Roll: 2022-CSE-048
                    </p>
                  </div>
                  <span 
                    className="px-2.5 py-1 text-xs font-mono-code font-bold uppercase transition-colors"
                    style={{ 
                      backgroundColor: `${customPrimary}15`, 
                      color: customPrimary,
                      border: `1px solid ${customPrimary}30` 
                    }}
                  >
                    SEMESTER 6 ACTIVE
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono-code text-xs">
                  <div className="p-3 bg-[#FBF9F5] border border-[#E3DDD4]">
                    <span className="text-[#8A857D] block text-[10px]">CGPA</span>
                    <span className="text-[#111215] font-bold text-sm">8.84 / 10.0</span>
                  </div>
                  <div className="p-3 bg-[#FBF9F5] border border-[#E3DDD4]">
                    <span className="text-[#8A857D] block text-[10px]">ATTENDANCE</span>
                    <span className="text-[#111215] font-bold text-sm">88.5% (Safe)</span>
                  </div>
                  <div className="p-3 bg-[#FBF9F5] border border-[#E3DDD4] col-span-2 sm:col-span-1">
                    <span className="text-[#8A857D] block text-[10px]">KYC STATUS</span>
                    <span className="text-[#16A34A] font-bold text-xs">DigiLocker OK</span>
                  </div>
                </div>

                {/* Simulated Portal Action Button styled with institute theme */}
                <div className="pt-2 flex items-center justify-between">
                  <p className="font-mono-code text-[11px] text-[#8A857D]">
                    Motto: "{selectedTheme.motto}"
                  </p>
                  <button
                    style={{ backgroundColor: customPrimary }}
                    className="px-4 py-2 text-white font-mono-code text-xs uppercase tracking-wider transition-opacity hover:opacity-90"
                  >
                    View Official Transcript
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

