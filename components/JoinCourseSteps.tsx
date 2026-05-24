// src/components/JoinCourseSteps.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { joinSteps } from '@/data/courses';

const JoinCourseSteps: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-primary-lighter to-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 left-0 w-40 h-40 rounded-full bg-primary/10 blur-2xl" />
      <div className="absolute bottom-20 right-0 w-60 h-60 rounded-full bg-accent/10 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-sm font-semibold mb-4">
            How to Join
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-dark mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            How to{' '}
            <span className="gradient-text">Join</span>{' '}
            Our Course
          </h2>
          <p className="text-dark-light max-w-2xl mx-auto text-lg">
            From registration to certification — your creative journey in 5 simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {joinSteps.map((step, index) => (
              <div
                key={step.step}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 card-hover relative group">
                  {/* Step number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white text-sm font-bold flex items-center justify-center shadow-md z-10">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4 mt-4 group-hover:scale-125 transition-transform duration-300">
                    {step.icon}
                  </div>

                  <h3
                    className="text-lg font-bold text-dark mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-dark-light text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </div>

                {/* Arrow between steps (desktop) */}
                {index < joinSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-primary-lighter flex items-center justify-center text-primary-dark text-sm">
                      →
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-3 px-10 py-4 btn-mint-gradient text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            <span>Register Now</span>
            <span className="text-xl group-hover:rotate-12 transition-transform">🎓</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinCourseSteps;