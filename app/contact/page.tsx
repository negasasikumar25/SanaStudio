// src/app/contact/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
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
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url("/images/banner.jpg")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/85 to-primary-dark/70" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <span className="inline-block px-5 py-1.5 rounded-full glass text-primary text-sm font-semibold mb-4 animate-fade-in-up">
            Get in Touch
          </span>
          <h1
            className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up"
            style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.2s' }}
          >
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-white text-xl max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Have questions or ready to enroll? Reach out to us and we'll get back to you within 24 hours
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white relative -mt-12 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '📍', title: 'Visit Us', info: '123, Main Street, Anna Nagar, Chennai - 600040', color: 'from-primary/20 to-primary/5' },
              { icon: '📞', title: 'Call Us', info: '+91 98765 43210', color: 'from-accent/20 to-accent/5' },
              { icon: '📧', title: 'Email Us', info: 'info@sanastudio.com', color: 'from-primary/20 to-primary/5' },
              { icon: '⏰', title: 'Working Hours', info: 'Mon - Sat: 9 AM - 7 PM', color: 'from-accent/20 to-accent/5' },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 text-center card-hover shadow-lg animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-dark-light text-sm">{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gradient-to-b from-white to-primary-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h2
                  className="text-3xl font-bold text-dark mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Send us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-dark-light mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Map */}
            <div>
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-full min-h-[500px]">
                <div className="p-6 border-b border-gray-100">
                  <h3
                    className="text-2xl font-bold text-dark"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Our <span className="gradient-text">Location</span>
                  </h3>
                  <p className="text-dark-light text-sm mt-1">Find us on the map</p>
                </div>
                <div className="h-[calc(100%-88px)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.0080692529887!2d80.20929!3d13.08268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6a747f5d!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sana Studio Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or CTA */}
      <section className="py-16 bg-primary-lighter">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">💬</div>
          <h2
            className="text-3xl font-bold text-dark mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Prefer to Talk to Someone?
          </h2>
          <p className="text-dark-light text-lg mb-8">
            Call us directly or send a WhatsApp message for instant support.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+919876543210"
              className="px-8 py-4 btn-mint-gradient text-white rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>📞</span>
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>💬</span>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}