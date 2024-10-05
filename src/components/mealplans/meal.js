import React, { useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import Header from '../header/header';
import Footer from '../footer/footer';

const MealsPage = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log('Search query:', searchQuery)
    // Implement your search functionality here
  }

  const recipes = [
    { id: 1, title: 'Chicken & Spinach Skillet Pasta with Lemon & Parmesan', image: '/placeholder.svg?height=200&width=300', category: 'Healthy Chicken Recipes' },
    { id: 2, title: 'Skillet Lemon Chicken & Potatoes with Kale', image: '/placeholder.svg?height=200&width=300', category: 'Healthy Chicken Recipes' },
    { id: 3, title: 'Sheet-Pan Chicken Fajita Bowls', image: '/placeholder.svg?height=200&width=300', category: 'Healthy Bowl Recipes' },
    { id: 4, title: 'Chicken Cutlets with Sun-Dried Tomato Cream Sauce', image: '/placeholder.svg?height=200&width=300', category: 'Healthy Chicken Recipes' },
    { id: 5, title: 'Chicken & Spinach Skillet Pasta with Lemon & Parmesan', image: '/placeholder.svg?height=200&width=300', category: 'Healthy Chicken Recipes' },
    { id: 6, title: 'Skillet Lemon Chicken & Potatoes with Kale', image: '/placeholder.svg?height=200&width=300', category: 'Healthy Chicken Recipes' },
    { id: 7, title: 'Sheet-Pan Chicken Fajita Bowls', image: '/placeholder.svg?height=200&width=300', category: 'Healthy Bowl Recipes' },
    { id: 8, title: 'Chicken Cutlets with Sun-Dried Tomato Cream Sauce', image: '/placeholder.svg?height=200&width=300', category: 'Healthy Chicken Recipes' },
    // Add more recipe objects as needed
  ]

  return (
    <div>
      <header>
        <Header/>
      </header>
    <div className="bg-white min-h-screen">
      <header className="bg-green-700 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Meals and Healthy Recipes</h1>
        </div>
      </header>

      <nav className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Breakfast</a></li>
            <li><a href="#" className="hover:underline">Lunch</a></li>
            <li><a href="#" className="hover:underline">Bakes</a></li>
            <li><a href="#" className="hover:underline">Snacks</a></li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Recipes</h2>
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search recipes"
              value={searchQuery}
              onChange={handleSearchChange}
              className="pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-gray-400" />
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
                <p className="text-sm text-gray-600">{recipe.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300 flex items-center">
            Load More
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
    <footer>
      <Footer/>
    </footer>
    </div>
  )
}

export default MealsPage