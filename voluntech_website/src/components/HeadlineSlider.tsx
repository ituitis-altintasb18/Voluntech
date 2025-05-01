"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const headlines = [
  {
    title: "VolunTech Launches New Partnership Program!",
    description: "We are excited to announce new ways for NGOs and Corporations to partner with VolunTech and connect with volunteers.",
    image: "/images/portrait-blond-girl-using-cellphone-smiling-pleased-front-chatting-mobile-phone-standing-against-white-wall.png", // Reusing model image
    alt: "Volunteer using phone"
  },
  {
    title: "Over 1000 Tasks Completed via VolunTech App!",
    description: "Thanks to our amazing volunteers, we have surpassed 1000 completed community tasks coordinated through the app.",
    image: "/images/VolunTech.png", // Using app screenshot
    alt: "VolunTech App Task Details"
  },
  {
    title: "Join the Summer Volunteering Drive!",
    description: "Find exciting new volunteering opportunities this summer. Make a difference in your community during the holidays.",
    image: "/images/VolunTech-2.png", // Using app screenshot
    alt: "VolunTech App Profile"
  }
];

const HeadlineSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000, // Slower speed for headlines
    fade: true, // Use fade effect like the reference
    cssEase: 'linear',
    arrows: false, // Hide arrows like reference
    dotsClass: "slick-dots slick-thumb" // Style dots if needed
  };

  return (
    <div className="w-full bg-gray-100 py-8 md:py-12 mb-8 overflow-hidden">
      <Slider {...settings}>
        {headlines.map((headline, index) => (
          <div key={index}>
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
              {/* Text Content (Left) */}
              <div className="md:w-1/2 mb-6 md:mb-0 md:pr-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">{headline.title}</h2>
                <p className="text-md text-gray-600">{headline.description}</p>
                {/* Optional Button */}
                {/* <button className="mt-4 bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition duration-300">Detaylı Bilgi</button> */}
              </div>
              {/* Image (Right) */}
              <div className="md:w-1/2 flex justify-center items-center">
                <Image 
                  src={headline.image} 
                  alt={headline.alt} 
                  width={400} 
                  height={400} 
                  className="rounded-lg object-contain max-h-[300px] md:max-h-[400px] w-auto"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
       {/* Custom dots styling if needed */}
       <style jsx global>{`
        .slick-dots {
          bottom: -30px; /* Adjust position */
        }
        .slick-dots li button:before {
          font-size: 12px; /* Adjust dot size */
          color: #9ca3af; /* Gray dots */
        }
        .slick-dots li.slick-active button:before {
          color: #dc2626; /* Red active dot */
        }
      `}</style>
    </div>
  );
};

export default HeadlineSlider;
