import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

export default function LandingFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111215] text-[#FBF9F5] border-t border-[#2A2A2E] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#2A2A2E]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoImg} alt="CampusVersa Logo" className="w-8 h-8 object-contain" />
              <span className="font-sans font-bold text-lg text-[#FBF9F5]">
                CampusVersa
              </span>
            </div>
            <p className="font-sans-body text-xs text-[#A09D96] max-w-sm leading-relaxed">
              Unified institutional fabric connecting Students, Faculty, Institutes, 
              and Regulatory Authorities under a single real-time verified state machine.
            </p>
            <p className="font-mono-code text-[11px] text-[#D9381E] uppercase">
              Smart India Hackathon 2025 // Problem Statement SIH-25252
            </p>
          </div>

          {/* Quick Role Links */}
          <div className="md:col-span-3 space-y-3 font-mono-code text-xs uppercase">
            <p className="text-[#8A857D] tracking-widest text-[11px]">Portals</p>
            <ul className="space-y-2">
              <li>
                <Link to="/student/auth" className="text-[#E3DDD4] hover:text-[#D9381E] transition-colors">
                  01 // Student Ingress
                </Link>
              </li>
              <li>
                <Link to="/fc/auth" className="text-[#E3DDD4] hover:text-[#D9381E] transition-colors">
                  02 // Faculty Desk
                </Link>
              </li>
              <li>
                <Link to="/in/auth" className="text-[#E3DDD4] hover:text-[#D9381E] transition-colors">
                  03 // Institute Console
                </Link>
              </li>
            </ul>
          </div>

          {/* Standards & Compliance */}
          <div className="md:col-span-4 space-y-3 font-mono-code text-xs">
            <p className="text-[#8A857D] uppercase tracking-widest text-[11px]">Institutional Standards</p>
            <ul className="space-y-1.5 text-[#A09D96] text-[11px]">
              <li>· NAAC Criteria 1–7 Continuous Audit</li>
              <li>· NIRF & AISHE Metric Pipeline</li>
              <li>· DigiLocker / Aadhaar KYC Verification</li>
              <li>· Socket.IO Bidirectional Transport</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-code text-[11px] text-[#8A857D]">
          <div>
            <span>© 2025–2026 CampusVersa. Built for Indian Higher Education.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="hover:text-[#FBF9F5] transition-colors uppercase tracking-wider"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

