import React from 'react'
import { Instagram, Linkedin } from 'lucide-react'

function FixedFooter() {
  return (
    <footer className="relative bg-black text-white p-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-2">
        <div>
          <h2 className="text-xl font-bold mb-1">
            The Smart Club<br />
            for hustlers®
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <h3 className="font-semibold mb-1">
              The MuscleX Club, Pune
            </h3>
            <p className="text-xs mb-1">MuscleClub@gmail.com</p>
            <p className="text-xs mb-1">+91 7756899776</p>
            <p className="text-xs mb-2">
              Pune, Maharashtra
            </p>
            <a href="https://maps.app.goo.gl/RcPPBrXjyHBatUNL8" className="text-xs underline">
              SEE ON MAP →
            </a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2 text-sm">
            WANT TO READ HEALTH ARTICLES<br />
            FROM MuscleX?
          </h3>
          <a href="#" className="text-xs underline mb-4 block">
            SIGN UP FOR OUR NEWSLETTER →
          </a>
          <h3 className="font-semibold mb-2 text-sm">FOLLOW US</h3>
          <div className="flex space-x-3">
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 bg-black text-white text-s px-2 py-1 mb-2 mr-2">
          Designed and Developed By Dharesh
        </div>
      </div>
    </footer>
  )
}

export default FixedFooter
