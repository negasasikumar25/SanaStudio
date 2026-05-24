// src/app/about/page.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { courses } from '@/data/courses';

const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

export default function AboutPage() {
  const heroView = useInView();
  const storyView = useInView();
  const visionView = useInView();
  const offerView = useInView();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url("/images/banner.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/85 to-primary-dark/70" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-primary text-sm font-semibold mb-4 animate-fade-in-up">
            Who We Are
          </span>
          <h1
            className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up"
            style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.2s' }}
          >
            About <span className="text-primary">Sana Studio</span>
          </h1>
          <p className="text-white text-xl max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Master the art of Aari work, embroidery, and fashion design from the comfort of your home.
          </p>
        </div>
      </section>

      {/* About the Studio */}
      <section className="py-24 bg-white relative overflow-hidden" ref={storyView.ref}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-700 ${storyView.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2
                className="text-4xl lg:text-5xl font-bold text-dark mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Where <span className="gradient-text">Tradition</span> Meets Creativity
              </h2>
              <p className="text-dark-light text-lg leading-relaxed mb-6">
                Founded over a decade ago, Sana Studio began as a small workshop with a big dream —
                to make traditional Indian art forms accessible to everyone. What started as a passion
                project by our founder Sana Fathima has now grown into one of the most respected
                handcraft training centers in the region.
              </p>
              <p className="text-dark-light text-lg leading-relaxed mb-6">
                We believe that every person has a creative spark waiting to be ignited. Our carefully
                designed courses, expert instructors, and nurturing environment provide the perfect
                setting for students to discover and develop their artistic talents.
              </p>
              <p className="text-dark-light text-lg leading-relaxed">
                Over the years, we have trained more than 2,000 students, many of whom have gone on
                to establish successful businesses or pursue their passion professionally. Our
                commitment to quality education and student success continues to drive everything we do.
              </p>
            </div>

            <div className={`relative transition-all duration-700 delay-300 ${storyView.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                <div className="w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600)' }}
                  />
                </div>
                {/* Floating cards */}
                <div className="absolute -bottom-8 -left-8 glass rounded-2xl p-4 shadow-xl float-animation">
                  <div className="text-3xl mb-1">🪡</div>
                  <div className="text-sm font-bold text-dark">5+ Years</div>
                  <div className="text-xs text-dark-light">of Excellence</div>
                </div>
                <div className="absolute -top-8 -right-8 glass rounded-2xl p-4 shadow-xl float-animation-delayed">
                  <div className="text-3xl mb-1">👩‍🎓</div>
                  <div className="text-sm font-bold text-dark">500+</div>
                  <div className="text-xs text-dark-light">Students Trained</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-24 bg-gradient-to-b from-primary-lighter to-white relative overflow-hidden" ref={visionView.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${visionView.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-sm font-semibold mb-4">
              Our Vision & Values
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-dark mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What <span className="gradient-text">Drives</span> Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Our Mission',
                description: 'To empower individuals with creative skills through high-quality handcraft education, preserving traditional art forms while embracing modern techniques and design sensibilities.',
              },
              {
                icon: '👁️',
                title: 'Our Vision',
                description: 'To be the leading handcraft training institute recognized for producing skilled artisans and creative entrepreneurs who carry forward the rich legacy of Indian traditional arts.',
              },
              {
                icon: '💎',
                title: 'Our Values',
                description: 'Excellence in teaching, passion for artistry, respect for tradition, innovation in approach, and an unwavering commitment to each student\'s creative growth and success.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 shadow-lg card-hover text-center transition-all duration-700 ${
                  visionView.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3
                  className="text-xl font-bold text-dark mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-dark-light leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-gradient-to-b from-primary-lighter to-white relative overflow-hidden" ref={offerView.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 ${offerView.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-sm font-semibold mb-4">
              What We Offer
            </span>
            <h2
              className="text-4xl lg:text-5xl font-bold text-dark mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Choose <span className="gradient-text">Sana Studio</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🎓', title: 'Expert Instructors', desc: 'Learn from artisans with 5-12 years of experience in their respective crafts.' },
              { icon: '👐', title: 'Hands-on Training', desc: 'Practice-focused curriculum with all materials and tools provided.' },
              { icon: '📏', title: 'Small Batch Sizes', desc: 'Limited students per batch ensuring personalized attention and guidance.' },
              { icon: '📜', title: 'Certified Courses', desc: 'Receive recognized certificates upon successful course completion.' },
              { icon: '⏰', title: 'Flexible Timings', desc: 'Multiple batch timings including morning, evening, and weekend options.' },
              { icon: '🚀', title: 'Career Support', desc: 'Business guidance and exhibition opportunities for aspiring entrepreneurs.' },
            ].map((item, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl p-8 shadow-lg card-hover transition-all duration-700 ${
                  offerView.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-lighter flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h3
                  className="text-xl font-bold text-dark mb-3 group-hover:text-primary-dark transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-dark-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}