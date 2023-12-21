import React from 'react';

const AISection = () => {
  return (
    <div className="md:mx-12 mx-7 md:h-screen">
      <div className="container flex justify-center bg-div">
        <div
          className="w-full text-white flex flex-col md:rounded-[2rem] rounded-[2rem] ai-section"
        >
          <div className="flex flex-col my-auto mx-auto md:p-12 text-black">
            <div className="grid grid-rows-1 gap-y-1 md:gap-y-4 p-9 md:p-12 py-8 md:py-4">
              <div className="flex items-baseline">
                <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-2 h-2">
                  <path fill="#0000ff" fillRule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path>
                </svg>
                <div className="font-medium md:font-bold font-albert-sans md:text-sm md:leading-4 ml-5 mb-3 md:ml-4 md:mb-2">
                  <h1>The Best AI Service Provider</h1>
                </div>
              </div>
              <h2 className="text-2xl md:text-5xl leading-tight font-medium mb-1">
                Crafting Tomorrow's World with <span className="font-normal" style={{ color: '#1d4ed8' }}>AI Excellence</span>
              </h2>
              <p className="text-l md:text-base leading-normal md:leading-relaxed text-gray-500 font-albert-sans mb-4 md:mb-0">
                The majority of customers lack data-driven insights and automation. Using AI, Ombrulla assists clients in extracting data from diverse sources such as photos, videos, and data lakes, which can assist businesses in making data-driven insights and improving their bottom line.
              </p>
              <div className="flex items-center">
                <button className="rounded-full me-8 px-5 py-4 btn">
                  <i className="fa-solid fa-play icon"></i>
                </button>
                <p className="watch-video font-semibold">Watch Corporate Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISection;
