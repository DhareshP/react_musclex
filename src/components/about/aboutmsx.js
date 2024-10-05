import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const About = () => {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto py-24 px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center">About Us</h1>
          <p className="mt-4 text-lg text-gray-600 text-center">
            We are a dedicated team committed to your well-being.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
        <p className="mt-4 text-gray-600">
          At The Parker Practice, we strive to provide the highest quality of health and wellness services to help you achieve your goals. We believe in a holistic approach to well-being, addressing both the mind and body.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Dr. Jane Parker</h3>
            <p className="text-gray-600">Founder & Wellness Expert</p>
            <p className="mt-2">
              Dr. Jane Parker is a leading expert in holistic wellness and has helped countless individuals achieve optimal health.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">John Smith</h3>
            <p className="text-gray-600">Nutritionist</p>
            <p className="mt-2">
              With a passion for nutrition and wellness, John provides personalized nutrition plans tailored to each individual's needs.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Emily Davis</h3>
            <p className="text-gray-600">Yoga Instructor</p>
            <p className="mt-2">
              Emily's yoga sessions are designed to enhance flexibility and mental clarity, promoting overall well-being.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Mark Johnson</h3>
            <p className="text-gray-600">Physical Therapist</p>
            <p className="mt-2">
              Mark specializes in physical therapy, helping individuals recover from injuries and regain their strength.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <h2 className="text-3xl font-bold text-gray-800 mt-8">Our Values</h2>
        <ul className="list-disc list-inside mt-4 text-gray-600">
          <li>Compassion: We treat everyone with empathy and respect.</li>
          <li>Integrity: We maintain the highest standards in our services.</li>
          <li>Collaboration: We believe in working together for the best outcomes.</li>
          <li>Excellence: We strive for excellence in everything we do.</li>
        </ul>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800">Ready to Start Your Journey?</h3>
          <p className="mt-2 text-gray-600">Contact us today to schedule your first consultation.</p>
          <a
            href="/contact"
            className="inline-block mt-4 px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
            <footer>
                <Footer/>
            </footer>

        </div>
    );
};
export default About;