"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const SlideSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      images: ["/images/slide1.jpg", "/images/slide-2.jpg"],
    },
    {
      id: 2,
      images: ["/images/slide-3.jpg", "/images/slide-4.jpg"],
    },
    {
      id: 3,
      images: ["/images/slide-5.jpg", "/images/slide-6.jpg"],
    },
    {
      id: 4,
      images: ["/images/slide-7.jpg", "/images/slide-8.jpg"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative py-8 px-2 mt-[-20px] w-full md:w-auto h-[350px] md:h-[600px]">
      <div className="relative w-full max-w-screen-[1920px] mx-auto overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="flex w-full flex-shrink-0">
              {slide.images.map((image, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center px-2"
                  style={{
                    width: "100%", 
                    height: "600px", 
                  }}
                >
                  <div className="w-full h-full relative">
                    <Image
                      src={image}
                      alt={`Slide ${slide.id}-img-${index + 1}`}
                      width={720}
                      height={600}
                      className="object-cover rounded-lg xl:h-[600px] md:h-[500px] h-[350px]"
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    
      {/* Hide slide dots on mobile */}
      <div className="absolute left-0 right-0 flex justify-center space-x-4 mt-10 hidden md:flex">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-16 h-1 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-orange-500" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>

      {/* Border line */}
      <div className="border-t-2 w-[98%] border-gray-200 mt-20 ml-5"></div>
    </section>
  );
};

export default SlideSection;
