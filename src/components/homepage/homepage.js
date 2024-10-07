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

                <main className="min-h-screen bg-gradient-to-br from-orange-400 via-yellow-600 to-red-100 animate-gradient-move bg-[length:300%_600%]">


                <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 mb-8 lg:mb-0 group">
                <img
                    src="https://images.squarespace-cdn.com/content/v1/5696733025981d28a35ef8ab/1575620429155-LT6FA1J4FHK77E4UIYU8/biofit+natural+fitness+training+method+outdoor+workout.jpg?format=1500w"
                    alt="Yoga in wild example"
                    className="ml-4 mt-2 rounded-lg shadow-lg w-full group-hover:hidden"
                />
                <img
                    src="https://media.istockphoto.com/id/1174472274/photo/connection-with-nature.jpg?s=2048x2048&w=is&k=20&c=VN-OgOtLAyYjRYACRejIyRE9F3-spOsE_17S-KnPZ3s="
                    alt="Yoga in nature"
                    className="ml-4 mt-2 rounded-lg shadow-lg w-full hidden group-hover:block"
                />
                </div>

                <div className="lg:w-1/2 lg:pl-12">
                    <h1 className="text-5xl font-bold text-orange-200 mb-6">
                    Get Fit and Healthier with My MuscleX 
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                    No matter what your Fittness needs, MuscleX can connect you with
                    a creative expert to make you look and feel
                    healthier. Because good health makes great you.
                    </p>
                    <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 mr-4">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {/* Division 1 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg ml-4 mr-4 mb-4">
    <div className="overflow-hidden rounded-t-lg">
        <img
            src="https://img.freepik.com/free-photo/male-female-friends-practicing-yoga-together_23-2148732920.jpg?t=st=1728323992~exp=1728327592~hmac=5737b0b9590ea6d53f1da09d0e5677e392853f66dd5e762009c6a12a964204f7&w=996" // Replace with actual image URL
            alt="Description for image 1"
            className="w-full h-48 object-cover transition-transform transform hover:scale-105 duration-500 ease-in-out"/>
    </div>
    <h3 className="text-lg font-semibold mt-2">X-Transform</h3>
    <p className="text-gray-600">Get coached to lose weight for good.</p>
</div>


            {/* Division 2 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg ml-4 mr-4 mb-4">
                <img
                    src="https://img.freepik.com/premium-photo/two-women-doing-yoga-exercises-nature-adults-sitting-lotus-position_1048944-20126653.jpg?w=996" // Replace with actual image URL
                    alt="Description for image 2"
                    className="w-full h-48 object-cover transition-transform transform hover:scale-105 duration-500 ease-in-out"/>
                <h3 className="text-lg font-semibold mt-2">The Calm way</h3>
                <p className="text-gray-600">Making health easy, one day at a time.</p>
            </div>

            {/* Division 3 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg ml-4 mr-4 mb-4">
                <img
                    src="https://img.freepik.com/premium-photo/gym-interior-with-equipments_978521-35570.jpg?w=740" // Replace with actual image URL
                    alt="Description for image 3"
                    className="w-full h-48 object-cover transition-transform transform hover:scale-105 duration-500 ease-in-out"/>
                <h3 className="text-lg font-semibold mt-2">The Gear</h3>
                <p className="text-gray-600">Everything you need for your workout.</p>
            </div>

            {/* Division 4 */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg ml-4 mr-4 mb-4">
                <img
                    src="https://img.freepik.com/premium-photo/barbell-with-vegetables-fruits-exercise-equipment-healthy-food_941742-9667.jpg?w=900" // Replace with actual image URL
                    alt="Description for image 4"
                    className="w-full h-48 object-cover transition-transform transform hover:scale-105 duration-500 ease-in-out"/>
                <h3 className="text-lg font-semibold mt-2">Sugar fit</h3>
                <p className="text-gray-600">Reverse Type 2 Diabetes and Prediabetes.</p>
            </div>
        </div>

                
            </main>
            

            <footer>
                <Footer/>
            </footer>
            </div>
        )
        }