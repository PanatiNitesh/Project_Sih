import React, { useState, Suspense, lazy } from 'react';
import LandingNav from '../components/landing/LandingNav';
import HeroSection from '../components/landing/HeroSection';
import FragmentationSection from '../components/landing/FragmentationSection';
import RoleChaptersSection from '../components/landing/RoleChaptersSection';
import NoticePropagationSection from '../components/landing/NoticePropagationSection';
import ThemingDemoSection from '../components/landing/ThemingDemoSection';
import ClosingSection from '../components/landing/ClosingSection';
import LandingFooter from '../components/landing/LandingFooter';
import SceneFallback from '../components/landing/SceneFallback';

// Lazy-load the 3D Three.js scene chunk to ensure sub-2s initial paint
const CampusScene3D = lazy(() => import('../components/landing/CampusScene3D'));

export default function LandingPage() {
  const [activeRole, setActiveRole] = useState('student');
  const [isNoticeBroadcasting, setIsNoticeBroadcasting] = useState(false);

  const handleScrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#111215] font-sans-body selection:bg-[#D9381E] selection:text-[#FBF9F5] flex flex-col overflow-x-hidden">
      {/* Editorial Navigation */}
      <LandingNav onScrollToSection={handleScrollToSection} />

      {/* Main Semantic Content */}
      <main className="flex-1">
        {/* 1. Hero with Integrated 3D Mesh */}
        <HeroSection
          activeRole={activeRole}
          onSelectRole={setActiveRole}
          SceneComponent={
            <Suspense fallback={<SceneFallback />}>
              <CampusScene3D
                activeRole={activeRole}
                onSelectRole={setActiveRole}
                isNoticeBroadcasting={isNoticeBroadcasting}
              />
            </Suspense>
          }
        />

        {/* 2. The Problem: Disconnected Silos vs Unified Mesh */}
        <FragmentationSection />

        {/* 3. Three Role Chapters with Live Built-in-Code UI Fragments */}
        <RoleChaptersSection
          activeRole={activeRole}
          onSelectRole={setActiveRole}
        />

        {/* 4. Real-Time Notice Propagation Simulation */}
        <NoticePropagationSection
          onTriggerNoticePulse={setIsNoticeBroadcasting}
        />

        {/* 5. Per-Institute Brand & Identity Theming */}
        <ThemingDemoSection />

        {/* 6. Closing Section: The Three Roles Ingress */}
        <ClosingSection />
      </main>

      {/* Quiet Architectural Footer */}
      <LandingFooter />
    </div>
  );
}
