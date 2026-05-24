// src/components/HeroSection.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slide = {
    title: 'Craft Beautiful Art with',
    highlight: 'Sana Studio',
    description: 'Learn traditional embroidery techniques from expert artisans',

    carouselImages: [
      '/images/aari.jpg',
      '/images/mehndi.jpg',
      '/images/silk.jpg',
      '/images/hoop.jpg',
    ],
  };

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % slide.carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slide.carouselImages.length]);

  return (
    <section className="relative flex items-center overflow-hidden py-12 md:py-16 bg-[linear-gradient(160deg,_var(--cream)_0%,_var(--mint-light)_60%,_var(--mint)_100%)]">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{ transform: `translateY(${offset * 0.08}px)` }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-16 right-16 w-72 h-72 rounded-full bg-primary/15 blur-3xl float-animation" />
      <div className="absolute bottom-16 left-16 w-96 h-96 rounded-full bg-accent/15 blur-3xl float-animation-delayed" />

      {/* Floating decorative shapes */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-primary/40 float-animation" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-accent/40 float-animation-delayed" />
      <div className="absolute bottom-1/4 left-1/3 w-5 h-5 rounded-full bg-primary/30 float-animation" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass-white rounded-full px-4 py-2 mb-4 animate-fade-in-up shadow-lg">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary-dark">New Batches Starting Soon</span>
            </div>

            {/* Heading */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1
                className="text-5xl lg:text-7xl font-bold text-dark leading-tight mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {slide.title}
              </h1>
              <h1
                className="text-5xl lg:text-7xl font-bold leading-tight mb-3 text-primary-dark"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {slide.highlight}
              </h1>
            </div>

            <p
              className="text-lg text-dark-light mb-4 max-w-lg animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              {slide.description}. Join Sana Studio and unleash your creative potential with our expert-led courses.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 mb-6 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <Link
                href="/courses"
                className="group px-8 py-4 btn-mint-gradient text-white rounded-full font-semibold shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Courses</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/90 text-charcoal rounded-full font-semibold hover:bg-white transition-all duration-300 hover:scale-105 shadow-md"
              >
                Get in Touch
              </Link>
            </div>

            {/* Stats mini */}
            <div className="hero-stats animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              {[
                { num: '500+', label: 'Students' },
                { num: '4', label: 'Craft Courses' },
                { num: '100%', label: 'Certified' },
              ].map((stat, i) => (
                <div key={i} className="stat-item">
                  <span className="stat-num">{stat.num}</span>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image carousel */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              {/* Image carousel */}
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl">
                {slide.carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Hero image ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                ))}
              </div>
              
              {/* Carousel indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {slide.carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              {/* Orbiting elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl glass flex items-center justify-center text-2xl animate-bounce-slow shadow-lg">
                ✨
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-2xl glass flex items-center justify-center text-2xl animate-bounce-slow shadow-lg" style={{ animationDelay: '1s' }}>
                🎓
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-full glass flex items-center justify-center text-lg animate-pulse-slow">
                💫
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - REMOVED */}
      </div>
    </section>
  );
};

export default HeroSection;