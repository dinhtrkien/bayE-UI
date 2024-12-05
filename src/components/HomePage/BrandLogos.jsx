import React, { useEffect, useState } from 'react';

const BrandLogos = () => {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      // Adjust the path to match your project's structure
      const images = import.meta.glob("/src/assets/brand-logos/*.{png,jpg,jpeg,svg}");
      const resolvedImages = await Promise.all(
        Object.entries(images).map(async ([path, importFn]) => ({
          name: path.split('/').pop(), // Extract file name
          src: (await importFn()).default, // Resolve dynamic import
        }))
      );
      setLogos(resolvedImages);
    };
    loadImages();
  }, []);

  return (
    <div className="overflow-hidden w-full h-32 mb-8">
      {/* Scrolling container */}
      <div
        className="flex animate-scroll whitespace-nowrap"
        style={{
          animation: 'scroll 10s linear infinite', // Adjust speed
        }}
      >
        {/* Original list */}
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.name}
            className="w-16 h-32 object-contain mx-2"
          />
        ))}
        {/* Duplicated list for seamless loop */}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo.src}
            alt={logo.name}
            className="w-48 h-32 object-contain mx-2"
          />
        ))}
        {logos.map((logo, index) => (
          <img
            key={`duplicate-${index}`}
            src={logo.src}
            alt={logo.name}
            className="w-48 h-32 object-contain mx-2"
          />
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
