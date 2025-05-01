"use client";

import { X } from 'lucide-react';
import { useState } from 'react';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="bg-red-600 text-white py-3 px-4 relative">
      <div className="container mx-auto flex justify-center items-center text-center">
        <span className="font-semibold mr-2">VolunTech</span>
        <span>2024 Activity Report Published!</span>
        {/* Optional: Add a link to the report here */}
        {/* <a href="#" className="underline ml-2">Read More</a> */}
      </div>
      <button 
        onClick={() => setIsVisible(false)} 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white hover:text-gray-200"
        aria-label="Dismiss announcement"
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default AnnouncementBanner;
