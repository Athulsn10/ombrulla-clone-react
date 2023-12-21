import React from 'react';
import Nav from './Nav'
import AISection from './AISection';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import PetranSection from './PetranSection';
import HRToolsSection from './HRToolsSection';
import Brands from './Brands';
import BlogSection from './Blogs';
import Footer from './Footer';
import Customers from './Customer';
import Testimonial from './OurTestimonials';

const Home = () => {
  return (
   <>
      <div style={{ height: '100vh', background: 'linear-gradient(to bottom, #d1dbff, white)' }}>
       <Nav/>
        <div className="md:mx-12 md:px-12 mx-5">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:mt-12 md:pt-12 mt-12 pt-12">
              <h4 className="md:mt-5 text-6xl md:text-6xl font-bold md:font-semibold w-[15rem] md:w-[28.25rem]">
                Manual Inspection is
                <span style={{ color: '#1d4ed8' }} className="inline font-normal text-5xl md:text-6xl font-albert-sans">
                  Slow &amp; Error-Prone
                </span>
              </h4>
              <p className="md:my-10 my-10">
                AI-driven computer vision transforms manufacturing quality inspection, boosting precision and cost-efficiency
                while upholding product excellence.
              </p>
              <div className="flex items-center">
                <button className="rounded-full me-8 px-7 py-4 md:p-5 btn font-bold">Schedule Call</button>
                <button className="rounded-full me-8 px-5 py-4 btn">
                  <i className="fa-solid fa-play icon"></i>
                </button>
                <p className="watch-video hidden md:flex font-semibold">Watch Video</p>
              </div>
            </div>
            <div className="my-12 md:my-8 md:ms-12 md:ps-7 relative">
              <div className="img-ai flex flex-col items-center justify-center w-full relative">
                <div className="border-2 md:pb-12 shape1 border-blue-600 rounded-full overflow-hidden hidden md:block absolute top-0 left-0 right-0 bottom-0 z-0"></div>
                <div className="shape2 border-2 md:pb-12 border-white rounded-full overflow-hidden hidden md:block absolute top-0 left-0 right-0 bottom-0 z-0"></div>
                <img
                  className="object-cover z-10"
                  loading="lazy"
                  src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AISection/>
      <Section3/>
      <Section4/>
      <Section5/>
      <PetranSection />
      <HRToolsSection/>
      <Customers/>
      <Brands/>
      <Testimonial/>
      <BlogSection/>
      <Footer/>
      </>
  );
};

export default Home;
