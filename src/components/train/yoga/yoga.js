import React from "react";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      {/* Header Section */}
      <header className="w-full max-w-6xl p-6 text-center space-y-4">
        <h1 className="text-5xl font-bold text-gray-800">
          Discover Yourself
          <br />
          Discover Yoga
        </h1>
        <p className="text-gray-600 text-lg max-w-lg mx-auto">
          We share the transformative power of yoga with every mind, every body, everywhere
        </p>
        <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300">
          Join Now
        </button>

        {/* Members Section */}
        <div className="flex justify-center items-center space-x-3 mt-6">
          <div className="flex -space-x-4">
            {/* Replace with actual avatars */}
            <img src="https://via.placeholder.com/40" alt="avatar1" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://via.placeholder.com/40" alt="avatar2" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://via.placeholder.com/40" alt="avatar3" className="w-10 h-10 rounded-full border-2 border-white" />
            <img src="https://via.placeholder.com/40" alt="avatar4" className="w-10 h-10 rounded-full border-2 border-white" />
          </div>
          <div>
            <p className="text-gray-600 font-medium">9.5k+</p>
            <p className="text-gray-500 text-sm">More than 9.5k members are connected with us</p>
            <a href="#register" className="text-black font-bold underline">Register Now</a>
          </div>
        </div>
      </header>

      {/* Main Yoga Image Section */}
      <div className="w-full max-w-6xl flex justify-center items-center">
        <div className="relative">
          {/* Yoga Image */}
          <img
            src="https://via.placeholder.com/300"
            alt="Yoga"
            className="w-72 h-auto mx-auto"
          />

          {/* Mind Progression */}
          <div className="absolute top-0 left-0 transform translate-x-1/2 translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
            <p className="text-sm font-semibold text-gray-600">
              80%<br />
              <span className="text-xs font-normal">Mind Progression</span>
            </p>
          </div>
        </div>
        <div className="ml-12 space-y-2">
          <p className="text-2xl font-bold">30+</p>
          <p className="text-gray-500">Live Sessions</p>
          <p className="text-2xl font-bold">12k+</p>
          <p className="text-gray-500">Lives Impacted</p>
          <p className="text-2xl font-bold">&gt;60%</p>
          <p className="text-gray-500">Engagement Rate</p>
          <p className="text-2xl font-bold">95%</p>
          <p className="text-gray-500">User Satisfaction</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full max-w-6xl mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">
            "First I've paid for an online yoga program. I can feel my whole approach to life changing by utilizing all of the program content!"
          </p>
          <div className="mt-4 flex items-center space-x-2">
            <img src="https://via.placeholder.com/40" alt="Bessie Cooper" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-sm font-bold">Bessie Cooper</p>
              <p className="text-sm text-gray-500">California</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">
            "Absolutely love it so far! The real stage for yoga. The themes are meaningful, not silly. Instructors are so helpful!"
          </p>
          <div className="mt-4 flex items-center space-x-2">
            <img src="https://via.placeholder.com/40" alt="Anna Smith" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-sm font-bold">Anna Smith</p>
              <p className="text-sm text-gray-500">New York</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
