import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 mt-10 absolute w-full">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Education</a></li>
              <li><a href="#">Team plans</a></li>
            </ul>
          </div>
          <div> 
            <h3 className="font-bold text-lg mb-4">About Us</h3>
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
            <h3 className="font-bold text-lg mb-4">Help and support</h3>
            <ul>
              <li><a href="#">Help center</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy & Terms</a></li>
              <li><a href="#">Safety information</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Community</h3>
            <ul>
              <li><a href="#">Agencies</a></li>
              <li><a href="#">Freelancers</a></li>
              <li><a href="#">Engineers</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2022 Your Company. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
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