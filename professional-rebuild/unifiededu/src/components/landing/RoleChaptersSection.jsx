import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Check, AlertCircle, Clock, BookOpen, 
  Award, Shield, FileSpreadsheet, Users, ChevronRight, Sparkles 
} from 'lucide-react';

export default function RoleChaptersSection({ activeRole, onSelectRole }) {
  const [activeTab, setActiveTab] = useState(activeRole || 'student');

  // Keep in sync with parent when user switches from 3D or buttons
  const handleTabChange = (role) => {
    setActiveTab(role);
    if (onSelectRole) onSelectRole(role);
  };

  return (
    <section id="roles" className="py-20 bg-[#F4EFEB]/50 landing-hairline-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#D9381E] font-medium">
              02 // Four Autonomous Portals
            </span>
            <span className="text-[#8A857D] font-mono-code text-xs">·</span>
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#8A857D]">
              Role-Isolated Views
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#111215] tracking-tight leading-[1.08]">
            Built for specific operational rhythms.
          </h2>
          <p className="mt-3 font-sans-body text-base text-[#504D48] leading-relaxed">
            Each role interacts with their own purpose-built surface. No student ever sees an accreditation 
            form; no faculty member wastes time tallying paper attendance.
          </p>
        </div>

        {/* Tab Control Bar */}
        <div className="flex border-b border-[#E3DDD4] mb-8 overflow-x-auto">
          {[
            { id: 'student', label: '01 / Student Life & Roadmaps' },
            { id: 'faculty', label: '02 / Faculty Desk & SSR' },
            { id: 'institute', label: '03 / Institute & Central Authority' },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-5 py-3 text-xs font-mono-code uppercase tracking-wider border-b-2 whitespace-nowrap transition-all ${
                  isActive
                    ? 'border-[#D9381E] text-[#111215] font-semibold bg-[#FFFFFF]'
                    : 'border-transparent text-[#504D48] hover:text-[#111215] hover:border-[#8A857D]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Role Content Panels */}
        {activeTab === 'student' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-block px-2.5 py-1 bg-[#FFFFFF] border border-[#E3DDD4] text-xs font-mono-code text-[#111215]">
                PORTAL: /STUDENT/AUTH
              </div>
              <h3 className="font-display text-3xl text-[#111215] tracking-tight">
                Academic progress without bureaucratic friction.
              </h3>
              <p className="text-sm text-[#504D48] leading-relaxed">
                Students track live attendance calculations, receive official verified notices over 
                WebSocket, generate ATS-screened resumes, and verify their student status via DigiLocker KYC.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#111215] text-[#FBF9F5] flex items-center justify-center text-[10px] font-mono-code shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111215] font-mono-code uppercase">
                      Predictive Attendance Safeguard
                    </h4>
                    <p className="text-xs text-[#504D48]">
                      Alerts before falling below 75% threshold with exact classes required to recover.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#111215] text-[#FBF9F5] flex items-center justify-center text-[10px] font-mono-code shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111215] font-mono-code uppercase">
                      AI Career Engine & ATS Scorer
                    </h4>
                    <p className="text-xs text-[#504D48]">
                      Builds customized resumes from student projects and runs real-time ATS keyword matching.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#111215] text-[#FBF9F5] flex items-center justify-center text-[10px] font-mono-code shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111215] font-mono-code uppercase">
                      DigiLocker KYC Credentials
                    </h4>
                    <p className="text-xs text-[#504D48]">
                      Aadhaar-linked unalterable student identity for examinations and scholarship audits.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/student/auth"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#111215] hover:bg-[#D9381E] text-[#FBF9F5] font-mono-code text-xs uppercase tracking-wider transition-colors"
                >
                  <span>Enter Student Portal</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Live UI Fragments Built in Code */}
            <div className="lg:col-span-7 space-y-4">
              {/* Fragment 1: Real Attendance Line */}
              <div className="p-4 bg-[#FFFFFF] border border-[#E3DDD4] shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F4EFEB]">
                  <span className="font-mono-code text-xs font-semibold uppercase text-[#111215]">
                    Live Attendance Ledger // Semester 6
                  </span>
                  <span className="font-mono-code text-[11px] text-[#16A34A] bg-[#DCFCE7] px-2 py-0.5">
                    OVERALL: 82.4%
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-[#111215]">CS401 Distributed Systems</span>
                      <span className="font-mono-code text-[#16A34A] font-semibold">88.5% (23/26)</span>
                    </div>
                    <div className="w-full bg-[#F4EFEB] h-2">
                      <div className="bg-[#111215] h-2" style={{ width: '88.5%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[#111215]">CS403 Compiler Architecture</span>
                        <span className="px-1.5 py-0.2 bg-[#FEE2E2] text-[#D9381E] font-mono-code text-[10px]">
                          ALERT: 2 classes required
                        </span>
                      </div>
                      <span className="font-mono-code text-[#D9381E] font-semibold">72.0% (18/25)</span>
                    </div>
                    <div className="w-full bg-[#F4EFEB] h-2">
                      <div className="bg-[#D9381E] h-2" style={{ width: '72%' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Fragment 2: AI Resume & KYC Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#FFFFFF] border border-[#E3DDD4]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-code text-[11px] uppercase text-[#8A857D]">
                      DigiLocker KYC
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#16A34A]" />
                  </div>
                  <p className="text-xs font-semibold text-[#111215]">
                    Govt. Aadhaar Verified
                  </p>
                  <p className="font-mono-code text-[11px] text-[#504D48] mt-1">
                    Hash: 0x9f4a...88b2 · DL-ID #29402
                  </p>
                </div>

                <div className="p-4 bg-[#FFFFFF] border border-[#E3DDD4]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono-code text-[11px] uppercase text-[#8A857D]">
                      AI Resume ATS Score
                    </span>
                    <span className="font-mono-code text-xs font-bold text-[#16A34A]">89 / 100</span>
                  </div>
                  <p className="text-xs font-semibold text-[#111215]">
                    Role: Systems Engineer
                  </p>
                  <p className="text-[11px] text-[#504D48] mt-1">
                    Matches: Raft, gRPC, Docker, Golang
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'faculty' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-block px-2.5 py-1 bg-[#FFFFFF] border border-[#E3DDD4] text-xs font-mono-code text-[#111215]">
                PORTAL: /FC/AUTH
              </div>
              <h3 className="font-display text-3xl text-[#111215] tracking-tight">
                No manual registers. Instant NAAC SSR data collation.
              </h3>
              <p className="text-sm text-[#504D48] leading-relaxed">
                Faculty manage classes with automated roll calls, push broadcast notices to entire 
                batches in one click, and export required NAAC Criterion 2.3 teaching-learning dossiers automatically.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#111215] text-[#FBF9F5] flex items-center justify-center text-[10px] font-mono-code shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111215] font-mono-code uppercase">
                      One-Click Batch Notice Broadcast
                    </h4>
                    <p className="text-xs text-[#504D48]">
                      Dispatches official timetable revisions to all student devices in milliseconds via WebSocket.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#111215] text-[#FBF9F5] flex items-center justify-center text-[10px] font-mono-code shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111215] font-mono-code uppercase">
                      Automated SSR Metric Computation
                    </h4>
                    <p className="text-xs text-[#504D48]">
                      LMS engagement and student evaluation logs feed directly into accreditation forms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/fc/auth"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#111215] hover:bg-[#D9381E] text-[#FBF9F5] font-mono-code text-xs uppercase tracking-wider transition-colors"
                >
                  <span>Enter Faculty Desk</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Live UI Fragments Built in Code */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 bg-[#FFFFFF] border border-[#E3DDD4] shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F4EFEB]">
                  <span className="font-mono-code text-xs font-semibold uppercase text-[#111215]">
                    Faculty Schedule & Live Roster
                  </span>
                  <span className="font-mono-code text-[11px] text-[#504D48]">
                    ROOM 402 // IN SESSION
                  </span>
                </div>

                <div className="p-3 bg-[#FBF9F5] border border-[#E3DDD4] flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs font-bold text-[#111215]">CS401 Distributed Systems (Lecture)</p>
                    <p className="font-mono-code text-[11px] text-[#504D48]">Batch: CSE-B (68 Enrolled)</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2 py-0.5 bg-[#DCFCE7] text-[#16A34A] font-mono-code text-xs font-bold">
                      64 PRESENT
                    </span>
                    <span className="block font-mono-code text-[10px] text-[#8A857D] mt-0.5">
                      94.1% Attendance
                    </span>
                  </div>
                </div>

                {/* SSR Fragment */}
                <div className="p-3 bg-[#FFFFFF] border border-[#E3DDD4]">
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-mono-code text-[11px] font-semibold text-[#111215]">
                      NAAC Criterion 2.3.1 Feed
                    </span>
                    <span className="font-mono-code text-[10px] text-[#16A34A]">
                      AUTO-CALCULATED
                    </span>
                  </div>
                  <p className="text-xs text-[#504D48]">
                    Experiential Learning: 14 lab projects logged, 100% rubrics mapped to CO-PO matrix.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'institute' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-block px-2.5 py-1 bg-[#FFFFFF] border border-[#E3DDD4] text-xs font-mono-code text-[#111215]">
                PORTAL: /IN/AUTH
              </div>
              <h3 className="font-display text-3xl text-[#111215] tracking-tight">
                Accreditation, governance, and Central Authority oversight.
              </h3>
              <p className="text-sm text-[#504D48] leading-relaxed">
                Deans and administrators oversee NAAC Criteria 1 through 7, generate NIRF and AISHE 
                dossiers with one click, while the Central Authority layer monitors regulatory adherence and grievance queues.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#111215] text-[#FBF9F5] flex items-center justify-center text-[10px] font-mono-code shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111215] font-mono-code uppercase">
                      Continuous NAAC Readiness (A++ Target)
                    </h4>
                    <p className="text-xs text-[#504D48]">
                      All 7 criteria scorecards update dynamically from ongoing institutional operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#111215] text-[#FBF9F5] flex items-center justify-center text-[10px] font-mono-code shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#111215] font-mono-code uppercase">
                      Central Authority Grievance Ledger
                    </h4>
                    <p className="text-xs text-[#504D48]">
                      Zero unresolved complaints lost in paper files; transparent escalation workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/in/auth"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#111215] hover:bg-[#D9381E] text-[#FBF9F5] font-mono-code text-xs uppercase tracking-wider transition-colors"
                >
                  <span>Enter Institute Console</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right Live UI Fragments Built in Code */}
            <div className="lg:col-span-7 space-y-4">
              <div className="p-4 bg-[#FFFFFF] border border-[#E3DDD4] shadow-sm">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F4EFEB]">
                  <span className="font-mono-code text-xs font-semibold uppercase text-[#111215]">
                    Accreditation Status // NAAC Cycle 3
                  </span>
                  <span className="font-mono-code text-xs font-bold text-[#111215] bg-[#F4EFEB] px-2 py-0.5">
                    PROJECTED CGPA: 3.72 / 4.00 (A++)
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { name: 'Criterion 1: Curricular Aspects', score: '3.80 / 4.00', pct: 95 },
                    { name: 'Criterion 2: Teaching-Learning & Evaluation', score: '3.75 / 4.00', pct: 93 },
                    { name: 'Criterion 3: Research, Innovations & Extension', score: '3.50 / 4.00', pct: 87 },
                    { name: 'Criterion 5: Student Support & Progression', score: '3.85 / 4.00', pct: 96 },
                  ].map((crit) => (
                    <div key={crit.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-[#111215] font-medium">{crit.name}</span>
                        <span className="font-mono-code text-[#111215] font-semibold">{crit.score}</span>
                      </div>
                      <div className="w-full bg-[#F4EFEB] h-1.5">
                        <div className="bg-[#111215] h-1.5" style={{ width: `${crit.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-[#F4EFEB] flex items-center justify-between">
                  <span className="font-mono-code text-[11px] text-[#504D48]">
                    AISHE & NIRF Export: Data packets validated
                  </span>
                  <span className="font-mono-code text-[11px] text-[#16A34A] font-bold">
                    [ READY FOR AUDIT ]
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

