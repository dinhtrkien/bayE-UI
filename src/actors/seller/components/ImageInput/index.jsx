import React, { useState } from 'react';
const generateUniqueId = () =>
  `upload-${Math.random().toString(36).substr(2, 9)}`;

const ImageUploader = ({ width, height }) => {
  const [fileName, setFileName] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [isEventListenerAdded, setIsEventListenerAdded] = useState(false);
  const uniqueId = generateUniqueId(); // Unique ID for each component instance

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
        if (!isEventListenerAdded) {
          setIsEventListenerAdded(true);
        }
      };
      reader.readAsDataURL(file);
    } else {
      setFileName('');
      setImagePreview('');
      setIsEventListenerAdded(false);
    }
  };

  return (
    <section className="object-cover rounded-lg ">
      <div
        className={`${width} ${height} items-center max-w-sm overflow-hidden rounded-lg shadow-md`}
      >
        <div>
          <div
            id={`image-preview-${uniqueId}`}
            className={`bg-gray-100 ${
              imagePreview ? '' : 'border-dashed border-2 border-gray-400'
            } rounded-lg items-center mx-auto text-center cursor-pointer`}
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
              <div className="w-full h-full">
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
                  Choose photo size should be less than{' '}
                  <b className="text-gray-600">2mb</b>
                </p>
                <p className="text-sm font-normal text-gray-400 md:px-6">
                  and should be in{' '}
                  <b className="text-gray-600">JPG, PNG, or GIF</b> format.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUploader;
