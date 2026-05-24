// src/components/TeamCard.tsx
'use client';

import React from 'react';
import { TeamMember } from '@/types';

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  return (
    <div
      className="group bg-white rounded-3xl overflow-hidden shadow-lg card-hover animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${member.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover overlay content */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span className="inline-block px-3 py-1 rounded-full glass-white text-white text-xs font-semibold">
            {member.specialization}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 text-center">
        <h3
          className="text-xl font-bold text-dark mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {member.name}
        </h3>
        <p className="text-primary-dark text-sm font-semibold mb-3">{member.role}</p>
        <p className="text-dark-light text-sm leading-relaxed">{member.bio}</p>

        {/* Social links */}
        <div className="flex justify-center space-x-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {['📘', '📸', '💼'].map((icon, i) => (
            <span
              key={i}
              className="w-8 h-8 rounded-full bg-primary-lighter flex items-center justify-center text-sm cursor-pointer hover:bg-primary hover:scale-110 transition-all"
            >
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;