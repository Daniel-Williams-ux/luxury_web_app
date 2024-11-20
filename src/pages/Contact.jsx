import React from "react";
import contactBg from "../assets/contact-bg/contact-bg.webp";
import { FaInstagram, FaTwitter, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-indigo-200 via-white to-gray-200 py-16 px-8"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl mx-auto bg-white/90 shadow-lg rounded-lg p-8 sm:p-12">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700">
            Get in Touch
          </h1>
          <p className="text-gray-700 text-lg">
            We'd love to hear from you! Fill out the form below or reach us directly.
          </p>
        </div>

        {/* Contact Form and Address Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="6"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-500 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-indigo-600 text-2xl" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">Address</h3>
                <p className="text-gray-600">
                  123 Luxury St, Design City, World
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhone className="text-indigo-600 text-2xl" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                <p className="text-gray-600">+123-456-7890</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-indigo-600 text-2xl" />
              <div>
                <h3 className="text-lg font-medium text-gray-800">Email</h3>
                <p className="text-gray-600">info@luxuryspaces.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-16 text-center space-y-4">
          <h3 className="text-2xl font-medium text-gray-800">Follow Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 text-3xl hover:text-indigo-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 text-3xl hover:text-indigo-400 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 text-3xl hover:text-indigo-400 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;