// src/app/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import WhatYouLearn from '@/components/WhatYouLearn';
import ExperienceSection from '@/components/ExperienceSection';
import JoinCourseSteps from '@/components/JoinCourseSteps';
import ParallaxSection from '@/components/ParallaxSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Marquee Section */}
      <section className="relative py-2 overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--mint-dark), var(--mint-deep))' }}>
        <div className="marquee-container">
          <div className="marquee-content text-white text-sm md:text-base font-semibold tracking-wide flex items-center">
            <span className="marquee-item">Hoop Art</span>
            <span className="marquee-divider">✦</span>
            <span className="marquee-item">Zardozi Work</span>
            <span className="marquee-divider">✦</span>
            <span className="marquee-item">Thread Earrings</span>
            <span className="marquee-divider">✦</span>
            <span className="marquee-item">Arabic Mehndi</span>
            <span className="marquee-divider">✦</span>
            <span className="marquee-item">Wall Hangings</span>
            <span className="marquee-divider">✦</span>
            <span className="marquee-item">Embroidery Frames</span>
            <span className="marquee-divider">✦</span>
            <span className="marquee-item">Floral Designs</span>
            <span className="marquee-divider">✦</span>
            <span className="marquee-item">Beadwork</span>
            <span className="marquee-divider">✦</span>
            <span className="marquee-item">Hoop Art</span>
            <span className="marquee-divider">✦</span>
            <span className="marquee-item">Zardozi Work</span>
            <span className="marquee-divider">✦</span>
            <span className="marquee-item">Thread Earrings</span>
            <span className="marquee-divider">✦</span>
            <span className="marquee-item">Arabic Mehndi</span>
            <span className="marquee-divider">✦</span>
            <span className="marquee-item">Wall Hangings</span>
          </div>
        </div>
      </section>

      <WhatYouLearn />
      <ExperienceSection />
      <JoinCourseSteps />
      <ParallaxSection />
      <Footer />
    </main>
  );
}