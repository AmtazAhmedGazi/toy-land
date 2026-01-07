import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-[calc(100vh-72px)] max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A place where play, learning, and creativity come together.
        </p>
      </section>

      {/* Who We Are */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Who We Are
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We are a passionate team dedicated to creating joyful experiences for
          children through thoughtfully designed toys. What began as a small
          idea has grown into a trusted destination for playful learning and
          meaningful fun.
        </p>
      </section>

      {/* Mission */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Our Purpose
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our purpose is simple:{" "}
          <span className="font-semibold text-gray-800">
            to encourage imagination, curiosity, and happiness through play.
          </span>{" "}
          Every product we offer is designed to support growth, creativity, and
          confidence in young minds.
        </p>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          What We Stand For
        </h2>

        <div className="space-y-4 text-lg text-gray-600">
          <div className="flex items-start gap-3">
            <span className="text-yellow-500 text-2xl">⭐</span>
            <p>
              <span className="font-semibold text-gray-800">
                Reliable Quality
              </span>{" "}
              – Each product is carefully tested to ensure safety and long-term
              use.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-pink-500 text-2xl">🎨</span>
            <p>
              <span className="font-semibold text-gray-800">
                Creative Thinking
              </span>{" "}
              – Designed to spark imagination and hands-on learning.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-blue-500 text-2xl">💬</span>
            <p>
              <span className="font-semibold text-gray-800">Customer Care</span>{" "}
              – We value trust, transparency, and long-term relationships.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-600 text-2xl">🌱</span>
            <p>
              <span className="font-semibold text-gray-800">
                Responsible Choices
              </span>{" "}
              – We aim to minimize environmental impact wherever possible.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Team</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Behind every product is a dedicated group of designers, educators, and
          creators who believe play is an essential part of childhood
          development.
        </p>
      </section>

      {/* Closing Section */}
      <section className="text-center mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Let’s Create Joy Together
        </h3>
        <p className="text-gray-600 text-lg">
          Discover products that turn everyday moments into lasting memories.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
