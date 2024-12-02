import React, { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const imageArray = Array.isArray(images) ? images : Object.values(images); // Convert to array if not already
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = imageArray.length;

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % totalImages);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + totalImages) % totalImages);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="carousel w-full overflow-hidden rounded-lg shadow-lg">
        {/* Display current image */}
        <img
          src={imageArray[currentIndex]}
          className="w-full h-96 object-cover transition-all duration-500 ease-in-out"
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:bg-blue-600 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-3.5 h-3.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md hover:bg-blue-600 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-3.5 h-3.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {imageArray.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
