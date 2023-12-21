import React from 'react';

const Section4 = () => {
  return (
    <div >
      <div className="flex flex-col md:flex-row md:h-screen justify-around px-8 md:px-6 md:m-0 my-32 md:my-0">
        <div className="hidden basis-1/2 md:flex items-center justify-center me-8 md:mt-5">
          <img
            src="https://www.ombrulla.com/_astro/ai-visual-inspection.7625d432_2nYhqo.webp"
            alt="Enhances Efficiency, Safety, and Cost-Effectiveness"
            className="absolute z-10 -mr-10 -mt-[8.438rem] h-[65vh] w-[40vw] rounded-lg"
            width="1200"
            height="720"
            loading="lazy"
          />
        </div>
        <div className="md:basis-1/2 flex flex-col pt-0 gap-y-5 md:gap-y-6">
          <div className="flex items-baseline">
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-2 h-2 md:w-2 md:h-2">
              <path fill="#0000ff" fillRule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path>
            </svg>
            <h3 className="md:text-sm md:leading-4 font-medium md:font-bold font-albert-sans ml-2 md:ml-6 md:mt-10 md:ml-4">AI VISUAL INSPECTION</h3>
          </div>
          <h3 className="leading-snug text-3xl md:text-5xl font-albert-sans">Improving Quality with Greater Precision</h3>
          <ul className="list-disc text-gray-800 ml-4 space-y-2 md:max-w-none leading-snug">
            <li className="leading-snug md:text-lg"><span className="font-medium text-black">Automated Defect Detection</span>: Automated visual inspection uses computer vision and machine learning to identify defects autonomously.</li>
            <li className="leading-snug md:text-lg"><span className="font-medium text-black">Advanced Image Processing</span>: It captures and enhances digital images for relevant feature extraction.</li>
            <li className="leading-snug md:text-lg"><span className="font-medium text-black">Informed Decision-Making</span>: The system classifies defects, aiding manufacturers in quality control decisions.</li>
            <li className="leading-snug md:text-lg"><span className="font-medium text-black">Real-Time Quality Assurance</span>: Integration with manufacturing enables real-time quality control and reduces substandard product risks.</li>
          </ul>
          <div className="flex flex-row items-center gap-x-8">
            <div className="md:text-lg hover:text-primary font-medium">
              <div className="flex items-center">
                <button className="rounded-full me-8 px-7 py-4 md:p-5 btn font-bold">Schedule Call</button>
                <div><a href="" className="text-lg md:text-base font-medium">Read more</a></div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#0000FF" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-3 md:w-5 md:h-5 font-bold text-[#0000FF]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
