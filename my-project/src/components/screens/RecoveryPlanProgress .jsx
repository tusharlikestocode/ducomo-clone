import React, { useState, useEffect } from 'react';

// Modal Component
const ModalPrompt = ({ step, onNext }) => {
  const questions = [
    "What goals are most important to you right now?",
    "Which areas of your life need the most support?",
    "Which activities would you enjoy doing daily?"
  ];

  const handleAnswer = (answer) => {
    // You could log or store the answer here if needed
    onNext();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center">
        <p className="text-gray-500 text-sm mb-2">To move forward, specify</p>
        <h2 className="text-lg font-semibold mb-6">{questions[step]}</h2>

        <div className="flex justify-between space-x-4">
          <button
            onClick={() => handleAnswer("no")}
            className="flex-1 py-3 border rounded-xl flex items-center justify-center space-x-2 hover:bg-red-50 transition"
          >
            <span className="text-red-600 text-xl">✖</span>
            <span className="text-black font-medium">No</span>
          </button>
          <button
            onClick={() => handleAnswer("yes")}
            className="flex-1 py-3 border rounded-xl flex items-center justify-center space-x-2 hover:bg-green-50 transition"
          >
            <span className="text-green-600 text-xl">✔</span>
            <span className="text-black font-medium">Yes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// Loader Bar
const LoaderBar = ({ label, progress }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-black">{label}</span>
      <span className="text-sm font-medium text-black">{progress}%</span>
    </div>
    <div className="w-full h-1.5 bg-gray-200 rounded-full">
      <div className="h-1.5 bg-blue-600 rounded-full transition-all duration-200" style={{ width: `${progress}%` }} />
    </div>
  </div>
);
const reviews = [
  {
    text: "This plan has spoken to the very broken parts of me..",
    subtext: "And it has lightened my mind a bit by allowing myself to surrender to God's will.",
    name: "Jane T."
  },
  {
    text: "This gave me real structure in my healing journey.",
    subtext: "I feel like someone finally understands what I'm going through.",
    name: "Mike D."
  },
  {
    text: "This was the most practical help I've found.",
    subtext: "Thank you for giving me clarity and hope.",
    name: "Sarah P."
  }
];
// Main Component
const RecoveryPlanProgress = () => {
  const steps = [
    "Aligning with your goals",
    "Identifying focus areas",
    "Picking daily activities"
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);
const [reviewIndex, setReviewIndex] = useState(0);

  // Animate Progress
useEffect(() => {
  const interval = setInterval(() => {
    setReviewIndex((prev) => (prev + 1) % reviews.length);
  }, 5000); // every 5 seconds

  return () => clearInterval(interval);
}, []);



useEffect(() => {
  if (currentStep >= steps.length) return;

  if (progress < 100 && !showModal) {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100));
    }, 60);
    return () => clearInterval(interval);
  }

  // ✅ Only show modal if step is 0 or 1 (i.e., not the last one)
  if (progress === 100 && !showModal && currentStep < steps.length - 1) {
    setTimeout(() => {
      setShowModal(true);
    }, 300);
  }
}, [progress, showModal, currentStep, steps.length]);


 const handleNext = () => {
  setShowModal(false);

  // ✅ Stop if last step is already reached
  if (currentStep < steps.length - 1) {
    setCurrentStep((prev) => prev + 1);
    setProgress(0);
  }
};


  return (
    <div className="min-h-screen px-6 py-10 flex flex-col items-center bg-white font-sans text-center">
      <h1 className="text-[22px] font-semibold leading-snug text-black mb-6">
        We are crafting your <br />
        <span className="block">Porn Dependence</span>
        <span className="block">Recovery Plan</span>
      </h1>

      {/* Progress Bars */}
      <div className="w-full max-w-md text-left mb-8">
        {steps.map((label, index) => (
          <LoaderBar
            key={label}
            label={label}
            progress={index < currentStep ? 100 : index === currentStep ? progress : 0}
          />
        ))}
      </div>

      {/* Testimonial Section */}
     <div className="w-full max-w-md p-4 border rounded-xl shadow-lg text-left  transition-all duration-500">
  <div className="flex space-x-1 mb-2">
    {Array(5).fill().map((_, idx) => (
      <div key={idx} className="w-4 h-4">
        <img
          alt="star"
          width="16"
          height="16"
          decoding="async"
          src="https://goduomo.com/icons/reviewStars.svg"
          className="transparent"
        />
      </div>
    ))}
  </div>
  <p className="font-semibold text-[15px] mb-1 leading-snug">
    {reviews[reviewIndex].text}
  </p>
  <p className="text-sm text-gray-600 mb-2">
    {reviews[reviewIndex].subtext}
  </p>
  <p className="text-sm font-medium text-right text-black">
    {reviews[reviewIndex].name}
  </p>
</div>

      {/* Modal */}
      {showModal && <ModalPrompt step={currentStep} onNext={handleNext} />}
    </div>
  );
};

export default RecoveryPlanProgress;
