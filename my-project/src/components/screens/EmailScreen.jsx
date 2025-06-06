import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

const EmailScreen = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Email submitted:', email);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between px-5 pt-6 pb-6 font-jakarta">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-6">
        <button className="text-black text-2xl">{'←'}</button>
        <div className="text-black font-bold text-lg tracking-wide">DUOMO</div>
        <button className="text-black text-2xl">{'≡'}</button>
      </div>

      {/* Fixed Top Content */}
      <div className="flex flex-col gap-6">
        {/* Title Text */}
        <h2 className="text-xl text-center font-semibold  leading-snug text-[#222]">
          Enter your email to get your <br />
          <span className="font-semibold">personalized Recovery Plan</span>
        </h2>

        {/* Email Input */}
        <div className="flex items-center px-4 py-3 bg-[#F6F6F6] border border-[#E4E4E7] rounded-xl shadow-sm">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 text-sm text-[#222] bg-transparent outline-none placeholder-gray-500"
          />
          <Mail className="w-5 h-5 text-gray-500" />
        </div>

        {/* Privacy Box */}
        <div className="flex items-start bg-[#FAFAFA] border border-[#E4E4E7] rounded-xl px-4 py-3 text-[11px] text-[#6B7280]">
          <Lock className="w-4 h-4 mt-0.5 mr-2 text-gray-500" />
          <p>
            We respect your privacy and are committed to protecting your personal data. Your data will be
            processed according to our <span className="underline">Privacy policy</span>.
          </p>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="mt-auto pt-8">
        <button
          onClick={handleSubmit}
          className="w-full bg-[#0057FF] text-white font-semibold text-[15px] py-3 rounded-xl shadow-md"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default EmailScreen;
