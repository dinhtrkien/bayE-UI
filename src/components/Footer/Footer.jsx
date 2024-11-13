import React from 'react';

const Footer = () => {
  return (
    <footer className="absolute w-full py-4 mt-10 text-gray-300 bg-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold">Product</h3>
            <ul>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Team plans</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">About Us</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Branding</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Partnerships</a></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Help and support</h3>
            <ul>
              <li><a href="#">Help center</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy & Terms</a></li>
              <li><a href="#">Safety information</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Community</h3>
            <ul>
              <li><a href="#">Agencies</a></li>
              <li><a href="#">Freelancers</a></li>
              <li><a href="#">Engineers</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2022 Your Company. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
