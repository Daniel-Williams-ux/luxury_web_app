// src/pages/Home.jsx
import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from "react-router-dom";
import HeroImage from "../assets/image.webp";
import Project1 from "../assets/projects/project-1.webp";
import Project2 from "../assets/projects/project-2.webp";
import Project3 from "../assets/projects/project-3.webp";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Hero Content */}
        <section className="text-center space-y-4 sm:space-y-6 lg:mb-10 mt-10 sm:mt-20">
        <h1 className="text-xl sm:text-3xl lg:text-3xl font-medium font-dmSans leading-snug sm:leading-10 text-black">
        REDEFINING LUXURY SPACES.
        </h1>
        <p className="text-lg bg-white text-blue-950 md:text-2xl">
            Explore tailored designs that transform homes into modern masterpieces.
          </p>
          <Link
            to="/portfolio"
            className="inline-block px-8 py-3 bg-sky-500 text-white rounded-lg text-lg font-semibold hover:bg-indigo-800 transition-all duration-300"
          >
            View Our Work
          </Link>
      </section>

      {/*Hero Image section */}
      <section className="flex justify-center">
        <img src={HeroImage} alt="Luxury home design" className="rounded-lg shadow-lg max-w-full" fetchpriority="high"/>
      </section>

      <section className="w-full flex items-center justify-center overflow-hidden">
        {/* Hero Content */}
        <div className="relative z-10 text-center text-sky-500 px-4 max-w-2xl mx-au">
          <h1 className="text-xl md:text-3xl font-bold leading-tight">
          Elevating Every Space with Sophisticated Design
          </h1>
          <p className="text-lg bg-white text-red-500 md:text-xl mt-6 mb-6">
            Explore tailored designs that transform homes into modern masterpieces.
          </p>
        </div>


      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Featured Projects</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12">
            A showcase of our work, blending sophistication with custom luxury designs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="relative overflow-hidden bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${Project1})` }}
              ></div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2">Project 1</h3>
                <p className="text-gray-700 mb-4">
                  Designed to bring luxury and comfort into every corner of your home.
                </p>
                <Link to="/portfolio" className="text-indigo-600 hover:underline">
                  View Details
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="relative overflow-hidden bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${Project2})` }}
              ></div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2">Project 2</h3>
                <p className="text-gray-700 mb-4">
                  Designed to bring luxury and comfort into every corner of your home.
                </p>
                <Link to="/portfolio" className="text-indigo-600 hover:underline">
                  View Details
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="relative overflow-hidden bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${Project3})` }}
              ></div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold mb-2">Project 3</h3>
                <p className="text-gray-700 mb-4">
                  Designed to bring luxury and comfort into every corner of your home.
                </p>
                <Link to="/portfolio" className="text-indigo-600 hover:underline">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">What Our Clients Say</h2>
          <div className="space-y-10">
            {[1, 2, 3].map((testimonial) => (
              <div
                key={testimonial}
                className="bg-gray-50 p-8 rounded-lg shadow-md"
              >
                <p className="text-lg text-gray-700 italic">
                  "Exceptional quality and service. They turned our vision into reality
                  with unmatched precision and detail."
                </p>
                <span className="mt-4 block text-gray-900 font-semibold">
                  Client {testimonial}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section  */}
      <footer className="bg-sky-800 py-10 sm:py-12 text-white space-y-8 sm:space-y-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Footer */}
          <div className="flex flex-col md:flex-row justify-between items-start space-y-6 sm:space-y-0">
            <div>
              <h4 className="lg:text-6xl sm:text-lg font-semibold font-dmSans leading-snug">
              Let’s Redefine <br/> Your Space <br/>
              </h4>
            </div>
            <div className="text-left md:text-right space-y-4 sm:space-y-0">
              <p className="text-base sm:text-base pb-3">
                Leverage our database to equip your <br/> restaurant with accurate nutritional data.
              </p>
              <button className="bg-white text-sky-800 text-sm px-10 py-2 rounded-lg hover:bg-headerColor hover:text-white">
                Send us a mail
              </button>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between mt-8 sm:mt-12 space-y-8 md:space-y-0 md:space-x-8">
            {/* Logo and Socials */}
            <div className="space-y-2">
              <Link href="/">
                <img src="/images/logo.png" alt="logo" width={100} height={40} className="h-10 w-auto" />
              </Link>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram className="h-6 w-6 text-white hover:text-headerColor transition-colors" />
                </Link>
                <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter className="h-6 w-6 text-white hover:text-headerColor transition-colors" />
                </Link>
                <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook className="h-6 w-6 text-white hover:text-headerColor transition-colors" />
                </Link>
              </div>
            </div>

            {/* Address */}
            <div>
              <h4 className="font-normal font-dmSans text-lg sm:text-base">Address</h4>
              <p className="text-sm font-light font-dmSans">123 Fitness St, Healthy City, USA</p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-normal font-dmSans text-lg sm:text-base">Call us</h4>
              <p className="text-sm font-light font-dmSans">+123-456-7890</p>
              <p className="text-sm font-light font-dmSans">+098-765-4321</p>
              <p className="text-sm font-light font-dmSans">Email: contact@befitapp.com</p>
            </div>

            {/* Policies */}
            <div>
              <h4 className="font-normal font-dmSans text-lg sm:text-base">Our Policies</h4>
              <ul className="space-y-1 text-sm font-light font-dmSans">
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms of Use</Link></li>
                <li><Link href="#">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;