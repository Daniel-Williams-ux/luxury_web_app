import React from "react";
import OfficeImage from "../assets/projects/office.webp";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Section 1: Intro Text */}
      <section className="text-center space-y-4 sm:space-y-6 lg:mb-10 mt-10 sm:mt-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-lg md:text-xl">
            Redefining luxury interiors with innovative POP designs, where creativity meets craftsmanship.
          </p>
      </section>

      {/* Section 2: About Image */}
      <section className="flex justify-center">
        <img src={OfficeImage} alt="About Us Image" className="rounded-lg shadow-lg max-w-full" fetchpriority="high"/>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Vision & Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To be the premier choice for luxury home designs by seamlessly blending elegance, functionality, and innovation. We aim to create timeless interiors that redefine the art of living.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To transform spaces into sophisticated havens through exceptional craftsmanship, cutting-edge designs, and a commitment to exceeding client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Founder Story */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Meet the Founder
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img
                src="/path-to-founder-image.jpg"
                alt="Founder Image"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">John Doe</h3>
              <p className="text-gray-700 text-lg mb-4">
                With over 15 years of experience in luxury home design and POP art, John has dedicated his career to transforming ordinary spaces into stunning masterpieces. His meticulous attention to detail, coupled with a passion for innovative design, has earned him a reputation as a leader in the industry.
              </p>
              <p className="text-gray-700 text-lg">
                "I believe that every home tells a story, and my mission is to make that story extraordinary through designs that inspire, elevate, and endure."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-6 bg-gray-50 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Exquisite Craftsmanship</h3>
              <p className="text-gray-700">
                Our designs are meticulously crafted to ensure every detail reflects elegance and sophistication.
              </p>
            </div>
            <div className="p-6 bg-gray-50 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Personalized Approach</h3>
              <p className="text-gray-700">
                We tailor every project to suit your unique preferences and lifestyle, ensuring a perfect fit for your home.
              </p>
            </div>
            <div className="p-6 bg-gray-50 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Innovative Designs</h3>
              <p className="text-gray-700">
                Combining modern aesthetics with timeless elegance, our designs push the boundaries of creativity.
              </p>
            </div>
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

export default About;