import React from 'react';

function Customers() {
  const logos1 = [
    "https://www.ombrulla.com/best-western.webp",
    "https://www.ombrulla.com/dubai-festival-city.webp",
    "https://www.ombrulla.com/wild-leaf.webp",
    "https://www.ombrulla.com/emirates.webp",
    "https://www.ombrulla.com/burger-king.webp",
  ];

  const logos2 = [
    "https://www.ombrulla.com/damac.webp",
    "https://www.ombrulla.com/planet-fitness.webp",
    "https://www.ombrulla.com/suja.webp",
    "https://www.ombrulla.com/azelit.webp",
  ];

  return (
    <div className='mt-8 mb-8 products p-3 md:px-20 flex flex-col items-center gap-x-7 gap-y-7'>
      <div class="text-center">
        <div class="flex md:gap-x-4 gap-x-2 items-center mb-4 mx-auto justify-center">
          <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
          <p class="text-medium md:font-bold font-normal">OUR CUSTOMERS</p>
          <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-2 h-2 md:w-2 md:h-2"><path fill="#0000ff" fill-rule="evenodd" d="m0 4.8q0-1 0.4-1.8 0.3-0.9 1-1.6 0.7-0.7 1.6-1 0.8-0.4 1.8-0.4h14.4q1 0 1.8 0.4 0.9 0.3 1.6 1 0.7 0.7 1 1.6 0.4 0.8 0.4 1.8v14.4q0 1-0.4 1.8-0.3 0.9-1 1.6-0.7 0.7-1.6 1-0.8 0.4-1.8 0.4h-14.4q-1 0-1.8-0.4-0.9-0.3-1.6-1-0.7-0.7-1-1.6-0.4-0.8-0.4-1.8z"></path></svg>
        </div>
        <h3 class="md:text-5xl text-3xl">They Trust Us</h3>
      </div>
      <div class="logos">
        <div class="logo-scroll">
          {/* Slide 1 */}
          <div className="flex cards">
            {logos1.map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index + 1}`} class="p-5 h-[8rem] md:h-[12rem] logo" />
            ))}
          </div>
          {/* Slide 2 */}
          <div className="flex hidden cards">
            {logos2.map((logo, index) => (
              <img key={index} src={logo} alt={`Logo ${index + 6}`} class="p-5 h-[8rem] md:h-[12rem] logo" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
