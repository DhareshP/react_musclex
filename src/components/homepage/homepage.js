    import React, { useState } from 'react'
    import { Search } from 'lucide-react'
    import Header from '../header/header.js'
    import Footer from '../footer/footer.js'

    export default function Homepage() {
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
        <div>
            <div>
                <header>
                    <Header/>
                </header>
            </div>

        <main className="flex-grow container mx-auto px-4 py-12 mt-16 min-h-screen">
            <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
                <img
                src="https://images.squarespace-cdn.com/content/v1/5696733025981d28a35ef8ab/1575620429155-LT6FA1J4FHK77E4UIYU8/biofit+natural+fitness+training+method+outdoor+workout.jpg?format=1500w"
                alt="Yoga in wild example"
                className="rounded-lg shadow-lg w-full"
                />
            </div>
            <div className="lg:w-1/2 lg:pl-12">
                <h1 className="text-5xl font-bold text-purple-600 mb-6">
                Get Fit and Healthier with My MuscleX 
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                No matter what your Fittness needs, MuscleX can connect you with
                a creative expert to make you look and feel
                healthier. Because good health makes great you.
                </p>
                <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                <div className="relative flex-grow">
                    <input
                    type="text"
                    placeholder="Have any questions?"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full px-4 py-2 border rounded-md"
                    aria-label="Search for health"
                    />
                    <Search className="absolute right-3 top-2.5 text-gray-400" aria-hidden="true" />
                </div>
                <button type="submit" className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    Search
                </button>
                </form>
                <div>
                <span className="text-gray-600 mr-2">Popular:</span>
                <div className="inline-flex space-x-2">
                    <a href="#yoga" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">Yoga</a>
                    <a href="#yoga" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">Mindfullness</a>
                    <a href="#Body-Streching" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">Meals</a>
                    <a href="#video-lessons" className="px-3 py-1 bg-gray-200 rounded-full text-sm hover:bg-gray-300">Video lessons</a>
                </div>
                </div>
            </div>
            </div>
        </main>

        <footer>
            <Footer/>
        </footer>
        </div>
    )
    }