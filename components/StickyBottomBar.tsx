import React from 'react';
import { Phone, MessageSquare, Download } from 'lucide-react';

interface StickyBottomBarProps {
  onEnquire: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onEnquire }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-3 md:hidden">
      <div className="flex gap-3">
        <a 
          href="tel:+919876543210"
          className="flex flex-col items-center justify-center min-w-[60px] text-gray-600 hover:text-primary"
        >
          <Phone size={20} />
          <span className="text-[10px] font-medium mt-1">Call</span>
        </a>
        
        <button 
          onClick={onEnquire}
          className="flex-1 bg-primary text-white rounded-full py-3 px-6 font-bold shadow-lg flex items-center justify-center gap-2 hover:bg-secondary active:scale-95 transition-all"
        >
          <MessageSquare size={18} />
          Talk to Counsellor
        </button>
      </div>
    </div>
  );
};