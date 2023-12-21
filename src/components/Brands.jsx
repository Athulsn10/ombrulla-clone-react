// BrandsSection.jsx
import React from 'react';

const Brands = () => {
  return (
    <div className="md:block hidden">
      <div className="mx-auto max-w-7xl px-6 lg:py-16 lg:px-8">
        <div className="flex items-center justify-center mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0000FF" className="w-3 h-3 mt-1">
            <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd"></path>
          </svg>
          <h4 className="text-center text-sm font-medium mt-1 font-sans p-2">
            BRANDS WE WORK WITH
          </h4>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0000FF" className="w-3 h-3 mt-1">
            <path fillRule="evenodd" d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z" clipRule="evenodd"></path>
          </svg>
        </div>

        <h2 className="text-3xl lg:text-5xl font-medium text-center font-sans tracking-tight mb-6 lg:mb-10">
          Trusted by Thousands of Businesses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 lg:mt-8">
          <div className="flex justify-center bg-gray-50 py-4 px-4">
            <img src="https://www.ombrulla.com/_astro/unv.85d8fa6f_1oWCsP.webp" alt="unv" className="h-20 w-20 md:h-32 md:w-32" />
          </div>
          <div className="flex justify-center bg-gray-50 py-4 px-4">
            <img src="https://www.ombrulla.com/_astro/dahua.d9dec1a0_1788pM.webp" alt="Dahua" className="h-24 w-24 md:h-36 md:w-36" />
          </div>
          <div className="flex justify-center bg-gray-50 py-4 px-4">
            <img src="https://www.ombrulla.com/_astro/nvidia.8ba96db4_Z1BLchq.webp" alt="Nvidia" className="h-20 w-20 md:h-32 md:w-32 object-cover" />
          </div>
          <div className="flex justify-center bg-gray-50 py-4 px-4">
            <img src="https://www.ombrulla.com/_astro/amazon.8aa611f6_Zkubpr.webp" alt="Amazon" className="h-24 w-24 md:h-36 md:w-36 object-cover" />
          </div>
          <div className="flex justify-center bg-gray-50 py-4 px-4">
            <img src="https://www.ombrulla.com/_astro/hikvision.2a55c6c2_Z1UqjJV.webp" alt="Hikvision" className="h-20 w-20 md:h-32 md:w-32" />
          </div>
          <div className="flex justify-center bg-gray-50 py-4 px-4">
            <img src="https://www.ombrulla.com/_astro/azure.3a96288f_ZDjkY6.webp" alt="Azure" className="h-16 w-20 md:h-24 md:w-28" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
