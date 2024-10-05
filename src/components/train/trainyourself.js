import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";


const Programmes = () => {
  return (
    <div>
        <header>
            <Header/>
        </header>
    <section className="bg-white    -800 py-20">
      {/* Programmes Title */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-white text-3xl font-semibold">Our Programmes</h2>
      </div>

      {/* Programmes Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Program 1: Private 1:1 */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/600x400" // Replace with actual image URL
            alt="Private 1:1"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 bg-green-800 bg-opacity-80 p-6 text-white w-full">
            <a href="/yoga" className="text-lg font-bold">Yoga</a>
            <p className="mt-2">Dedicated, bespoke support from your registered dietitian and personal trainer. Ideal for complex lifestyles, health conditions and fully tailored programmes.</p>
          </div>
        </div>

        {/* Program 2: Livestream */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/600x400" // Replace with actual image URL
            alt="Livestream"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 bg-green-800 bg-opacity-80 p-6 text-white w-full">
            <a href="/calisthenics" className="text-lg font-bold">Calisthenics</a>
            <p className="mt-2">Interactive livestream webinars combining real-time coaching from our expert dietitians with added community support. Available worldwide.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Program 1: Private 1:1 */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/600x400" // Replace with actual image URL
            alt="Private 1:1"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 bg-green-800 bg-opacity-80 p-6 text-white w-full">
            <a href='' className="text-lg font-bold">Private 1:1</a>
            <p className="mt-2">Dedicated, bespoke support from your registered dietitian and personal trainer. Ideal for complex lifestyles, health conditions and fully tailored programmes.</p>
          </div>
        </div>

        {/* Program 2: Livestream */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/600x400" // Replace with actual image URL
            alt="Livestream"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 bg-green-800 bg-opacity-80 p-6 text-white w-full">
            <a href='' className="text-lg font-bold">Livestream</a>
            <p className="mt-2">Interactive livestream webinars combining real-time coaching from our expert dietitians with added community support. Available worldwide.</p>
          </div>
        </div>
      </div>
    </section>
    <div>
      <footer>
            <Footer/>
        </footer>
      </div>
    </div>
    
  );
};

export default Programmes;
