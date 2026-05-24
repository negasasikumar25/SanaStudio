// src/components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { courses } from '@/data/courses';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-dark to-gray-900 text-white overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full">
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,80 1440,60 L1440,0 L0,0 Z"
            fill="#A8E6CF"
            fillOpacity="0.1"
          />
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Studio */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Sana Studio
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Sana Studio is a premier handcraft training center dedicated to preserving and promoting traditional art forms. We offer professional courses in Aari Work, Mehndi Design, Silk Thread Jewellery, and Embroidery Hoop Art.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Accepting new enrollments</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Our Courses', href: '/courses' },
                { name: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-all duration-300 text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
              {courses.map((course) => (
                <li key={course.id}>
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-gray-400 hover:text-primary transition-all duration-300 text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-primary transition-all duration-300" />
                    <span>{course.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              <span>Contact Details</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-400 group cursor-pointer">
                <span className="text-primary text-lg mt-0.5 group-hover:scale-125 transition-transform">📍</span>
                <span className="group-hover:text-white transition-colors">
                  123, Main Street, Anna Nagar,<br />Chennai - 600040, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400 group cursor-pointer">
                <span className="text-primary text-lg group-hover:scale-125 transition-transform">📞</span>
                <span className="group-hover:text-white transition-colors">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400 group cursor-pointer">
                <span className="text-primary text-lg group-hover:scale-125 transition-transform">📧</span>
                <span className="group-hover:text-white transition-colors">info@sanastudio.com</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-400 group cursor-pointer">
                <span className="text-primary text-lg group-hover:scale-125 transition-transform">⏰</span>
                <span className="group-hover:text-white transition-colors">Mon - Sat: 9:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center space-x-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
              <span>Follow Us</span>
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Stay connected with us on social media for updates, tutorials, and inspiration.
            </p>
            <div className="flex space-x-3">
              {[
                { name: 'Facebook', icon: 'f', color: 'hover:bg-blue-600' },
                { name: 'Instagram', icon: '📷', color: 'hover:bg-pink-600' },
                { name: 'YouTube', icon: '▶', color: 'hover:bg-red-600' },
                { name: 'WhatsApp', icon: '💬', color: 'hover:bg-green-600' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-sm ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-l-xl bg-white/10 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary"
                />
                <button className="px-4 py-2 btn-mint-gradient rounded-r-xl text-sm font-semibold hover:shadow-lg transition-all text-white">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Sana Studio. All rights reserved. Made with 💚
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;