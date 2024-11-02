// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-semibold text-gray-900">
          <Link to="/">LuxuryDesigns</Link>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden md:flex space-x-8 font-semibold">
          <Link to="/" className="text-gray-700 hover:text-menuColor transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-menuColor transition-colors">
            About
          </Link>
          <Link to="/portfolio" className="text-gray-700 hover:text-menuColor transition-colors after:content-['']">
            Portfolio
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-menuColor transition-colors after:content-['']">
            Services
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-menuColor transition-colors after:content-['']">
            Contact
          </Link>
        </nav>

        {/* Contact Button - Visible on larger screens */}
        <div className="hidden md:flex">
          <Link to="/contact" className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        {/* <button
          className="md:hidden text-gray-900 focus:outline-none menuColor"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons" >menu</span>
        </button> */}
        <button
            className="md:hidden text-gray-900 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
            {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" /> // XMarkIcon replaces XIcon in v2
            ) : (
                <Bars3Icon className="h-6 w-6" /> // Bars3Icon replaces MenuIcon in v2
            )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white font-semibold bg-opacity-90 backdrop-blur-lg absolute top-16 left-0 w-full shadow-md z-40">
          <nav className="flex flex-col items-center space-y-4 py-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;