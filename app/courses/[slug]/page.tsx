// src/app/courses/[slug]/page.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getCourseBySlug, courses } from '@/data/courses';

const useInView = (threshold = 0.2) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
};

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const course = getCourseBySlug(slug);
  const [offset, setOffset] = useState(0);

  const topicsView = useInView();
  const benefitsView = useInView();
  const pricingView = useInView();

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!course) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <div className="text-6xl mb-4">😕</div>
            <h1 className="text-3xl font-bold text-dark mb-4">Course Not Found</h1>
            <Link href="/courses" className="text-primary-dark hover:underline">
              ← Back to Courses
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${course.image})`,
            transform: `translateY(${offset * 0.3}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6 animate-fade-in-up">
                <Link href="/courses" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Courses
                </Link>
                <span className="text-gray-500">/</span>
                <span className="text-primary text-sm">{course.title}</span>
              </div>

              <div className="text-7xl mb-6 animate-fade-in-up float-animation" style={{ animationDelay: '0.1s' }}>
                {course.icon}
              </div>

              <h1
                className="text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in-up"
                style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.2s' }}
              >
                {course.title}
              </h1>

              <p className="text-gray-300 text-lg mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                {course.shortDescription}
              </p>

              <div className="flex flex-wrap gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                <span className="px-4 py-2 rounded-full glass text-white text-sm">⏱ {course.duration}</span>
                <span className="px-4 py-2 rounded-full glass text-white text-sm">📊 {course.level}</span>
                <span className="px-4 py-2 rounded-full glass text-white text-sm">👥 {course.batchSize}</span>
                {course.certificateIncluded && (
                  <span className="px-4 py-2 rounded-full glass text-white text-sm">📜 Certificate</span>
                )}
              </div>

              <div className="flex items-center space-x-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Link
                  href="/contact"
                  className="px-8 py-4 btn-mint-gradient text-white rounded-full font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Enroll Now ✨
                </Link>
                <div>
                  {course.discountPrice ? (
                    <div>
                      <span className="text-3xl font-bold text-primary">₹{course.discountPrice.toLocaleString()}</span>
                      <span className="text-lg text-gray-400 line-through ml-2">₹{course.price.toLocaleString()}</span>
                    </div>
                  ) : (
                    <span className="text-3xl font-bold text-primary">₹{course.price.toLocaleString()}</span>
                  )}
                </div>
              </div>
            </div>

            {/* Right side glass card */}
            <div className="hidden lg:block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="glass rounded-3xl p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Course Highlights
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Duration', value: course.duration, icon: '⏱' },
                    { label: 'Level', value: course.level, icon: '📊' },
                    { label: 'Batch Size', value: course.batchSize, icon: '👥' },
                    { label: 'Schedule', value: course.schedule, icon: '📅' },
                    { label: 'Materials', value: course.materialsIncluded ? 'Included' : 'Not Included', icon: '🎨' },
                    { label: 'Certificate', value: course.certificateIncluded ? 'Yes' : 'No', icon: '📜' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between text-sm border-b border-white/10 pb-3">
                      <span className="text-gray-400 flex items-center space-x-2">
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </span>
                      <span className="text-white font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Description */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-dark mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About This Course
          </h2>
          <p className="text-dark-light text-lg leading-relaxed">
            {course.longDescription}
          </p>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-lighter" ref={topicsView.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${topicsView.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-sm font-semibold mb-4">
              Curriculum
            </span>
            <h2
              className="text-4xl font-bold text-dark"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Topics <span className="gradient-text">Covered</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {course.topics.map((topic, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-5 shadow-md card-hover flex items-start space-x-4 transition-all duration-500 ${
                  topicsView.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={topic.image || '/images/default-topic.svg'}
                    alt={topic.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/images/default-topic.svg';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="w-10 h-10 rounded-xl bg-primary-lighter flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-2">
                    <span className="text-sm font-bold text-primary-dark group-hover:text-white">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-dark group-hover:text-primary-dark transition-colors">
                    {topic.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Benefits */}
      <section className="py-16 bg-primary-lighter" ref={benefitsView.ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-700 ${benefitsView.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary-dark text-sm font-semibold mb-4">
              Why This Course
            </span>
            <h2
              className="text-4xl font-bold text-dark"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Course <span className="gradient-text">Benefits</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {course.benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 shadow-md card-hover flex items-start space-x-4 transition-all duration-500 ${
                  benefitsView.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-dark-light font-medium group-hover:text-dark transition-colors">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white" ref={pricingView.ref}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-700 ${pricingView.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="gradient-border">
              <div className="bg-white rounded-[14px] p-10 text-center">
                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
                  Special Offer
                </span>
                <h2
                  className="text-3xl font-bold text-dark mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Enroll in {course.title}
                </h2>

                <div className="flex items-center justify-center space-x-4 mb-6">
                  {course.discountPrice ? (
                    <>
                      <span className="text-5xl font-bold text-primary-dark">
                        ₹{course.discountPrice.toLocaleString()}
                      </span>
                      <span className="text-2xl text-gray-400 line-through">
                        ₹{course.price.toLocaleString()}
                      </span>
                      <span className="px-3 py-1 bg-accent text-white text-sm font-bold rounded-full">
                        Save ₹{(course.price - course.discountPrice).toLocaleString()}
                      </span>
                    </>
                  ) : (
                    <span className="text-5xl font-bold text-primary-dark">
                      ₹{course.price.toLocaleString()}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 text-sm">
                  <div className="p-3 rounded-xl bg-primary-lighter">
                    <div className="font-semibold text-dark">📅 {course.duration}</div>
                    <div className="text-dark-light text-xs">Duration</div>
                  </div>
                  <div className="p-3 rounded-xl bg-primary-lighter">
                    <div className="font-semibold text-dark">👥 {course.batchSize}</div>
                    <div className="text-dark-light text-xs">Batch Size</div>
                  </div>
                  <div className="p-3 rounded-xl bg-primary-lighter">
                    <div className="font-semibold text-dark">📜 Certificate</div>
                    <div className="text-dark-light text-xs">Included</div>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-10 py-4 btn-mint-gradient text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>Enroll Now</span>
                  <span>✨</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Courses */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-dark text-center mb-12"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Explore Other <span className="gradient-text">Courses</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {courses
              .filter((c) => c.slug !== slug)
              .map((c, index) => (
                <Link
                  key={c.id}
                  href={`/courses/${c.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
                >
                  <div className="relative h-40 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${c.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="text-3xl">{c.icon}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-dark group-hover:text-primary-dark transition-colors">
                      {c.title}
                    </h3>
                    <p className="text-sm text-dark-light mt-1">{c.duration} • {c.level}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}