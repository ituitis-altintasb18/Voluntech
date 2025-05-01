"use client";

import Link from 'next/link';

export default function DonatePage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Support Our Mission</h1>
        <p className="text-gray-600 mb-8 text-center">
          Your generous donation fuels the VolunTech platform, enabling us to connect more volunteers with meaningful opportunities and support community initiatives. Thank you for your contribution!
        </p>

        {/* Mock Donation Interface - No actual payment processing */}
        <div className="space-y-6">
          <div className="text-center">
            <label className="block text-lg font-medium text-gray-700 mb-3">Choose a Donation Amount</label>
            <div className="flex justify-center space-x-3 mb-4">
              {/* Added onClick handlers for mock interaction */}
              <button onClick={() => alert('Selected $10 - Mock functionality')} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-5 rounded-md transition duration-300">$10</button>
              <button onClick={() => alert('Selected $25 - Mock functionality')} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-5 rounded-md transition duration-300">$25</button>
              <button onClick={() => alert('Selected $50 - Mock functionality')} className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-md transition duration-300">$50</button> {/* Highlighted default/suggestion */}
              <button onClick={() => alert('Selected $100 - Mock functionality')} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-5 rounded-md transition duration-300">$100</button>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-gray-500 mr-2">$</span>
              <input 
                type="number" 
                placeholder="Or enter custom amount" 
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 w-48 text-center"
              />
            </div>
          </div>

          {/* Mock Payment Button */}
          <button 
            onClick={() => alert('Donation functionality is not implemented yet.')} 
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Donate Now (Mock)
          </button>
        </div>

        <p className="text-center text-gray-500 text-xs mt-6">
          VolunTech is a conceptual project. No real donations are processed.
        </p>
      </div>
    </div>
  );
}
