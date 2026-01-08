import React, { useState } from 'react';
import { Header } from './components/Header';
import { SchoolCard } from './components/SchoolCard';
import { StickyBottomBar } from './components/StickyBottomBar';
import { LeadModal } from './components/LeadModal';
import { SCHOOLS } from './constants';
import { HelpCircle, ChevronRight, Mail } from 'lucide-react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);

  const handleEnquire = (schoolName: string) => {
    setSelectedSchool(schoolName);
    setIsModalOpen(true);
  };

  const handleGlobalEnquire = () => {
    setSelectedSchool(null);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content: School List */}
          <div className="flex-1 space-y-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-serif text-2xl font-bold text-primary">Top 10 Schools in Dehradun</h2>
              <span className="text-sm text-gray-500">Showing {SCHOOLS.length} results</span>
            </div>

            {SCHOOLS.map((school) => (
              <SchoolCard 
                key={school.id} 
                school={school} 
                onEnquire={handleEnquire} 
              />
            ))}
            
            <div className="text-center py-8">
               <button className="text-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors">
                 Load More Schools
               </button>
            </div>
          </div>

          {/* Sidebar (Desktop Only) */}
          <aside className="hidden lg:block w-80 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-card border border-gray-100 sticky top-4">
              <h3 className="font-serif text-xl font-bold mb-4 flex items-center gap-2">
                <HelpCircle className="text-accent" /> Need Help?
              </h3>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Confused about which school is best for your child? Our experts have guided 5000+ parents.
              </p>
              <button 
                onClick={handleGlobalEnquire}
                className="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-secondary transition-colors mb-3 shadow-lg"
              >
                Talk to an Expert
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                12 Counsellors Online
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-primary mb-4">Popular Searches</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                {['Girls Boarding Schools', 'IB Schools in Dehradun', 'Schools with Horse Riding', 'Affordable Boarding Schools'].map((item, i) => (
                  <li key={i} className="flex items-center justify-between cursor-pointer hover:text-accent transition-colors group">
                    {item}
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white pt-16 pb-24 md:pb-16 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h2 className="font-serif text-2xl font-bold mb-4">Ecole Globale.</h2>
              <p className="text-gray-400 max-w-sm mb-6">
                Your trusted partner in finding the perfect educational institution for your child's bright future.
              </p>
              <div className="flex gap-4">
                 {/* Social placeholders */}
                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors cursor-pointer">
                    <Mail size={18} />
                 </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>About Us</li>
                <li>Admissions 2026</li>
                <li>School Rankings</li>
                <li>Contact Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm mb-2">Dehradun, Uttarakhand</p>
              <p className="text-gray-400 text-sm mb-2">+91 98765 43210</p>
              <p className="text-gray-400 text-sm">info@ecoleglobale.com</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-xs text-gray-500">
            © 2025 Ecole Globale. All rights reserved.
          </div>
        </div>
      </footer>

      <StickyBottomBar onEnquire={handleGlobalEnquire} />
      
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        schoolName={selectedSchool}
      />
    </div>
  );
}