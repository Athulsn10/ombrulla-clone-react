import React from 'react';

const HRToolsSection = () => {
  return (
    <section>
      <div className="md:my-20 md:mb-16 md:mt-">
        <div className="font-albert-sans mx-4 md:mx-5">
          <div className="py-0 md:px-4">
            <div className="md:h-auto py-4">
              <div className="md:mx-auto md:max-w-xl lg:max-w-none">
                <div className="flex flex-col md:flex-row gap-x-4 md:gap-x-10">
                  <div className="flex flex-col pt-0 gap-y-4 p-3 basis-full md:basis-1/3">
                    <div className="flex items-baseline">
                      <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-2 h-4 md:w-2 md:h-2">
                        <path fill="#0000ff" fillRule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path>
                      </svg>
                      <div className="md:text-5xl md:text-sm md:leading-4 font-medium md:font-bold font-albert-sans ml-2 md:ml-4">
                        PRODUCTS
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-5xl font-sans leading-tight font-semibold">Our HR Tools</h3>
                    </div>
                    <div>
                      <p className="md:text-xl text-lg leading-snug md:text-base md:leading-6 text-gray-500">
                        Our job grading and evaluation tool, combined with the compensation management tool, is a highly effective
                        SaaS-based solution. It greatly assists HR consultants and managers in carrying out their roles with efficiency
                        and precision.
                        <br />
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="basis-full md:basis-2/3 flex flex-col gap-y-4 md:flex-row gap-x-4">
                    <div className="flex flex-col gap-y-4 md:gap-y-5 bg-[#eff1f5] w-full md:w-[48%] md:mx-4 md:mx-0 p-6 md:p-7 rounded-2xl">
                      <div className="flow-root">
                        <h4 className="font-medium font-albert-sans text-4xl md:text-xl md:leading-8">Job Grading and Evaluation</h4>
                      </div>
                      <div>
                        <p className="text-xl leading-snug md:text-base md:leading-7 text-gray-500">
                          Job evaluation assesses and ranks job roles in an organization based on responsibilities and skills, often for
                          compensation and structuring purposes.
                        </p>
                      </div>
                      <div className="my-2 flex justify-center items-center">
                        <img src="https://www.ombrulla.com/_astro/job-profiler.bfa7dd2f_Z10oyMd.webp" alt="Job Grading and Evaluation" width="250" loading="lazy" />
                      </div>
                      <div className="flex">
                        <div>
                          <a href="https://jobprofiler.rewardsdna.com/login" target="_blank" className="text-lg md:text-base font-medium">Free Trial</a>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#0000FF"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 md:w-5 md:h-5 font-bold text-[#0000FF]"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-4 md:gap-y-5 bg-[#eff1f5] w-full md:w-[48%] md:mx-4 md:mx-0 p-6 md:p-7 rounded-2xl">
                      <div className="flow-root">
                        <h4 className="font-medium font-albert-sans text-4xl md:text-xl md:leading-8">Compensation Management</h4>
                      </div>
                      <div>
                        <p className="text-xl leading-snug md:text-base md:leading-7 text-gray-500">
                          Compensation management software automates salary planning, budget management, and equity analysis, ensuring fair
                          and competitive pay practices.
                        </p>
                      </div>
                      <div className="my-2 flex justify-center items-center">
                        <img src="https://www.ombrulla.com/_astro/Comp360.5e1e772f_23KQc0.webp" alt="Job Grading and Evaluation" width="250" loading="lazy" />
                      </div>
                      <div className="flex">
                        <div>
                          <a href="" className="text-lg md:text-base font-medium">Book For Demo</a>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#0000FF"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4 md:w-5 md:h-5 font-bold text-[#0000FF]"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HRToolsSection;
