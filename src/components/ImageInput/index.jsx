import React, { useEffect, useState } from 'react';

const generateUniqueId = () =>
  `upload-${Math.random().toString(36).substr(2, 9)}`;


export default function ImageUploader ({ width, height, index, check, setImageFiles, onPost }) {
  const [imagePreview, setImagePreview] = useState('');

  const uniqueId = generateUniqueId(); // Unique ID for each component instance
  useEffect(() => {
    if (onPost) {
      setImagePreview('');

    }
  }, [onPost])
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log('selectedFile', selectedFile);

      const reader = new FileReader();
      reader.onload = (e) => {
        const preview = e.target.result; // This contains the base64 image string
        setImagePreview(preview); // Set the image preview for UI
        setImageFiles(index, selectedFile); // Pass the file to the parent component
      };
      reader.readAsDataURL(selectedFile); // Generate the preview
    } else {
      setImageFiles(index, undefined);
      setImagePreview(''); // Clear the preview if no file is selected
    }
  };

  return (
    <section className="object-cover rounded-lg ">
      <div className={`${width} ${height} items-center max-w-sm overflow-hidden rounded-lg shadow-md`}>
        <div>
          <div
            id={`image-preview-${uniqueId}`}
            className={`bg-gray-100 ${imagePreview ? '' : 'border-dashed border-2 border-gray-400'} rounded-lg items-center mx-auto text-center cursor-pointer`}
            onClick={() => document.getElementById(uniqueId).click()}
          >
            <input
              id={uniqueId}
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            {imagePreview ? (
              <img
                src={imagePreview}
                className="rounded-lg max-h-72"
                alt="Image preview"
              />
            ) : (
              <div className="w-full h-full flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 mx-auto mb-4 text-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                  Upload picture
                </h5>
                <p className="text-sm font-normal text-gray-400 md:px-6">
                  Choose a photo with a size less than <b className="text-gray-600">2 MB</b>
                </p>
                <p className="text-sm font-normal text-gray-400 md:px-6">
                  It should be in <b className="text-gray-600">JPG, PNG, or GIF</b> format.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

