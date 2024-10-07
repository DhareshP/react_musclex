import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";

const Contact = () => {
    return (   
      <div>
        <header>
                <Header/>
            </header>
          
        <div>
    <div className="py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-center">Contact</h2>
        <p className="text-center text-gray-600 mb-6">Get in touch to start your journey</p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First Name*
              </label>
              <input
                type="text"
                id="first-name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last Name*
              </label>
              <input
                type="text"
                id="last-name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email*
            </label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message*
            </label>
            <textarea
              id="message"
              required
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:outline-none focus:ring focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
          >
            Submit
          </button>
        </form>

        <div className="mt-10 text-center">
          <h3 className="font-semibold text-lg">By phone & email</h3>
          <p className="text-gray-600 mt-2">For general enquiries please contact us on +91 7756899776 or via email on dharesh@gmail.com</p>
          <h4 className="font-semibold mt-6">Pune</h4>
          <p>Kothrud, Pune</p>
          {/* <h4 className="font-semibold mt-6"></h4>
          <p>88-95 Walton St, South Kensington, London SW5 2PH.</p> */}
        </div>
      </div>
    </div>
            <footer>
                <Footer/>
            </footer>
        </div>
</div>
    );
};
export default Contact;