import React from "react";

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Calisthenics Programs</h1>
          <nav className="space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
            <a href="/programs" className="text-gray-600 hover:text-gray-800">Programs</a>
            <a href="/about" className="text-gray-600 hover:text-gray-800">About</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center py-20" style={{ backgroundImage: `url('https://via.placeholder.com/1200x600')` }}>
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Transform Your Body with Calisthenics</h2>
          <p className="text-white text-lg mb-6">
            Our specially designed programs will guide you through the process of mastering bodyweight exercises.
          </p>
          <a href="#programs" className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition">
            View Programs
          </a>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Our Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src="https://via.placeholder.com/400x200" alt="Program 1" className="w-full h-48 object-cover rounded-t-lg" />
              <h4 className="text-xl font-semibold mt-4">Beginner Program</h4>
              <p className="text-gray-600 mt-2">Start your calisthenics journey with our beginner-friendly program.</p>
              <a href="/programs/beginner" className="text-blue-600 hover:underline mt-4 inline-block">Learn More</a>
            </div>

            {/* Program Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src="https://via.placeholder.com/400x200" alt="Program 2" className="w-full h-48 object-cover rounded-t-lg" />
              <h4 className="text-xl font-semibold mt-4">Intermediate Program</h4>
              <p className="text-gray-600 mt-2">Take your skills to the next level with our intermediate program.</p>
              <a href="/programs/intermediate" className="text-blue-600 hover:underline mt-4 inline-block">Learn More</a>
            </div>

            {/* Program Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src="https://via.placeholder.com/400x200" alt="Program 3" className="w-full h-48 object-cover rounded-t-lg" />
              <h4 className="text-xl font-semibold mt-4">Advanced Program</h4>
              <p className="text-gray-600 mt-2">Master calisthenics and achieve your fitness goals with our advanced program.</p>
              <a href="/programs/advanced" className="text-blue-600 hover:underline mt-4 inline-block">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">What Our Members Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600">
                "This program changed my life! I can now do handstands and pull-ups with ease. Highly recommended!"
              </p>
              <div className="mt-4 flex items-center justify-center space-x-3">
                <img src="https://via.placeholder.com/40" alt="user1" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-bold">John Doe</p>
                  <p className="text-sm text-gray-500">New York</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-600">
                "I've never felt stronger! The advanced program took me from zero to hero. The coaches are amazing."
              </p>
              <div className="mt-4 flex items-center justify-center space-x-3">
                <img src="https://via.placeholder.com/40" alt="user2" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-bold">Jane Smith</p>
                  <p className="text-sm text-gray-500">California</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Calisthenics Programs. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProgramsPage;
