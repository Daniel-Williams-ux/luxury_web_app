import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import BackgroundImage from "../assets/backgrounds/services-bg.webp"; // Add a new background

const servicesData = [
  {
    id: 1,
    title: "Interior Design",
    description:
      "Transform your home with our award-winning interior design services. From concept to execution, we create luxurious and functional spaces tailored to you.",
    icon: "/assets/icons/interior-design.svg", // Replace with your icons
  },
  {
    id: 2,
    title: "Custom Furniture",
    description:
      "Handcrafted furniture to elevate your living spaces. Experience elegance and comfort with our bespoke furniture solutions.",
    icon: "/assets/icons/furniture.svg",
  },
  {
    id: 3,
    title: "Home Renovation",
    description:
      "Bring your dream home to life with our professional renovation services. Modern upgrades, timeless styles.",
    icon: "/assets/icons/renovation.svg",
  },
  {
    id: 4,
    title: "Lighting Design",
    description:
      "Brighten your home with custom lighting solutions that enhance aesthetics and functionality.",
    icon: "/assets/icons/lighting.svg",
  },
];

const Services = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center text-gray-800 mt-12"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Section */}
      <header className="text-center py-16 px-8 sm:px-12 md:px-16 bg-opacity-60 bg-black text-white rounded-b-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Exceptional Services, Tailored for You
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed">
          Explore our wide range of services designed to transform your home
          into a luxurious haven.
        </p>
      </header>

      {/* Services Grid */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white bg-opacity-90 shadow-lg rounded-xl mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:shadow-xl transform hover:-translate-y-2 transition duration-300 bg-gradient-to-br from-indigo-100 via-white to-indigo-50"
            >
              {/* Icon */}
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mb-4"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 sm:px-12 bg-indigo-500 text-white mt-12 rounded-xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Transform Your Space?
        </h2>
        <p className="text-lg sm:text-xl mb-8">
          Contact us today to get started on your next luxury project.
        </p>
        <Link
          to="/contact"
          className="px-8 py-3 rounded-lg bg-white text-indigo-500 text-sm font-medium hover:bg-gray-200 transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default Services;