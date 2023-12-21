import React from 'react';

const PetranSection = () => {
  return (
   
        <div className="my-5" style={{backgroundColor: '#1d4ed8', width: '100%'}}>
            <div className="max-w-7xl py-10  px-4 md:py-20 md:px-20 md:max-w-none">
                <div className="grid grid-cols-1 gap-y-12 gap-x-8 md:grid-cols-2 p-5">
                    <div className="flex flex-col gap-y-8 md:gap-y-4">
                        <div className="flex flex-col gap-y-0 md:gap-y-0">
                            <div><img src="https://www.ombrulla.com/_astro/petran-logo.99970d82_1t8FzR.webp" alt="Petran"
                                    className="w-22 h-6 md:h-6 md:w-28"  loading="lazy"
                                    /></div>
                            <div>
                                <h2 className="text-sm md:text-base font-normal leading-8 tracking-tight text-white"><span
                                        className="text-white font-bold">PE</span>rformance - <span
                                        className="text-white font-bold">TR</span>acking - <span
                                        className="text-white font-bold">AN</span>alytics
                                </h2>
                            </div>
                        </div>
                        <div className="flex flex-col text-2xl leading-snug md:text-4xl font-medium font-sans text-white">
                            <div>AI &amp; IoT Enabled</div>
                            <div>Asset Performance Management</div>
                        </div>
                        <div>
                            <p className="text-md  md:text-lg text-white">
                                Petran offers an Asset Performance Management (APM) system that
                                harnesses the power of artificial intelligence and the Internet of
                                Things (IoT) to empower data-driven decision-making and enable
                                proactive maintenance strategies.
                            </p>
                        </div>
                        <div className="flex mt-5 items-center">
                            <button className="rounded-full me-3 md:me-6 md:px-7 px-6 py-3 md:py-4 md:p-5 btn-white font-bold">Schedule Call</button>
                            <button className="rounded-full me-4 md:me-6 md:px-5 md:py-4 px-4 py-3 btn-white"><i className="fa-solid fa-play icon"></i></button>
                            <p className="md:text-lg text-sm font-bold text-white">Watch Video</p>
                        </div>
                    </div>
                    <div className="rounded-xl"><img
                        className="pe-10 md:pe-0"
                            src="https://www.ombrulla.com/_astro/asset-performance-management-software.82e2a11d_29kMe4.webp"
                            alt="Asset Perfromance Management Software" 
                           /></div>
                </div>
            </div>
        </div>
  );
};

export default PetranSection;
