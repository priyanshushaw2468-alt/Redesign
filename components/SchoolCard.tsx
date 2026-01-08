import React from 'react';
import { School } from '../types';
import { MapPin, Users, GraduationCap, Coins, Star, Trophy, CheckCircle2, ArrowRight } from 'lucide-react';

interface SchoolCardProps {
  school: School;
  onEnquire: (schoolName: string) => void;
}

export const SchoolCard: React.FC<SchoolCardProps> = ({ school, onEnquire }) => {
  const isFeatured = school.isFeatured;

  return (
    <div 
      className={`
        relative flex flex-col md:flex-row bg-surface rounded-xl overflow-hidden transition-all duration-300
        ${isFeatured ? 'ring-2 ring-accent shadow-gold transform md:-translate-y-1' : 'border border-gray-100 shadow-card hover:shadow-lg'}
      `}
    >
      {/* Featured Ribbon */}
      {isFeatured && (
        <div className="absolute top-4 left-0 z-20 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-r-full shadow-md flex items-center gap-1">
          <Trophy size={12} className="text-primary" />
          <span>#1 Top Rated</span>
        </div>
      )}

      {/* Image Section */}
      <div className="w-full md:w-1/3 lg:w-1/4 h-56 md:h-auto relative group">
        <img 
          src={school.image} 
          alt={school.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
        
        {/* Mobile Overlay Content */}
        <div className="absolute bottom-3 left-3 md:hidden text-white">
          <div className="flex items-center gap-1 text-accent mb-1">
            <Star size={14} fill="#D4AF37" />
            <span className="font-bold text-sm">{school.rating}</span>
            <span className="text-xs text-gray-200">({school.reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-1 leading-tight">
                {school.rank}. {school.name}
              </h3>
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <MapPin size={14} className="mr-1 text-accent" />
                {school.location}
              </div>
            </div>
            {/* Desktop Rating */}
            <div className="hidden md:flex flex-col items-end">
              <div className="flex items-center gap-1 bg-background px-2 py-1 rounded-lg">
                <span className="font-bold text-primary">{school.rating}</span>
                <Star size={14} fill="#D4AF37" className="text-accent" />
              </div>
              <span className="text-xs text-gray-400 mt-1">{school.reviewCount} Reviews</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {school.tags.map((tag, idx) => (
              <span key={idx} className="text-xs font-medium px-2 py-1 rounded-md bg-background text-gray-600 border border-gray-100">
                {tag}
              </span>
            ))}
          </div>

          {/* Description - Truncated on mobile */}
          <p className="text-sm text-gray-600 mb-6 line-clamp-2 md:line-clamp-none leading-relaxed">
            {school.description}
          </p>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-3 gap-2 md:gap-4 mb-6 border-t border-b border-gray-100 py-4 bg-background/50 rounded-lg px-2">
            <div className="flex flex-col items-center justify-center text-center border-r border-gray-200 last:border-0">
              <div className="bg-white p-2 rounded-full mb-2 shadow-sm">
                <Coins size={18} className="text-accent" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Annual Fees</span>
              <span className="text-xs md:text-sm font-bold text-primary">{school.fees}</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center border-r border-gray-200 last:border-0">
              <div className="bg-white p-2 rounded-full mb-2 shadow-sm">
                <GraduationCap size={18} className="text-accent" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Board</span>
              <span className="text-xs md:text-sm font-bold text-primary">{school.board}</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="bg-white p-2 rounded-full mb-2 shadow-sm">
                <Users size={18} className="text-accent" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Ratio</span>
              <span className="text-xs md:text-sm font-bold text-primary">{school.ratio}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <button 
            onClick={() => onEnquire(school.name)}
            className={`
              flex-1 py-3 px-4 rounded-full font-semibold text-sm transition-all flex items-center justify-center gap-2
              ${isFeatured 
                ? 'bg-gradient-to-r from-accent to-yellow-600 text-white shadow-md hover:shadow-lg' 
                : 'bg-primary text-white hover:bg-secondary'}
            `}
          >
            Enquire Now <ArrowRight size={16} />
          </button>
          <button className="flex-1 py-3 px-4 rounded-full font-semibold text-sm border-2 border-gray-200 text-gray-600 hover:border-primary hover:text-primary transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};