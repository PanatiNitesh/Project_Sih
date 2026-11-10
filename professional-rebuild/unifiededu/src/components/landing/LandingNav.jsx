import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import logoImg from '../../assets/logo.png';

export default function LandingNav({ onScrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/95 backdrop-blur-md landing-hairline-b h-16 w-full flex items-center">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left: Brand Icon & Name pushed to the extreme left */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5 group focus:outline-none shrink-0"
        >
          <img 
            src={logoImg} 
            alt="CampusVersa Crest" 
            className="w-7 h-7 object-contain transition-transform group-hover:scale-105" 
          />
          <span className="font-sans font-bold tracking-tight text-base sm:text-lg text-[#111215] leading-none whitespace-nowrap">
            CampusVersa
          </span>
        </Link>

        {/* Center: The Four Numbered Links without "//" */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-9 2xl:gap-12">
          <button
            onClick={() => onScrollToSection('fragmentation')}
            className="text-[11px] sm:text-xs uppercase font-mono-code tracking-[0.06em] text-[#504D48] hover:text-[#111215] transition-colors focus:outline-none whitespace-nowrap cursor-pointer"
          >
            01 The Problem
          </button>
          <button
            onClick={() => onScrollToSection('roles')}
            className="text-[11px] sm:text-xs uppercase font-mono-code tracking-[0.06em] text-[#504D48] hover:text-[#111215] transition-colors focus:outline-none whitespace-nowrap cursor-pointer"
          >
            02 Role Portals
          </button>
          <button
            onClick={() => onScrollToSection('realtime')}
            className="text-[11px] sm:text-xs uppercase font-mono-code tracking-[0.06em] text-[#504D48] hover:text-[#111215] transition-colors focus:outline-none whitespace-nowrap cursor-pointer"
          >
            03 Real-Time Mesh
          </button>
          <button
            onClick={() => onScrollToSection('theming')}
            className="text-[11px] sm:text-xs uppercase font-mono-code tracking-[0.06em] text-[#504D48] hover:text-[#111215] transition-colors focus:outline-none whitespace-nowrap cursor-pointer"
          >
            04 Institute Branding
          </button>
        </nav>

        {/* Right: Decongested Clean Action Buttons */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#F4EFEB] border border-[#E3DDD4] text-[#504D48] font-mono-code text-[11px] tracking-wider whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] inline-block" />
            <span>MESH ONLINE</span>
          </div>

          <Link
            to="/student/auth"
            className="text-xs font-mono-code uppercase text-[#504D48] hover:text-[#111215] transition-colors whitespace-nowrap"
          >
            SIGN IN
          </Link>

          <Link
            to="/in/auth"
            className="px-3.5 py-2 text-xs font-mono-code uppercase tracking-wider text-[#FBF9F5] bg-[#111215] hover:bg-[#D9381E] transition-colors whitespace-nowrap shadow-sm"
          >
            INSTITUTE CONSOLE
          </Link>
        </div>

        {/* Mobile / Tablet Menu Button (< 1024px) */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            to="/student/auth"
            className="px-2.5 py-1 text-xs font-mono-code bg-[#111215] text-[#FBF9F5]"
          >
            Sign In
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-1.5 text-[#111215] border border-[#E3DDD4] hover:bg-[#F4EFEB] cursor-pointer"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 border-b border-[#E3DDD4] bg-[#FBF9F5] px-6 py-6 space-y-4 shadow-lg z-50">
          <div className="space-y-3 font-mono-code text-xs uppercase tracking-wider">
            <button
              onClick={() => {
                onScrollToSection('fragmentation');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-1 text-[#504D48] hover:text-[#111215]"
            >
              01 The Problem
            </button>
            <button
              onClick={() => {
                onScrollToSection('roles');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-1 text-[#504D48] hover:text-[#111215]"
            >
              02 Role Portals
            </button>
            <button
              onClick={() => {
                onScrollToSection('realtime');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-1 text-[#504D48] hover:text-[#111215]"
            >
              03 Real-Time Mesh
            </button>
            <button
              onClick={() => {
                onScrollToSection('theming');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-1 text-[#504D48] hover:text-[#111215]"
            >
              04 Institute Branding
            </button>
          </div>

          <div className="pt-4 border-t border-[#E3DDD4] space-y-2">
            <p className="font-mono-code text-[11px] uppercase tracking-wider text-[#8A857D] mb-2">
              PORTAL ACCESS
            </p>
            <Link
              to="/student/auth"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 bg-[#FFFFFF] border border-[#E3DDD4] text-xs font-mono-code uppercase text-[#111215]"
            >
              <span>Student Portal</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link
              to="/fc/auth"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 bg-[#FFFFFF] border border-[#E3DDD4] text-xs font-mono-code uppercase text-[#111215]"
            >
              <span>Faculty Desk</span>
              <ArrowUpRight size={14} />
            </Link>
            <Link
              to="/in/auth"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 bg-[#111215] text-[#FBF9F5] text-xs font-mono-code uppercase"
            >
              <span>Institute Console</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
