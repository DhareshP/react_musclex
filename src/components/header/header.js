import React, { useState } from 'react'
import { Search } from 'lucide-react'

function FixedHeader() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      {/* Adjusting the header */}
      <header className="fixed top-0 left-0 right-0 bg-orange-200 shadow-md z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800 cursor-pointer">MuscleX</div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="/" className="px-4 py-2 text-gray-600 rounded hover:bg-orange-600 hover:text-gray-100 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="px-4 py-2 text-gray-600 rounded hover:bg-orange-600 hover:text-gray-100 transition duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="/train" className="px-4 py-2 text-gray-600 rounded hover:bg-orange-600 hover:text-gray-100 transition duration-300">
                  Trainings
                </a>
              </li>
              <li>
                <a href="/meal" className="px-4 py-2 text-gray-600 rounded hover:bg-orange-600 hover:text-gray-100 transition duration-300">
                  Meal Plans
                </a>
              </li>
              <li>
                <a href="/contact" className="px-4 py-2 text-gray-600 rounded hover:bg-orange-600 hover:text-gray-100 transition duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/blog" className="px-4 py-2 text-gray-600 rounded hover:bg-orange-600 hover:text-gray-100 transition duration-300">
                  Blogs
                </a>
              </li>
            </ul>
          </nav>

          {/* Adding Login and Signup buttons */}
          <div className="flex space-x-4">
            <a
              href="/login" // Update the href to the appropriate login route
              className="px-4 py-2 bg-orange-300 text-gray-800 rounded hover:bg-orange-600 hover:text-gray-100 transition duration-300 block text-center"
            >
              Login
            </a>
            <a
              href="/signup" // Update the href to the appropriate signup route
              className="px-4 py-2 bg-orange-300 text-gray-800 rounded hover:bg-orange-600 hover:text-gray-100 transition duration-300 block text-center"
            >
              Signup
            </a>
          </div>
        </div>
      </header>

      {/* Padding to avoid content being hidden behind the fixed header */}
      <div className="pt-20">
        {/* Rest of your content goes here */}
      </div>
    </>
  )
}

export default FixedHeader
