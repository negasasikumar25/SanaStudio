// src/components/Navbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { courses } from '@/data/courses';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-white/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
              S
            </div>
            <div>
              <span
                className="text-2xl font-bold text-dark"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Sana
              </span>
              <span
                className="text-2xl font-light text-primary-dark ml-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Studio
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-underline ${
                isActive('/')
                  ? 'bg-primary text-white shadow-md'
                  : 'text-dark hover:text-primary-dark hover:bg-transparent'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-underline ${
                isActive('/about')
                  ? 'bg-primary text-white shadow-md'
                  : 'text-dark hover:text-primary-dark hover:bg-transparent'
              }`}
            >
              About
            </Link>

            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCoursesDropdownOpen(true)}
              onMouseLeave={() => setIsCoursesDropdownOpen(false)}
            >
              <button
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-1 ${
                  pathname.startsWith('/courses')
                    ? 'bg-primary text-white shadow-md'
                    : 'text-dark hover:text-primary-dark hover:bg-transparent'
                }`}
              >
                <span>Courses</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isCoursesDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute top-full left-0 mt-2 w-72 rounded-2xl overflow-hidden transition-all duration-300 ${
                  isCoursesDropdownOpen
                    ? 'opacity-100 visible translate-y-0'
                    : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="glass-white shadow-xl rounded-2xl p-2 border border-white/30">
                  <Link
                    href="/courses"
                    className="block px-4 py-3 rounded-xl text-sm font-semibold text-primary-dark hover:text-primary-dark hover:bg-transparent transition-all duration-200 border-b border-primary/10 mb-1"
                  >
                    📚 All Courses
                  </Link>
                  {courses.map((course) => (
                    <Link
                      key={course.id}
                      href={`/courses/${course.slug}`}
                      className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm text-dark hover:text-primary-dark hover:bg-transparent transition-all duration-200 group"
                    >
                      <span className="text-xl group-hover:scale-125 transition-transform duration-200">
                        {course.icon}
                      </span>
                      <div>
                        <div className="font-medium">{course.title}</div>
                        <div className="text-xs text-dark-light">{course.duration}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-underline ${
                isActive('/contact')
                  ? 'bg-primary text-white shadow-md'
                  : 'text-dark hover:text-primary-dark hover:bg-transparent'
              }`}
            >
              Contact Us
            </Link>

            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 btn-mint-gradient text-white rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Registration
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-transparent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-dark transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-dark transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-dark transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="glass-white rounded-2xl p-4 shadow-xl space-y-2">
            <Link
              href="/"
              className="block px-4 py-3 rounded-xl text-sm font-medium text-dark hover:text-primary-dark hover:bg-transparent transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              🏠 Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 rounded-xl text-sm font-medium text-dark hover:text-primary-dark hover:bg-transparent transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ℹ️ About
            </Link>
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-dark hover:text-primary-dark hover:bg-transparent transition-all"
                onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
              >
                <span>📚 Courses</span>
                <svg
                  className={`w-4 h-4 transition-transform ${isCoursesDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {isCoursesDropdownOpen && (
                <div className="pl-4 space-y-1 mt-1">
                  {courses.map((course) => (
                    <Link
                      key={course.id}
                      href={`/courses/${course.slug}`}
                      className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm text-dark-light hover:text-primary-dark hover:bg-transparent transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>{course.icon}</span>
                      <span>{course.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="block px-4 py-3 rounded-xl text-sm font-medium text-dark hover:text-primary-dark hover:bg-transparent transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              📞 Contact Us
            </Link>
            <Link
              href="/contact"
              className="block text-center px-4 py-3 btn-mint-gradient text-white rounded-xl text-sm font-semibold shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enroll Now ✨
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;