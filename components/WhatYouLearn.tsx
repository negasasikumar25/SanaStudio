// src/components/WhatYouLearn.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { courses } from '@/data/courses';

const WhatYouLearn: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-primary-lighter relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-sm font-semibold mb-4">
            Our Courses
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold text-dark mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What You&apos;ll{' '}
            <span className="gradient-text">Learn</span>
          </h2>
          <p className="text-dark-light max-w-2xl mx-auto text-lg">
            Discover our carefully curated courses designed to transform your creative passion into professional skills.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-500 card-hover ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${course.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-semibold">
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-dark mb-2 group-hover:text-primary-dark transition-colors"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {course.title}
                </h3>
                <p className="text-dark-light text-sm mb-4 line-clamp-2">
                  {course.shortDescription}
                </p>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div>
                    {course.discountPrice ? (
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-primary-dark">₹{course.discountPrice.toLocaleString()}</span>
                        <span className="text-sm text-gray-400 line-through">₹{course.price.toLocaleString()}</span>
                      </div>
                    ) : (
                      <span className="text-lg font-bold text-primary-dark">₹{course.price.toLocaleString()}</span>
                    )}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary-lighter flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="text-primary-dark group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
                  </div>
                </div>
              </div>

              {/* Hover overlay line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          ))}
        </div>

        {/* View all button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            href="/courses"
            className="inline-flex items-center space-x-2 px-8 py-4 btn-mint-gradient text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            <span>View All Courses</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;