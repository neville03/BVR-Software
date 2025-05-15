import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">BVR</div>

        {/* Menu (Hidden on small screens) */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            For Startups
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Invest
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            How It Works
          </a>
          <a href="about" className="text-gray-600 hover:text-gray-800">
            About Us 
          </a>
        </div>

        {/* Auth Buttons (Hidden on small screens) */}
        <div className="hidden md:flex space-x-4  items-center">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Log In
          </a>
          <a
            href="#"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger Icon) */}
        <button className="md:hidden text-gray-600 focus:outline-none">
          {/* Hamburger Icon - You can use an SVG here */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
