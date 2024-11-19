import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { portfolioItems, categories } from "../data/portfolioData";
import PortfolioImage from "../assets/projects/portfolio.webp";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter images based on the selected category
  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Intro Section */}
      <section className="text-center space-y-4 sm:space-y-6 lg:mb-10 mt-10 sm:mt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore Our Luxury Projects
        </h1>
        <p className="text-lg md:text-xl mb-8">
          A curated showcase of over 50 bespoke designs that redefine luxury.
        </p>
      </section>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center mb-12 space-x-4">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-lg text-sm font-medium ${
              selectedCategory === category
                ? "bg-indigo-500 text-white"
                : "bg-gray-200 text-gray-700"
            } hover:bg-indigo-400 hover:text-white transition-all`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-gray-100 shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;