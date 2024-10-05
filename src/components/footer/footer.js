import React from 'react'
import { Instagram, Linkedin} from 'lucide-react'


function FixedFooter() {
  return (
    <footer className="relative bg-black text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            The Smart Club<br />
            for hustlers®</h2>

        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold mb-2">The MuscleX Club, Pune</h3>
            <p className="text-sm mb-2">MuscleClub@gmail.com</p>
            <p className="text-sm mb-2">+91 7756899776</p>
            <p className="text-sm mb-4">
              <br />
              Pune, Maharashtra
            </p>
            <a href="https://maps.app.goo.gl/RcPPBrXjyHBatUNL8" className="text-sm underline">SEE ON MAP →</a>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-4">WANT TO READ HEALTH ARTICLES<br />FROM MuscleX?</h3>
          <a href="#" className="text-sm underline mb-8 block">SIGN UP FOR OUR NEWSLETTER →</a>
          <h3 className="font-bold mb-4">FOLLOW US</h3>
          <div className="flex space-x-4">
           
           
            <a href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="bg-gray-300 text-gray-800 p-4 rounded-md">
          <h4 className="font-bold mb-2 ">Designed and Developed By Dharesh</h4>
          </div>
      </div>
    </footer>
  )
}

export default FixedFooter