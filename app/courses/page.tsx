// src/app/courses/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { courses } from '@/data/courses';

export default function CoursesPage() {
  const [filter, setFilter] = useState<string>('all');

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
            Our Programs
          </span>
          <h1
            className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up"
            style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.2s' }}
          >
            Our <span className="text-primary">Courses</span>
          </h1>
          <p className="text-white text-xl max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Choose from our range of professionally designed courses to master traditional and modern art forms.
          </p>
        </div>
      </section>

      {/* Course Filter */}
      <section className="py-8 bg-white sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'btn-mint-gradient text-white shadow-lg'
                  : 'bg-primary-lighter text-dark-light hover:bg-primary/20'
              }`}
            >
              All Courses
            </button>
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setFilter(course.slug)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                  filter === course.slug
                    ? 'btn-mint-gradient text-white shadow-lg'
                    : 'bg-primary-lighter text-dark-light hover:bg-primary/20'
                }`}
              >
                <span>{course.icon}</span>
                <span>{course.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courses
              .filter((course) => filter === 'all' || course.slug === filter)
              .map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}