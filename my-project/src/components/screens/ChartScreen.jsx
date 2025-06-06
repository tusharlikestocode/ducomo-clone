import React from 'react';

const ChartScreen = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between px-6 pt-8 pb-6 bg-white font-sans text-center">
      {/* Top Content */}
      <div>
        {/* Header */}
        <h1 className="text-black font-bold text-lg mb-4">DUOMO</h1>

        {/* Title */}
        <h2 className="text-[20px] font-semibold leading-snug mb-3">
          Get noticeable results in just 4 weeks!
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-6">
          <span className="font-medium text-[#4B5563]">91%</span> of Duomo users reported an improvement
          in clarity and focus within the first month
        </p>

        {/* Chart container */}
        <div className="relative w-full max-w-md mx-auto mb-2">
          {/* SVG Chart */}
          <svg className="w-full" viewBox="0 0 342 244" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M116.047 174.982C64.757 174.982 63.6136 212.5 24 236H318V48C268.542 48 245.799 114.789 195.729 114.789C145.659 114.789 167.336 174.982 116.047 174.982Z" fill="url(#paint0_linear)" fillOpacity="0.24" />
            <path fillRule="evenodd" clipRule="evenodd" d="M24 48.5C24 48.2239 24.2231 48 24.4983 48H317.502C317.777 48 318 48.2239 318 48.5C318 48.7761 317.777 49 317.502 49H24.4983C24.2231 49 24 48.7761 24 48.5Z" fill="#202D46" fillOpacity="0.08" />
            <path fillRule="evenodd" clipRule="evenodd" d="M24 110.833C24 110.557 24.2231 110.333 24.4983 110.333H317.502C317.777 110.333 318 110.557 318 110.833C318 111.109 317.777 111.333 317.502 111.333H24.4983C24.2231 111.333 24 111.109 24 110.833Z" fill="#202D46" fillOpacity="0.08" />
            <path fillRule="evenodd" clipRule="evenodd" d="M24 173.167C24 172.891 24.2231 172.667 24.4983 172.667H317.502C317.777 172.667 318 172.891 318 173.167C318 173.443 317.777 173.667 317.502 173.667H24.4983C24.2231 173.667 24 173.443 24 173.167Z" fill="#202D46" fillOpacity="0.08" />
            <path fillRule="evenodd" clipRule="evenodd" d="M24 235.5C24 235.224 24.2231 235 24.4983 235H317.502C317.777 235 318 235.224 318 235.5C318 235.776 317.777 236 317.502 236H24.4983C24.2231 236 24 235.776 24 235.5Z" fill="#202D46" fillOpacity="0.08" />
            <path d="M24 236C63.6136 212.5 64.757 174.982 116.047 174.982C167.336 174.982 145.659 114.789 195.729 114.789C245.799 114.789 268.542 48 318 48" stroke="url(#paint1_linear)" strokeWidth="4" strokeLinecap="round" />
            <path fill="white" stroke="#01C45B" strokeWidth="3" d="M313.5,48A4.5,4.5 0,1,1 322.5,48A4.5,4.5 0,1,1 313.5,48" />
            <path fill="white" stroke="#FF5D01" strokeWidth="3" d="M20.5,235A4.5,4.5 0,1,1 29.5,235A4.5,4.5 0,1,1 20.5,235" />
            <defs>
              <linearGradient id="paint0_linear" x1="24" y1="142" x2="318" y2="142" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF5C00" />
                <stop offset="0.46" stopColor="#FFA800" />
                <stop offset="1" stopColor="#00C35A" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="24" y1="142" x2="318" y2="142" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF5C00" />
                <stop offset="0.46" stopColor="#FFA800" />
                <stop offset="1" stopColor="#00C35A" />
              </linearGradient>
            </defs>
          </svg>

          {/* "Now" and "In 1 month" labels */}
          <div className="absolute top-[90%] left-[2%] -translate-y-full bg-black text-white text-[10px] font-semibold px-2 py-[2px] rounded-full shadow">
            Now
          </div>
          <div className="absolute top-[12%] right-[4%] -translate-y-full bg-black text-white text-[10px] font-semibold px-2 py-[2px] rounded-full shadow">
            In 1 month
          </div>

          {/* Week markers */}
          <div className="absolute bottom-[-18px] w-full flex justify-between px-2 text-gray-400 text-[10px] font-medium">
            <span>Week 1</span>
            <span>Week 2</span>
            <span>Week 3</span>
            <span>Week 4</span>
          </div>
        </div>

        {/* Chart Caption */}
        <p className="text-xs text-gray-400 mt-10 italic">
          *This chart is for illustrative purposes only
        </p>
      </div>

      {/* Continue Button */}
      <div className="mt-8">
        <button className="w-full bg-[#0057FF] text-white font-semibold text-[15px] py-3 rounded-xl shadow-md">
          Continue
        </button>
      </div>
    </div>
  );
};

export default ChartScreen;
