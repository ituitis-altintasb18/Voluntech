"use client"; // Mark homepage as client component because EventSlider and HeadlineSlider use hooks

import Image from 'next/image';
import Link from 'next/link';
import EventSlider from '@/components/EventSlider'; // Import the event slider component
import HeadlineSlider from '@/components/HeadlineSlider'; // Import the headline slider component

// Announcement Banner is handled in layout.tsx

export default function Home() {
  return (
    <>
      {/* Announcement Banner is now in layout.tsx */}
      <HeadlineSlider /> {/* Add the headline slider below the banner */}
      <div className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">Connect. Volunteer. Make a Difference.</h1>
            <p className="text-lg text-gray-600 mb-6">
              VolunTech is a platform connecting passionate volunteers with impactful opportunities offered by NGOs and corporate partners. Join us in building stronger communities.
            </p>
            <Link href="/volunteer" className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition duration-300 inline-block">
              Become a Volunteer
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            {/* Removed shadow-lg class */}
            <Image 
              src="/images/portrait-blond-girl-using-cellphone-smiling-pleased-front-chatting-mobile-phone-standing-against-white-wall.png" 
              alt="Volunteer using VolunTech app" 
              width={500} 
              height={500} 
              className="rounded-lg object-cover max-w-full h-auto"
              priority // Load hero image faster
            />
          </div>
        </section>

        {/* Our Impact Section */}
        <section className="bg-gray-50 py-12 my-16 rounded-lg">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Collective Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">1325</div>
              <div className="text-lg text-gray-600">Tasks Completed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">345</div>
              <div className="text-lg text-gray-600">Active Volunteers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">54</div>
              <div className="text-lg text-gray-600">Regions Covered</div>
            </div>
          </div>
        </section>

        {/* App Showcase Section */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Explore the VolunTech App</h2>
          {/* Increased size slightly */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex justify-center">
              <Image src="/images/VolunTech-2.png" alt="VolunTech App Profile Screen" width={300} height={600} className="rounded-lg shadow-md"/>
            </div>
            <div className="flex justify-center">
              <Image src="/images/VolunTech.png" alt="VolunTech App Task Details Screen" width={300} height={600} className="rounded-lg shadow-md"/>
            </div>
            <div className="flex justify-center">
              <Image src="/images/VolunTech-3.png" alt="VolunTech App Notifications Screen" width={300} height={600} className="rounded-lg shadow-md"/>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-6 max-w-2xl mx-auto">
              Our intuitive mobile app makes it easy to find, manage, and track your volunteering activities. Stay connected and make an impact on the go.
            </p>
        </section>

        {/* Upcoming Events Section - Replaced grid with Slider */}
        <section className="bg-blue-50 py-12 my-16 rounded-lg overflow-hidden"> {/* Added overflow-hidden for slider */} 
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Get Involved: Upcoming Events</h2>
          <EventSlider /> {/* Use the event slider component */} 
          <p className="text-center text-gray-600 mt-8">Find more events and sign up through the VolunTech app!</p>
        </section>

        {/* Supporter/Donation CTA Section */}
        <section className="my-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg shadow">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Become a Supporter</h2>
                  <p className="text-gray-600 mb-6">Partner with VolunTech as an NGO or corporation to post opportunities and connect with dedicated volunteers.</p>
                  <Link href="/supporter" className="bg-green-600 text-white px-6 py-3 rounded font-semibold hover:bg-green-700 transition duration-300 inline-block">
                      Learn More & Join
                  </Link>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Make a Donation</h2>
                  <p className="text-gray-600 mb-6">Your contribution helps us maintain the platform, reach more volunteers, and support vital community projects.</p>
                  <Link href="/donate" className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition duration-300 inline-block">
                      Donate Now
                  </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  );
}
