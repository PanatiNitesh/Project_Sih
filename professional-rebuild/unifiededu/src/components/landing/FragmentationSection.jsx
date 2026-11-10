import React, { useState } from 'react';
import { AlertTriangle, CheckCircle2, ArrowRight, Unlink, Link2 } from 'lucide-react';

export default function FragmentationSection() {
  const [viewMode, setViewMode] = useState('unified'); // 'fragmented' | 'unified'

  const silos = [
    {
      num: '01',
      actor: 'Student Ingress',
      isolatedIssue: 'WhatsApp circular leaks & paper registers',
      isolatedDetail: 'Attendance recorded on paper sheets; student discovers shortage at exam hall door. Circulars forwarded in unverified groups.',
      unifiedFix: 'Single verified attendance ledger + Socket.IO circulars',
      unifiedMetric: '100% auditable biometrics & digital notice dispatch',
    },
    {
      num: '02',
      actor: 'Faculty Daily Operations',
      isolatedIssue: 'Fourteen redundant Excel spreadsheets',
      isolatedDetail: 'Faculty re-enters student marks across internal tests, lab logs, LMS, and departmental accreditation binders manually.',
      unifiedFix: 'Single entry point, automatic cascading sync',
      unifiedMetric: 'Zero duplicate data entry across semester',
    },
    {
      num: '03',
      actor: 'Institute Administration',
      isolatedIssue: 'Quarterly accreditation panic before inspections',
      isolatedDetail: 'NAAC SSR preparation takes 3 months of administrative shutdown to dredge files, verify faculty publications, and tally student ratios.',
      unifiedFix: 'Continuous live criterion calculation',
      unifiedMetric: 'Criteria 1–7 calculated continuously from daily LMS/ERP events',
    },
    {
      num: '04',
      actor: 'Central Authority Layer',
      isolatedIssue: 'Post-hoc audits & unresolved student grievances',
      isolatedDetail: 'Regulatory bodies rely on unverified self-declarations; grievance appeals take 60+ days through physical paper queues.',
      unifiedFix: 'Immutable audit trail & automated escalation',
      unifiedMetric: 'Central regulatory oversight with verifiable timestamped logs',
    },
  ];

  return (
    <section id="fragmentation" className="py-20 bg-[#FBF9F5] landing-hairline-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#D9381E] font-medium">
              01 // The Problem
            </span>
            <span className="text-[#8A857D] font-mono-code text-xs">·</span>
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#8A857D]">
              Systemic Decoupling
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#111215] leading-[1.08] tracking-tight">
            Campuses do not suffer from lack of software. They suffer from having seven tools that refuse to talk.
          </h2>

          <p className="mt-4 font-sans-body text-base text-[#504D48] leading-relaxed">
            When student records live in one portal, faculty timetables on another, and accreditation dossiers in shared folders, 
            coordination tax drains hundreds of staff hours every semester.
          </p>
        </div>

        {/* State Toggle: The Contrast */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-4 border-b border-[#E3DDD4]">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('fragmented')}
              className={`px-4 py-2 text-xs font-mono-code uppercase tracking-wider transition-all border ${
                viewMode === 'fragmented'
                  ? 'bg-[#111215] text-[#FBF9F5] border-[#111215]'
                  : 'bg-[#FFFFFF] text-[#504D48] border-[#E3DDD4] hover:border-[#111215]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Unlink size={13} className="text-[#D9381E]" />
                <span>The Fragmented Reality (Current)</span>
              </span>
            </button>

            <button
              onClick={() => setViewMode('unified')}
              className={`px-4 py-2 text-xs font-mono-code uppercase tracking-wider transition-all border ${
                viewMode === 'unified'
                  ? 'bg-[#111215] text-[#FBF9F5] border-[#111215]'
                  : 'bg-[#FFFFFF] text-[#504D48] border-[#E3DDD4] hover:border-[#111215]'
              }`}
            >
              <span className="flex items-center gap-2">
                <Link2 size={13} className="text-[#16A34A]" />
                <span>The CampusVersa Mesh (Unified)</span>
              </span>
            </button>
          </div>

          <span className="font-mono-code text-xs text-[#8A857D]">
            STATE COMPARISON // 4 INSTITUTIONAL NODES
          </span>
        </div>

        {/* Asymmetrical Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {silos.map((silo) => (
            <div
              key={silo.num}
              className={`p-6 border transition-all ${
                viewMode === 'fragmented'
                  ? 'bg-[#FFFFFF] border-[#E3DDD4] hover:border-[#D9381E]/60'
                  : 'bg-[#FFFFFF] border-[#111215]/20 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
              }`}
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#F4EFEB]">
                <span className="font-mono-code text-2xl font-bold text-[#111215]">
                  {silo.num}
                </span>
                <span className="font-mono-code text-[11px] uppercase tracking-wider px-2 py-0.5 bg-[#F4EFEB] text-[#504D48]">
                  {silo.actor}
                </span>
              </div>

              {viewMode === 'fragmented' ? (
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <AlertTriangle size={15} className="text-[#D9381E] shrink-0 mt-0.5" />
                    <h3 className="text-sm font-semibold text-[#111215]">
                      {silo.isolatedIssue}
                    </h3>
                  </div>
                  <p className="text-xs text-[#504D48] leading-relaxed">
                    {silo.isolatedDetail}
                  </p>
                  <div className="pt-3 border-t border-[#F4EFEB]">
                    <span className="font-mono-code text-[10px] text-[#D9381E] uppercase tracking-wider block">
                      Vulnerability
                    </span>
                    <span className="font-mono-code text-xs text-[#111215]">
                      Unverified data drift
                    </span>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-[#16A34A] shrink-0 mt-0.5" />
                    <h3 className="text-sm font-semibold text-[#111215]">
                      {silo.unifiedFix}
                    </h3>
                  </div>
                  <p className="text-xs text-[#504D48] leading-relaxed">
                    {silo.unifiedMetric}
                  </p>
                  <div className="pt-3 border-t border-[#F4EFEB]">
                    <span className="font-mono-code text-[10px] text-[#16A34A] uppercase tracking-wider block">
                      Synchronized State
                    </span>
                    <span className="font-mono-code text-xs text-[#111215]">
                      Zero manual reconciliation
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Data Convergence Ledger Banner */}
        <div className="mt-8 p-4 md:p-6 bg-[#111215] text-[#FBF9F5] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D9381E]" />
              <span className="font-mono-code text-xs uppercase tracking-widest text-[#D9381E]">
                Central Authority Binding Layer
              </span>
            </div>
            <p className="font-sans text-sm text-[#E3DDD4] max-w-2xl">
              By tying student verification, faculty logs, and institute metrics to an immutable 
              central authority schema, audits happen continuously rather than every 5 years under stress.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="font-mono-code text-xs text-[#8A857D] uppercase">
              NAAC / NIRF / AISHE Verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

