import React from 'react';
import { X, CheckCircle } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  schoolName: string | null;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose, schoolName }) => {
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) setSubmitted(false);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-[fadeIn_0.3s_ease-out]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 rounded-full p-1"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-2">Thank You!</h3>
            <p className="text-gray-600">Our academic counsellor will contact you shortly regarding <br/><strong>{schoolName || 'Admissions'}</strong>.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <span className="text-accent text-xs font-bold tracking-widest uppercase mb-1 block">Quick Enquiry</span>
              <h2 className="font-serif text-2xl font-bold text-primary">
                {schoolName ? `Enquire for ${schoolName}` : 'Get Expert Guidance'}
              </h2>
              <p className="text-xs text-gray-500 mt-2">Fill the form to download brochure & fee structure</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 ml-1">Parent Name</label>
                <input required type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="Enter your full name" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1 ml-1">Phone Number</label>
                  <input required type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="+91 999..." />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1 ml-1">Child's Grade</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all">
                    <option>Grade 5</option>
                    <option>Grade 6</option>
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 11</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1 ml-1">Email Address</label>
                <input required type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-accent hover:to-yellow-600 text-white font-bold py-4 rounded-xl shadow-lg transform active:scale-95 transition-all mt-2">
                Download Brochure & Fees
              </button>
              
              <p className="text-[10px] text-center text-gray-400 mt-4">
                By submitting, you agree to receive updates via WhatsApp/Email.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};