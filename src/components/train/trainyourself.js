import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";


const Programmes = () => {
  return (
    <div>
        <header>
            <Header/>
        </header>
    <section className=" -800 py-20">
      {/* Programmes Title bg-white*/}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-white text-3xl font-semibold">Our Programmes</h2>
      </div>

      {/* Programmes Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Program 1: Private 1:1 */}
        <div className="relative mb-4 ml-4">
          <img
            src="https://images.pexels.com/photos/6740735/pexels-photo-6740735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual image URL
            alt="Private 1:1"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 bg-green-800 bg-opacity-80 p-6 text-white w-full">
            <a href="/yoga" className="text-lg font-bold">Yoga</a>
            <p className="mt-2">Dedicated, bespoke support from your registered dietitian and personal trainer. Ideal for complex lifestyles, health conditions and fully tailored programmes.</p>
          </div>
        </div>

        {/* Program 2: Livestream */}
        <div className="relative mb-4 mr-4">
          <img
            src="https://images.pexels.com/photos/8861004/pexels-photo-8861004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Replace with actual image URL
            alt="Livestream"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 bg-green-800 bg-opacity-80 p-6 text-white w-full">
            <a href="/calisthenics" className="text-lg font-bold">Calisthenics</a>
            <p className="mt-2">Interactive livestream webinars combining real-time coaching from our expert dietitians with added community support. Available worldwide.</p>
          </div>
        </div>
      </div>

      <div className="h-8" /> {/* Adjust height as needed */}

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Program 1: Private 1:1 */}
        <div className="relative ml-4">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5af9f2c32487fd3d62b20afb/6ca5267a-ea0c-4d8b-b05d-4e8839c6c06e/CookedPhotography-EVOLVE-2022-88+%281%29.JPG" // Replace with actual image URL
            alt="Private 1:1"
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute bottom-0 left-0 bg-green-800 bg-opacity-80 p-6 text-white w-full">
            <a href='' className="text-lg font-bold">Private 1:1</a>
            <p className="mt-2">Dedicated, bespoke support from your registered dietitian and personal trainer. Ideal for complex lifestyles, health conditions and fully tailored programmes.</p>
          </div>
        </div>

        {/* Program 2: Livestream */}
        <div className="relative mr-4">
          <img
            src="https://i0.wp.com/typeonefitness.org/wp-content/uploads/2022/08/Stream-Live-Classes-1.jpg?fit=2000%2C1333&ssl=1  " // Replace with actual image URL
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
