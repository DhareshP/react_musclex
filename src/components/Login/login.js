import React from 'react';
import Footer from "../footer/footer";
import Header from "../header/header"; // Adjust the import path as necessary

const LoginForm = () => {
  return (
    <div>
         <header>
                <Header/>
        </header>
    
    <div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

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
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Change button to anchor tag */}
          <a
            href="#"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded text-center block hover:bg-blue-600"
          >
            Login
          </a>

          <div className="flex justify-between items-center mt-4">
            <a href="/signup" className="text-blue-500 hover:underline">
              Signup
            </a>
            <a href="/forgot-password" className="text-gray-600 hover:underline">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
    </div>
  );
};

export default LoginForm;
