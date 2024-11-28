import React, { useState, useEffect } from "react";
import { Search } from "./Search";

export const CoverSlider = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Handle autoplay with a timer
    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(() => {
                nextSlide();
            }, interval);
            return () => clearInterval(timer);
        }
    }, [currentIndex, isPaused, interval]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div
            className="relative w-full max-w-4xl mx-auto group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >

            {/* Slider */}
            <div className="overflow-hidden relative">
                <div
                    className="flex transition-transform ease-in-out duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <>
                            <Search />
                            <img
                                key={index}
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-64 md:h-80 lg:h-96 object-cover "
                            />
                        </>

                    ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                ❯
            </button>

            {/* Indicators */}
            <div className="flex justify-center ">
                <div className="absolute space-x-2 -mt-8">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex
                                ? "bg-gray-800"
                                : "bg-gray-400 hover:bg-gray-600"
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};