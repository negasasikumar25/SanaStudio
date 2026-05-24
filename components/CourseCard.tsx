// src/components/CourseCard.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Course } from '@/types';

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, index }) => {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg card-hover animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Discount badge */}
      {course.discountPrice && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full shadow-lg">
          {Math.round(((course.price - course.discountPrice) / course.price) * 100)}% OFF
        </div>
      )}

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${course.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-dark/20 to-transparent" />

        {/* Icon overlay */}
        <div className="absolute top-4 right-4 w-14 h-14 rounded-2xl glass-white flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
          {course.icon}
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-semibold">
            {course.duration}
          </span>
          <span className="px-3 py-1 rounded-full glass-white text-white text-xs font-semibold">
            {course.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-xl font-bold text-dark mb-3 group-hover:text-primary-dark transition-colors"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {course.title}
        </h3>
        <p className="text-dark-light text-sm mb-4 leading-relaxed line-clamp-2">
          {course.shortDescription}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {course.certificateIncluded && (
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary-dark font-medium">
              📜 Certificate
            </span>
          )}
          {course.materialsIncluded && (
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary-dark font-medium">
              🎨 Materials Included
            </span>
          )}
          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary-dark font-medium">
            👥 {course.batchSize}
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            {course.discountPrice ? (
              <div>
                <span className="text-2xl font-bold text-primary-dark">₹{course.discountPrice.toLocaleString()}</span>
                <span className="text-sm text-gray-400 line-through ml-2">₹{course.price.toLocaleString()}</span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-primary-dark">₹{course.price.toLocaleString()}</span>
            )}
          </div>
          <div className="flex items-center space-x-2 text-primary-dark font-semibold text-sm group-hover:text-accent transition-colors">
            <span>View Details</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </Link>
  );
};

export default CourseCard;