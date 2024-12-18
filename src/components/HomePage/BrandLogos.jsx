import React, { useEffect, useState } from 'react';
const carTitles = ["BMW"]
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
    <div className="overflow-hidden w-full h-32 mb-4 md:w-3/5 mx-auto">
      {/* Scrolling container */}
      <div
        className="flex justify-between"
      >
        {/* Original list */}
        {logos.map((logo, index) => (
          <a href={`/shopping?MakeName=${carTitles[0]}`}>
            <img
              key={index}
              src={logo.src}
              alt={logo.name}
              className="w-24 h-32 object-contain mx-2"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
