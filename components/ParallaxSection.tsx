// src/components/ParallaxSection.tsx
'use client';

import React, { useEffect, useState } from 'react';

const ParallaxSection: React.FC = () => {
  const [offset, setOffset] = useState(0);

  const studentWorks = [
    {
      title: 'Floral Dream Frame',
      category: 'Embroidery Hoop Art',
      student: 'by Nithya Krishnan',
      rating: 5,
      image: '/images/dream.jpg',
    },
    {
      title: 'Bridal Blouse Design',
      category: 'Aari Work',
      student: 'by Deepa Murali',
      rating: 5,
      image: '/images/bridal.jpg',
    },
    {
      title: 'Silk Thread Earrings',
      category: 'Silk Thread Jewellery',
      student: 'by Kavitha Devi',
      rating: 5,
      image: '/images/earring.jpg',
    },
    {
      title: 'Wedding Theme',
      category: 'Embroidery Hoop Art',
      student: 'by Meera Raj',
      rating: 4,
      image: '/images/wedding.jpg',
    },
    {
      title: 'Flowers in Bloom',
      category: 'Embroidery Hoop Art',
      student: 'by Priya Sundar',
      rating: 5,
      image: '/images/flowers.jpg',
    },
    {
      title: 'Silk Thread Bangle',
      category: 'Silk Thread Jewellery',
      student: 'by Anjali Rao',
      rating: 4,
      image: '/images/bangle.jpg',
    },
    {
      title: 'Bridal Blouse Design',
      category: 'Aari Work',
      student: 'by Deepika Sharma',
      rating: 5,
      image: '/images/blouse1.jpg',
    },
    {
      title: 'Hand Design',
      category: 'Mehndi Design',
      student: 'by Suma Nair',
      rating: 4,
      image: '/images/mehndi1.jpg',
    },
    {
      title: 'Coffee Lover',
      category: 'Embroidery Hoop Art',
      student: 'by Radha Menon',
      rating: 5,
      image: '/images/hoop2.jpg',
    },
    {
      title: 'Simple Hand Design',
      category: 'Mehndi Design',
      student: 'by Leela Nandakumar',
      rating: 5,
      image: '/images/mehndi2.jpg',
    },
    {
      title: 'Silk Thread Jewellery Set',
      category: 'Silk Thread Jewellery',
      student: 'by Shruti Reddy',
      rating: 4,
      image: '/images/silk1.jpg',
    },
    {
      title: 'Simple Leg Design',
      category: 'Mehndi Design',
      student: 'by Aarthi Kumar',
      rating: 5,
      image: '/images/mehndi3.jpg',
    },
  ];

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-dark">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1400)',
          transform: `translateY(${offset * 0.04}px)`,
        }}
      />
      <div className="absolute inset-0 bg-primary-dark/90" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-primary text-sm font-semibold mb-4 backdrop-blur-xl border border-white/20">
            Student Work
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Beautiful Creations by Our Students
          </h2>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed">
            Real work by real students — see what you could create after completing our courses.
          </p>
        </div>

        <div className="mt-14 overflow-hidden bg-transparent">
          <div className="marquee-container pb-8 sm:pb-10">
            <div className="marquee-content gap-6">
              {[...studentWorks, ...studentWorks].map((work, index) => (
                <div
                  key={index}
                  className="min-w-[260px] sm:min-w-[300px] lg:min-w-[320px] flex-shrink-0 overflow-hidden rounded-[28px] bg-slate-950/90 shadow-2xl card-hover"
                >
                  <div
                    className="h-[220px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${work.image})` }}
                  />
                  <div className="px-5 py-5 bg-slate-950">
                    <p className="text-[11px] uppercase tracking-[0.35em] text-emerald-300 font-semibold mb-3">
                      {work.category}
                    </p>
                    <h3 className="text-xl font-semibold text-white mb-2">{work.title}</h3>
                    <p className="text-sm text-slate-400 mb-3">{work.student}</p>
                    <div className="flex items-center gap-1 text-amber-300 text-sm">
                      {'★'.repeat(work.rating)}{'☆'.repeat(5 - work.rating)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;