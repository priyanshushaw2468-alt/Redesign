import React from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Background */}
      <div className="relative h-[65vh] md:h-[50vh] overflow-hidden">
        <img 
          src="https://picsum.photos/id/175/1920/1080" 
          alt="Ecole Globale Campus" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center z-10">
          <div className="mb-2 flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full border border-white/20">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-white text-xs font-medium tracking-wide">ADMISSIONS OPEN 2026-27</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl text-white font-bold mb-4 leading-tight">
            Discover Dehradun's <br/>
            <span className="text-accent italic">Elite Schools</span>
          </h1>
          
          <p className="text-gray-200 max-w-xl text-sm md:text-base font-medium mb-8">
            Curated insights into the finest academic institutions in the valley of Dehradun.
          </p>

          {/* Quick Stats/Trust Badges */}
          <div className="flex gap-6 md:gap-12 text-white/80">
            <div className="text-center">
              <span className="block text-2xl font-bold text-white">25+</span>
              <span className="text-[10px] uppercase tracking-widest">Schools</span>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-white">5k+</span>
              <span className="text-[10px] uppercase tracking-widest">Reviews</span>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div className="text-center">
              <span className="block text-2xl font-bold text-white">100%</span>
              <span className="text-[10px] uppercase tracking-widest">Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar - Floating overlap */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="bg-white rounded-xl shadow-xl p-3 md:p-4 flex flex-col md:flex-row gap-3 border border-gray-100">
          
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by school name..." 
              className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
            />
          </div>

          {/* Filters Row */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            <button className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium whitespace-nowrap text-gray-700">
              Board <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium whitespace-nowrap text-gray-700">
              Fees <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm font-medium whitespace-nowrap text-gray-700">
              Type <ChevronDown size={14} />
            </button>
            <button className="flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-lg text-sm font-medium whitespace-nowrap shadow-md">
              <SlidersHorizontal size={14} /> More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};