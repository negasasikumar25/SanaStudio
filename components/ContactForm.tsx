// src/components/ContactForm.tsx
'use client';

import React, { useState } from 'react';
import { courses } from '@/data/courses';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', course: '', message: '' });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-sm font-semibold text-dark mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm group-hover:border-primary/50"
          />
        </div>
        <div className="group">
          <label className="block text-sm font-semibold text-dark mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm group-hover:border-primary/50"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="group">
          <label className="block text-sm font-semibold text-dark mb-2">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm group-hover:border-primary/50"
          />
        </div>
        <div className="group">
          <label className="block text-sm font-semibold text-dark mb-2">Course Interest</label>
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm group-hover:border-primary/50 bg-white"
          >
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.slug}>
                {course.icon} {course.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="group">
        <label className="block text-sm font-semibold text-dark mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your interest or any questions you have..."
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 text-sm resize-none group-hover:border-primary/50"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isSubmitted}
        className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl ${
          isSubmitted
            ? 'bg-green-500'
            : isSubmitting
            ? 'bg-primary/70 cursor-not-allowed'
            : 'btn-mint-gradient hover:brightness-110 hover:scale-[1.02]'
        }`}
      >
        {isSubmitted ? (
          <span className="flex items-center justify-center space-x-2">
            <span>✅</span>
            <span>Message Sent Successfully!</span>
          </span>
        ) : isSubmitting ? (
          <span className="flex items-center justify-center space-x-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Sending...</span>
          </span>
        ) : (
          <span className="flex items-center justify-center space-x-2">
            <span>Send Message</span>
            <span>✨</span>
          </span>
        )}
      </button>
    </form>
  );
};

export default ContactForm;