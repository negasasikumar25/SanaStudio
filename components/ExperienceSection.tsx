// src/components/ExperienceSection.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { stats } from '@/data/courses';

const Counter: React.FC<{ end: string; isVisible: boolean }> = ({ end, isVisible }) => {
  const [count, setCount] = useState(0);
  const numericEnd = parseInt(end.replace(/[^0-9]/g, ''));
  const suffix = end.replace(/[0-9]/g, '');

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = numericEnd / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericEnd) {
        setCount(numericEnd);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, numericEnd]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const ExperienceSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-gradient-to-r from-mint-light to-mint"
    >
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-[200px] text-white/10 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>10+</div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 text-primary-dark text-sm font-semibold mb-4 backdrop-blur-xl border border-white/20">
              Why Choose Us
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-dark mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Over a Decade of{' '}
              <span className="text-dark font-semibold">Excellence</span> in Art Education
            </h2>
            <p className="text-slate-700 text-lg mb-6 leading-relaxed">
              With more than 10 years of experience, Sana Studio has been at the forefront of
              handcrafted education. Our commitment to quality instruction and <span className="text-primary-dark font-semibold">personalized attention</span>
              has helped thousands of students discover and nurture their <span className="text-primary-dark font-semibold">creative talents</span>.
            </p>

            <div className="space-y-4">
              {[
                'Expert instructors with industry experience',
                'Small batch sizes for personalized learning',
                'Hands-on training with quality materials',
                'Recognized certificates upon completion',
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center space-x-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                  }`}
                  style={{ transitionDelay: `${(i + 2) * 200}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl p-8 text-center bg-white/20 border border-white/25 backdrop-blur-2xl shadow-2xl group hover:bg-white/30 hover:border-primary/30 transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-4xl text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
                  {stat.icon}
                </div>
                <div
                  className="text-4xl lg:text-5xl font-bold text-primary-dark mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  <Counter end={stat.number} isVisible={isVisible} />
                </div>
                <div className="text-slate-600 text-sm font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;