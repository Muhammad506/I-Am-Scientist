// Component made by Ammad

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1C032F] to-[#0032AB] text-white pb-8">
      <div className="flex flex-wrap justify-between mx-auto gap-0">
        <img src="/img1.png" alt="1" className="w-full sm:w-1/5 mb-0 sm:mb-0" />
        <img src="/img2.png" alt="2" className="w-full sm:w-1/5 mb-0 sm:mb-0" />
        <img src="/img3.png" alt="3" className="w-full sm:w-1/5 mb-0 sm:mb-0" />
        <img src="/img4.png" alt="4" className="w-full sm:w-1/5 mb-0 sm:mb-0" />
        <img src="/img5.png" alt="5" className="w-full sm:w-1/5" />
      </div>

      <div className="relative flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-[#1C032F] to-[#0032AB] opacity-90 shadow-xl p-6 sm:p-8 rounded-md -mt-12 sm:-mt-16 mx-auto w-11/12 sm:w-4/6">
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0 text-center sm:text-left">
          <h2 className="text-base sm:text-lg font-semibold text-white">
            Subscribe to our newsletter.
          </h2>
          <p className="text-xs sm:text-sm text-white">
            Get updates on news and events.
          </p>
        </div>

        <div className="flex w-full sm:w-1/2">
          <input
            type="email"
            placeholder="Your Email Address"
            className="px-2 sm:px-4 py-2 border-none rounded-l-md focus:outline-none text-black w-full sm:w-auto"
          />
          <button className="bg-gradient-to-r from-blue-500 to-pink-500 px-4 sm:px-6 py-2 rounded-r-md text-white font-medium text-sm">
            Subscribe
          </button>
        </div>
      </div>

      <div className="container mx-auto p-4 mt-16 sm:mt-12">
        <div className="flex flex-wrap justify-between items-start gap-4 ml-20">
          <div className="w-full md:w-1/4 mb-4 pr-4">
            <img src="Logo.png" className="mb-4" alt="" />
            <p className="text-sm">
              We aggregate courses from many universities to help you find the
              best courses on almost any subject, wherever they exist.
            </p>
          </div>

          <div className="w-1/2 sm:w-1/3 md:w-1/5 mb-4">
            <h3 className="text-base sm:text-lg font-bold mb-2">General</h3>
            <ul className="space-y-1 text-sm">
              <li>Courses</li>
              <li>Competitions</li>
              <li>
                Careers <span className="text-blue-400">(UPCOMING)</span>
              </li>
              <li>Pricing</li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-1/3 md:w-1/5 mb-4">
            <h3 className="text-base sm:text-lg font-bold mb-2">
              Important Links
            </h3>
            <ul className="space-y-1 text-sm">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>FAQs</li>
              <li>Free Tools</li>
            </ul>
          </div>

          <div className="w-full sm:w-1/3 md:w-1/5 mb-4">
            <h3 className="text-base sm:text-lg font-bold mb-2">Contacts</h3>
            <p className="text-sm">Office 8785 182-184 High Street</p>
            <p className="text-sm">North, East Ham, London, United</p>
            <p className="text-sm">Kingdom, E6 2JA</p>

            <p className="text-sm py-2">+92 3019870934</p>
            <p className="text-sm text-[#ff40cc] hover:underline">
              iamscientist.ai@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-500 text-center py-4 mt-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-xs sm:text-sm mb-2 sm:mb-0  md:pl-12 sm:ml-8">
          Copyright © 2024, All Rights Reserved. I Am Scientist
        </p>
        <div className="flex space-x-4 md:mr-28">
          <a href="#" className="text-white hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
