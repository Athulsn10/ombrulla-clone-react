import React, { useState } from "react";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="py-4 md:mx-12 mx-5" >
      <nav className="flex items-center justify-between md:mx-12 relative">
        <div className="text-dark font-bold" >
          <a href="#">
            <img width="145" src="Img/logo.svg" alt="" />
          </a>
        </div>
        {/* Hamburger Icon for Mobile */}
        <button
          className="flex md:hidden"
          onClick={toggleDrawer}
          style={{ zIndex: 2 }}
        >
          {!isDrawerOpen ? (
            <i className="fa-solid fa-bars text-3xl text-blue-600"></i>
          ) : (
            <i className="fa-solid fa-xmark text-4xl text-blue-600"></i>
          )}{" "}
        </button>
        <div
          className={`md:hidden ${
            isDrawerOpen ? "block" : "hidden"
          } fixed top-0 left-0 h-full`}
          style={{ zIndex: 100, backgroundColor: "white", width: "70%" }}
        >
          {/* Side Drawer Content */}
          <div
            className="flex items-center justify-center border-b-2 "
            style={{ backgroundColor: "#f3f4f6", height: "100px" }}
          >
            <img width="170" src="Img/logo.svg" alt="" />
          </div>
          <ul className="px-4">
            <li className="w-full border-b-2 ps-9 py-4 ">Home</li>
            <li className="w-full flex justify-between border-b-2 ps-9 py-4  ">
              <p>Services</p>
              <button
                className="h-7 w-7 me-3 flex justify-center items-center rounded-full"
                style={{ backgroundColor: "#004eff", color: "white" }}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </li>
            <li className="w-full flex justify-between border-b-2 ps-9 py-4  ">
              <p>Product</p>
              <button
                className="h-7 w-7 me-3 flex justify-center items-center rounded-full"
                style={{ backgroundColor: "#004eff", color: "white" }}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </li>
            <li className="w-full border-b-2 ps-9 py-4 ">About</li>
            <li className="w-full border-b-2 ps-9 py-4 ">Blog</li>
            <li className="w-full  ps-9 py-4 ">Contact</li>
          </ul>
        </div>

        <div className="hidden md:flex space-y-4 md:space-x-9 md:space-y-0">
          <a href="#" className="font-bold text-blue-600">
            Home
          </a>
          <a href="#" className="nav-link font-bold">
            Services
          </a>
          <a href="#" className="nav-link font-bold">
            Product
          </a>
          <a href="#" className="nav-link font-bold">
            About
          </a>
          <a href="#" className="nav-link font-bold">
            Blog
          </a>
          <a href="#" className="nav-link font-bold">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
