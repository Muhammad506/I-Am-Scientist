
// // Import the social media icons from react-icons
// import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// function Footer() {
//   return (
//     <footer className="bg-gradient-to-b from-blue-900 to-purple-900 text-white pb-8">
//       {/* Top section with 5 images */}
//       <div className="  flex mx-auto justify-between">
//         <img src="/img1.png" alt="1" className="w-1/5" />
//         <img src="/img2.png" alt="2" className="w-1/5" />
//         <img src="/img3.png" alt="3" className="w-1/5" />
//         <img src="/img4.png" alt="4" className="w-1/5" />
//         <img src="/img5.png" alt="5" className="w-1/5" />
//       </div>

//       {/* Search bar overlapping sections */}
//       <div className="absolute left-56  flex justify-between items-center bg-gradient-to-r from-purple-900 to-blue-900 bg-opacity-60 p-8 rounded-md   -mt-16 mx-auto w-4/6">
//   {/* Text on the left */}
//   <div>
//     <h2 className="text-xl font-semibold text-white">Subscribe to our newsletter.</h2>
//     <p className="text-sm text-white">Get updates to news and events.</p>
//   </div>

//   {/* Search input on the right */}
//   <div className="flex">
//     <input
//       type="email"
//       placeholder="Your Email Address"
//       className="px-4 py-2 border-none rounded-l-md focus:outline-none text-black"
//     />
//     <button className="bg-gradient-to-r from-blue-500 to-pink-500 px-6 py-2 rounded-r-md text-white font-medium">
//       Subscribe
//     </button>
//   </div>
// </div>


//       {/* Main footer content */}
//       <div className="container mx-auto p-4 mt-12">
//         <div className="flex justify-between items-start flex-wrap gap-4">
//           {/* Left paragraph with right gap */}
//           <div className="w-full md:w-1/4 mb-4 pr-4 ml-6">
//             <h3 className="text-xl font-bold mb-2">I Am Scientist</h3>
//             <p>
//               We aggregate courses from many universities to help you find the best courses on almost any subject,
//               wherever they exist.
//             </p>
//           </div>

//           {/* Columns of links with reduced gaps */}
//           <div className="w-full md:w-1/5 mb-4">
//             <h3 className="text-lg font-bold mb-2">General</h3>
//             <ul className="space-y-1">
//               <li>Courses</li>
//               <li>Competitions</li>
//               <li>
//                 Careers <span className="text-blue-400">(UPCOMING)</span>
//               </li>
//               <li>Pricing</li>
//             </ul>
//           </div>

//           <div className="w-full md:w-1/5 mb-4">
//             <h3 className="text-lg font-bold mb-2">Important Links</h3>
//             <ul className="space-y-1">
//               <li>Terms & Conditions</li>
//               <li>Privacy Policy</li>
//               <li>FAQs</li>
//               <li>Free Tools</li>
//             </ul>
//           </div>

//           <div className="w-full md:w-1/5 mb-4">
//             <h3 className="text-lg font-bold mb-2">Contacts</h3>
//             <p>112 W 34th St., New York</p>
//             <p>(+1) 212-675-2707</p>
//             <p>info@example.com</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer bottom with top border */}
//       <div className="border-t border-gray-500 text-center py-4 mt-8 flex justify-between items-center">
//         <p className="text-sm ml-8">Copyright © 2024, All Rights Reserved. I Am Scientist</p>
//         <div className="flex space-x-4 mr-20">
//           <a href="#" className="text-white hover:text-gray-400">
//             <FaFacebookF />
//           </a>
//           <a href="#" className="text-white hover:text-gray-400">
//             <FaLinkedinIn />
//           </a>
//           <a href="#" className="text-white hover:text-gray-400">
//             <FaInstagram />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


// Import the social media icons from react-icons
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-950 to-blue-900 text-white pb-8">
      {/* Top section with 5 images */}
      <div className="flex flex-wrap justify-between mx-auto gap-0">
  <img src="/img1.png" alt="1" className="w-full sm:w-1/5 mb-0 sm:mb-0" />
  <img src="/img2.png" alt="2" className="w-full sm:w-1/5 mb-0 sm:mb-0" />
  <img src="/img3.png" alt="3" className="w-full sm:w-1/5 mb-0 sm:mb-0" />
  <img src="/img4.png" alt="4" className="w-full sm:w-1/5 mb-0 sm:mb-0" />
  <img src="/img5.png" alt="5" className="w-full sm:w-1/5" />
</div>


      {/* Search bar overlapping sections */}
      <div className="relative flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-purple-900 to-blue-900 bg-opacity-70 p-6 sm:p-8 rounded-md -mt-12 sm:-mt-16 mx-auto w-11/12 sm:w-4/6">
  {/* Text on the left */}
  <div className="w-full sm:w-1/2 mb-4 sm:mb-0 text-center sm:text-left">
    <h2 className="text-base sm:text-lg font-semibold text-white">Subscribe to our newsletter.</h2>
    <p className="text-xs sm:text-sm text-white">Get updates on news and events.</p>
  </div>

  {/* Search input on the right */}
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


      {/* Main footer content */}
      <div className="container mx-auto p-4 mt-16 sm:mt-12">
        <div className="flex flex-wrap justify-between items-start gap-4 ml-20">
          {/* Left paragraph with right gap */}
          <div className="w-full md:w-1/4 mb-4 pr-4">
            <h3 className="text-lg sm:text-xl font-bold mb-2">I Am Scientist</h3>
            <p className="text-sm">
              We aggregate courses from many universities to help you find the best courses on almost any subject, wherever they exist.
            </p>
          </div>

          {/* Columns of links */}
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
            <h3 className="text-base sm:text-lg font-bold mb-2">Important Links</h3>
            <ul className="space-y-1 text-sm">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>FAQs</li>
              <li>Free Tools</li>
            </ul>
          </div>

          <div className="w-full sm:w-1/3 md:w-1/5 mb-4">
            <h3 className="text-base sm:text-lg font-bold mb-2">Contacts</h3>
            <p className="text-sm">112 W 34th St., New York</p>
            <p className="text-sm">(+1) 212-675-2707</p>
            <p className="text-sm">info@example.com</p>
          </div>
        </div>
      </div>

      {/* Footer bottom with top border */}
      <div className="border-t border-gray-500 text-center py-4 mt-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-xs sm:text-sm mb-2 sm:mb-0  md:pl-12 sm:ml-8">Copyright © 2024, All Rights Reserved. I Am Scientist</p>
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
