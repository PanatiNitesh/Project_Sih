import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HeroSection({
  activeRole,
  onSelectRole,
  SceneComponent,
}) {
  const roleSummaries = {
    student: {
      headline: 'Attendance tracking, AI resume scoring, and KYC roadmaps.',
      target: '/student/auth',
      actionLabel: 'Enter Student Portal',
      stat: '86.4% Min Attendance Tracked',
    },
    faculty: {
      headline: 'Automated NAAC SSR inputs, department rosters, and timetable sync.',
      target: '/fc/auth',
      actionLabel: 'Enter Faculty Desk',
      stat: 'Criterion 2.3 SSR Automation',
    },
    institute: {
      headline: 'Centralized accreditation audits, NIRF metrics, and role provisioning.',
      target: '/in/auth',
      actionLabel: 'Enter Institute Console',
      stat: '7 NAAC Criteria Synced',
    },
    authority: {
      headline: 'Regulatory compliance, unalterable audit trails, and grievance resolution.',
      target: '/in/auth',
      actionLabel: 'Access Authority Layer',
      stat: 'Statewide Audit Verification',
    },
  };

  const current = roleSummaries[activeRole] || roleSummaries.student;

  return (
    <section className="relative bg-[#FBF9F5] landing-hairline-b overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 landing-grid-bg pointer-events-none opacity-40" />

      {/* ----------------- FIRST VIEWPORT (Full-Width, Zero Wasted Space, Zero Overflow) ----------------- */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 min-h-[calc(100vh-4rem)] flex flex-col justify-between relative z-10">
        
        {/* Top Release Datum Bar - Full Width Span */}
        <div className="w-full flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 landing-hairline-b shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 bg-[#111215] text-[#FBF9F5] font-mono-code text-[11px] tracking-wider uppercase font-semibold">
              Release 2.5
            </span>
            <span className="font-mono-code text-xs text-[#504D48] tracking-widest uppercase">
              Smart India Hackathon 2025 // SIH-25252
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-5 font-mono-code text-xs text-[#8A857D]">
            <span>ARCHITECTURE: UNIFIED EVENT FABRIC</span>
            <span>·</span>
            <span className="text-[#111215] font-medium">ZERO SILOED EXCEL SHEETS</span>
          </div>
        </div>

        {/* Main Content Split: Left Text + Right 3D Viewer Card */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center flex-1 my-auto">
          
          {/* Left Column: Authoritative Editorial Copy & Tabs */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-4 sm:space-y-5">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] xl:text-[4rem] leading-[1.04] text-[#111215] tracking-tight">
              A campus is a living organism.{' '}
              <span className="italic font-normal text-[#504D48] block mt-1">
                Stop treating it like four disconnected databases.
              </span>
            </h1>

            <p className="font-sans-body text-base sm:text-lg text-[#504D48] max-w-2xl leading-relaxed">
              When student attendance sits in paper registers, faculty timetables on WhatsApp, 
              and NAAC criteria in frantic annual Excel spreadsheets, institutional integrity breaks. 
              CampusVersa binds all four actors into one verified, real-time operating state.
            </p>

            {/* Inspect Connected Node Topology Title & Tabs */}
            <div className="pt-1 space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-mono-code text-[11px] uppercase tracking-wider text-[#8A857D]">
                  INSPECT CONNECTED NODE TOPOLOGY:
                </p>
                <span className="hidden sm:inline font-mono-code text-[11px] text-[#D9381E] font-medium">
                  {current.stat}
                </span>
              </div>

              {/* 4 Tabs - Full Column Width */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'student', label: '01 / STUDENT' },
                  { id: 'faculty', label: '02 / FACULTY' },
                  { id: 'institute', label: '03 / INSTITUTE' },
                  { id: 'authority', label: '04 / AUTHORITY' },
                ].map((role) => {
                  const isActive = activeRole === role.id;
                  return (
                    <button
                      key={role.id}
                      onClick={() => onSelectRole(role.id)}
                      className={`py-2.5 px-3 text-left font-mono-code text-xs uppercase transition-all border cursor-pointer ${
                        isActive
                          ? 'bg-[#111215] text-[#FBF9F5] border-[#111215] shadow-sm'
                          : 'bg-[#FFFFFF] text-[#504D48] border-[#E3DDD4] hover:border-[#111215] hover:text-[#111215]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{role.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D9381E]" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Primary Action Button Row */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to={current.target}
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#D9381E] hover:bg-[#b52b14] text-[#FBF9F5] font-mono-code text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>{current.actionLabel}</span>
                  <ArrowRight size={14} />
                </Link>

                <div className="flex items-center gap-2 text-xs font-mono-code text-[#504D48]">
                  <span>Or quick-jump:</span>
                  <Link to="/student/auth" className="underline hover:text-[#111215]">Student</Link>
                  <span>/</span>
                  <Link to="/fc/auth" className="underline hover:text-[#111215]">Faculty</Link>
                  <span>/</span>
                  <Link to="/in/auth" className="underline hover:text-[#111215]">Institute</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D System Mesh Card (Fills vertical & horizontal room gracefully) */}
          <div className="lg:col-span-5 xl:col-span-5 w-full">
            <div className="relative border border-[#E3DDD4] bg-[#FFFFFF] shadow-sm overflow-hidden flex flex-col w-full h-[380px] sm:h-[420px] lg:h-[470px] xl:h-[510px]">
              {/* Terminal Header Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#E3DDD4] bg-[#F4EFEB]/60 font-mono-code text-[11px] text-[#504D48] shrink-0 h-9">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full border border-[#111215]" />
                  <span>CAMPUS_TOPOLOGY_VIEWER</span>
                </div>
                <span className="text-[#8A857D]">ORBIT: INTERACTIVE</span>
              </div>

              {/* Canvas Wrapper */}
              <div className="flex-1 min-h-0 relative w-full overflow-hidden">
                {SceneComponent}
              </div>

              {/* Viewport Meta Footer */}
              <div className="px-4 py-2.5 bg-[#FBF9F5] border-t border-[#E3DDD4] flex items-center justify-between text-[11px] font-mono-code text-[#504D48] shrink-0 h-9">
                <span>DRAG TO ROTATE // CLICK NODE TO INSPECT</span>
                <span className="text-[#D9381E] font-medium">REAL-TIME TELEMETRY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Verification Strip - Anchored cleanly to eliminate dead space */}
        <div className="w-full pt-4 mt-2 landing-hairline-t shrink-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono-code">
            <div className="flex items-center gap-2.5">
              <span className="text-[#D9381E] font-bold">01/</span>
              <div>
                <span className="font-semibold text-[#111215]">4 Portals:</span>{' '}
                <span className="text-[#504D48]">Role-isolated state</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#D9381E] font-bold">02/</span>
              <div>
                <span className="font-semibold text-[#111215]">&lt;15ms Latency:</span>{' '}
                <span className="text-[#504D48]">Socket.IO rooms</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#D9381E] font-bold">03/</span>
              <div>
                <span className="font-semibold text-[#111215]">Continuous SSR:</span>{' '}
                <span className="text-[#504D48]">NAAC Criteria 1–7</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="text-[#D9381E] font-bold">04/</span>
              <div>
                <span className="font-semibold text-[#111215]">Tenancy:</span>{' '}
                <span className="text-[#504D48]">Autonomous re-theming</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------- BELOW-THE-FOLD DETAILS ----------------- */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 border-t border-[#E3DDD4] bg-[#F4EFEB]/30">
        <div className="p-4 bg-[#FFFFFF] border border-[#E3DDD4] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono-code text-[11px] uppercase tracking-wider text-[#D9381E] font-medium">
              ACTIVE NODE CONTEXT // {activeRole.toUpperCase()}
            </span>
            <p className="text-sm font-sans-body text-[#111215] mt-0.5 font-medium">
              {current.headline}
            </p>
          </div>
          <div className="text-left sm:text-right shrink-0">
            <span className="font-mono-code text-[11px] text-[#8A857D] block">
              Telemetry Metric
            </span>
            <span className="font-mono-code text-xs font-semibold text-[#111215]">
              {current.stat}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
