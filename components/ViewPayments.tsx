import React from 'react';

interface ViewPaymentsProps {
  onContinue: () => void;
  logoUrl: string;
  isDarkMode?: boolean;
}

const ViewPayments: React.FC<ViewPaymentsProps> = ({ onContinue, logoUrl, isDarkMode = false }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className={`w-full max-w-md p-8 rounded-xl shadow-xl ${isDarkMode ? 'bg-[#1E1E1E] text-white' : 'bg-white text-black'}`}>
        <h2 className="text-xl font-bold mb-4">View Payments</h2>
        <p className="text-sm opacity-70 mb-6">View payment information. You can proceed to sign in to continue.</p>

        <button
          onClick={onContinue}
          className="w-full bg-[#22C55E] hover:bg-green-600 text-black font-bold py-3.5 rounded-2xl transition-all shadow-lg active:scale-[0.98]"
        >
          View Payments
        </button>
      </div>
    </div>
  );
};

export default ViewPayments;
