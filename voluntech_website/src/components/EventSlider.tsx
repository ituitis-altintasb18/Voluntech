"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const events = [
  {
    title: "Park Cleanup at Yeşilköy",
    date: "Saturday, May 17, 2025",
    time: "10:00 AM - 1:00 PM",
    description: "Join us for a community effort to clean up Yeşilköy Park. Let's make our local spaces greener and cleaner together!"
  },
  {
    title: "Clothes Distribution Drive",
    date: "Wednesday, May 21, 2025",
    time: "2:00 PM - 5:00 PM",
    description: "We are collecting and distributing clothes to those in need. Help us sort, pack, and hand out donations."
  },
  {
    title: "Community Garden Planting",
    date: "Saturday, May 24, 2025",
    time: "9:00 AM - 12:00 PM",
    description: "Help us plant new vegetables and flowers in the community garden. Tools and guidance provided."
  },
  {
    title: "Elderly Home Visit",
    date: "Sunday, May 25, 2025",
    time: "3:00 PM - 5:00 PM",
    description: "Spend time with residents at the local elderly home, engaging in conversation and simple activities."
  },
  {
    title: "Beach Cleanup at Florya",
    date: "Saturday, May 31, 2025",
    time: "10:00 AM - 1:00 PM",
    description: "Let's keep our beaches clean! Join the effort to remove litter from Florya Sahili."
  }
];

const EventSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768, // Target tablets and smaller
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index} className="px-2 md:px-4"> {/* Add padding between slides */} 
            <div className="bg-white p-6 rounded-lg shadow h-full flex flex-col"> {/* Ensure consistent height */} 
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-1"><span className="font-medium">Date:</span> {event.date}</p>
              <p className="text-gray-600 mb-3"><span className="font-medium">Time:</span> {event.time}</p>
              <p className="text-gray-700 flex-grow">{event.description}</p> {/* Allow description to grow */} 
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventSlider;
