"use client";

import Link from 'next/link';

export default function SupporterPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Support VolunTech as an Organization</h1>
        <p className="text-gray-600 mb-8 text-center">
          Partner with us to amplify your impact. Connect with dedicated volunteers and showcase your organization's opportunities on the VolunTech platform.
        </p>

        {/* Mock Form - No actual submission logic */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6 mb-10">
          <div>
            <label htmlFor="orgName" className="block text-sm font-medium text-gray-700 mb-1">Organization Name</label>
            <input 
              type="text" 
              id="orgName" 
              name="orgName" 
              placeholder="Enter your organization's name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              required 
            />
          </div>
           <div>
            <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
            <input 
              type="text" 
              id="contactPerson" 
              name="contactPerson" 
              placeholder="Enter the contact person's name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              required 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="contact@yourorg.com" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              required 
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Submit Inquiry
          </button>
        </form>

        {/* Pricing Information Section */}
        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Partnership Options</h2>
          <p className="text-gray-700 text-center leading-relaxed">
            Free access for individual volunteers. Affordable monthly subscriptions for NGOs (8000 TL/month) and corporate partners. Options for sponsoring events (20,000 TL/event) and supporting government projects (30,000 TL/project).
          </p>
        </div>

      </div>
    </div>
  );
}
