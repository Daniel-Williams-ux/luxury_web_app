// src/pages/Home.jsx
import React from "react";
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from "react-router-dom";
import HeroImage from "../assets/home-hero.webp";
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
                <Link to="/portfolio" className="text-sky-500 hover:underline">
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
                <Link to="/portfolio" className="text-sky-500 hover:underline">
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
                <Link to="/portfolio" className="text-sky-500 hover:underline">
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

            {/* Call to Action */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Redefine Your Space
          </h2>
          <p className="text-lg mb-8">
            Discover how we can transform your home into a luxurious retreat with our bespoke POP designs.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-indigo-500 rounded-lg hover:bg-indigo-700 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;