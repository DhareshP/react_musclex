import React from 'react';
import Footer from "../footer/footer"; // Adjust the import path as necessary
import Header from "../header/header";

const SignupForm = () => {
  return (
    <div>
        <header>
                <Header/>
        </header>
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sign Up
          </button>

          <div className="flex justify-between items-center mt-4">
            <a href="/login" className="text-blue-500 hover:underline">
              Already have an account? Login
            {/* </a>
            {/* <a href="#" className="text-gray-600 hover:underline">
              Forgot Password? */}
            </a>
          </div> 
        </form>
      </div>
      </div>
      <footer>
        <Footer />
      </footer>
   </div>
  );
};

export default SignupForm;
