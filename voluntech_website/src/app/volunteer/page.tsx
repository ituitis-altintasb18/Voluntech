"use client";

import Link from 'next/link';

export default function VolunteerPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Join Our Volunteer Community</h1>
        <p className="text-gray-600 mb-8 text-center">
          Ready to make a difference? Fill out the form below to get started with VolunTech and find opportunities that match your passion.
        </p>
        
        {/* Mock Form - No actual submission logic */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your full name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required 
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="you@example.com" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required 
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Create a password" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required 
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign Up & Become a Volunteer
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account? <Link href="#" className="text-blue-600 hover:underline">Log in</Link> (Link inactive)
        </p>
      </div>
    </div>
  );
}
