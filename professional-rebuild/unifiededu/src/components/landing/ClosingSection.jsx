import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, GraduationCap, School, Shield } from 'lucide-react';

export default function ClosingSection() {
  const ingressCards = [
    {
      role: 'Student Portal',
      path: '/student/auth',
      code: 'PORTAL // 01',
      desc: 'Attendance tracker, timetables, AI resume builder, personalized skill roadmaps, and verified student KYC.',
      action: 'Enter Student Portal',
      icon: GraduationCap,
    },
    {
      role: 'Faculty Desk',
      path: '/fc/auth',
      code: 'PORTAL // 02',
      desc: 'Class timetables, automated leave substitution, department analytics, and one-click NAAC Criterion 2.3 SSR exports.',
      action: 'Access Faculty Desk',
      icon: School,
    },
    {
      role: 'Institute Console',
      path: '/in/auth',
      code: 'PORTAL // 03',
      desc: 'NAAC/NIRF accreditation dashboard, student/faculty governance, AISHE reporting, and Central Authority regulatory feeds.',
      action: 'Open Institute Console',
      icon: Shield,
    },
  ];

  return (
    <section className="py-20 bg-[#FBF9F5] landing-hairline-b relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#D9381E] font-medium">
              05 // Authentication Ingress
            </span>
            <span className="text-[#8A857D] font-mono-code text-xs">·</span>
            <span className="font-mono-code text-xs uppercase tracking-widest text-[#8A857D]">
              Three Verified Doors
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#111215] tracking-tight leading-[1.08]">
            Enter your operational domain.
          </h2>

          <p className="mt-4 font-sans-body text-base text-[#504D48] leading-relaxed">
            Role isolation ensures security, compliance, and clarity. Select your role to access 
            your synchronized workspace.
          </p>
        </div>

        {/* 3 Large Architectural Ingress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ingressCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.role}
                className="group p-6 md:p-8 bg-[#FFFFFF] border border-[#E3DDD4] hover:border-[#111215] transition-all flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#F4EFEB]">
                    <span className="font-mono-code text-xs uppercase text-[#8A857D]">
                      {card.code}
                    </span>
                    <Icon size={18} className="text-[#111215] group-hover:text-[#D9381E] transition-colors" />
                  </div>

                  <h3 className="font-display text-2xl text-[#111215] group-hover:text-[#D9381E] transition-colors">
                    {card.role}
                  </h3>

                  <p className="font-sans-body text-xs text-[#504D48] leading-relaxed mt-3">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-8">
                  <Link
                    to={card.path}
                    className="w-full py-3 px-4 bg-[#111215] group-hover:bg-[#D9381E] text-[#FBF9F5] font-mono-code text-xs uppercase tracking-wider flex items-center justify-between transition-colors"
                  >
                    <span>{card.action}</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

