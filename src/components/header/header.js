import React, { useState } from 'react'
import { Search } from 'lucide-react'

function FixedHeader() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log('Search query:', searchQuery)
    // Implement your search functionality here
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">MuscleX</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="text-gray-600 hover:text-gray-800">Home</a></li>
            <li><a href="/about" className="text-gray-600 hover:text-gray-800">About</a></li>
            <li><a href="/train" className="text-gray-600 hover:text-gray-800">Trainings</a></li>
            <li><a href="/meal" className="text-gray-600 hover:text-gray-800">Meal Plans</a></li>
            <li><a href="/contact" className="text-gray-600 hover:text-gray-800">Contact Us</a></li>
            <li><a href="/blog" className="text-gray-600 hover:text-gray-800">Blogs</a></li>
          </ul>
        </nav>
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            placeholder="Search here"
            value={searchQuery}
            onChange={handleSearchChange}
            className="pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Search className="h-5 w-5 text-gray-400" />
          </button>
        </form>
      </div>
    </header>
  )
}

export default FixedHeader