// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#04102a' }}>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 md:px-8 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* About Us Section */}
          <div className="space-y-3 md:space-y-10">
            <h3 className="text-2xl leading-snug font-medium text-white md:text-2xl">About Us</h3>
            <p className="text-lg leading-snug font-normal md:text-base md:leading-tight text-white">
              Ombrulla is an AI-driven company specializing in extracting insights from diverse data sources, including photos, videos, and data lakes. Our tailored solutions help businesses make data-driven decisions and improve their bottom line through automation and AI-powered analysis.
            </p>
            <div className="flex space-x-4 md:space-x-2">
              <a href="" className="hover:text-gray-500 text-white">
                <i className="text-2xl fa-brands fa-facebook"></i>
              </a>
              <a href="" className="hover:text-gray-500 text-white">
                <i className="text-2xl fa-brands fa-instagram"></i>
              </a>
              <a href="" className="hover:text-gray-500 text-white">
                <i className="text-2xl fa-brands fa-twitter"></i>
              </a>
              <a href="" className="hover:text-gray-500 text-white">
                <i className="text-2xl fa-brands fa-linkedin"></i>
              </a>
              <a href="" className="hover:text-gray-500 text-white">
                <i className="text-2xl fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="space-y-3 md:space-y-8">
            <h3 className="text-2xl leading-snug font-medium text-white md:text-2xl">Our Services</h3>
            <ul role="list" className="space-y-3 text-white md:space-y-2 xl:space-y-0 xl:mt-6 xl:space-y-4">
              <li><a href="" className="text-lg leading-snug md:text-base md:leading-tight xl:text-sm xl:leading-7">AI Infrastructure Inspection</a></li>
              <li><a href="" className="text-lg leading-snug md:text-base md:leading-tight xl:text-sm xl:leading-7">AI Visual Inspection</a></li>
              <li><a href="" className="text-lg leading-snug md:text-base md:leading-tight xl:text-sm xl:leading-7">AI Data Analytics</a></li>
              <li><a href="" className="text-lg leading-snug md:text-base md:leading-tight xl:text-sm xl:leading-7">AI People Tracking</a></li>
            </ul>
          </div>

          {/* Our Solutions Section */}
          <div className="space-y-4 md:space-y-8">
            <h3 className="text-2xl leading-snug font-medium text-white md:text-2xl">Our Solutions</h3>
            <ul role="list" className="space-y-3 text-white md:space-y-2 xl:space-y-0 xl:mt-6 xl:space-y-4">
              <li><a href="" className="text-lg md:text-xl md:leading-tight xl:text-sm xl:leading-7 text-white">Asset Performance Management</a></li>
              <li><a href="#" className="text-lg md:text-xl md:leading-tight xl:text-sm xl:leading-7 text-white">Job Grading &amp; Evaluation</a></li>
              <li><a href="#" className="text-lg md:text-xl md:leading-tight xl:text-sm xl:leading-7 text-white">Compensation Management</a></li>
            </ul>
          </div>

          {/* Reach Us Section */}
          <div className="space-y-4 md:space-y-8">
            <h3 className="text-2xl leading-snug font-medium text-white md:text-2xl">Reach Us</h3>
            <ul role="list" className="space-y-4 xl:mt-6 xl:space-y-4 text-white">
              <li className="text-lg leading-snug md:text-2xl xl:text-base xl:leading-7">
                <p>United Kingdom, 53 Denton close</p>
                <p>Redhill, Surrey, RH1 5LB</p>
                <p>+44 787 999 3892</p>
              </li>
              <li className="text-lg leading-snug md:text-2xl xl:text-base xl:leading-7">
                <p>Germany, Schützenstraße 51A</p>
                <p>Lübeck, 23558</p>
                <p>+49 179 512 5812</p>
              </li>
              <li className="text-lg leading-snug md:text-2xl xl:text-base xl:leading-7">
                <p>India, No. 154/20, Royal Space</p>
                <p>Third Floor TI, HSR Layout,</p>
                <p>Bangalore, Karnataka</p>
                <p>560102</p>
                <p>+91 85900 56435</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
