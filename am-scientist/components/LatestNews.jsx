import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";

const LatestNews = () => {
  return (
    <main>
      <div className="flex flex-wrap min-h-screen">
        {/* Left Section */}
        <div className="w-full md:w-[65%] bg-[linear-gradient(90deg,rgba(35,3,63)32.12%,rgba(0,50,171,0.7)100%)] p-4 md:p-10">
          <div className="flex flex-col items-center text-white mt-2">
            <p className="font-el-messiri mt-3 text-sm font-bold">
              Discover Our Latest News
            </p>
            <h3 className="text-center text-2xl md:text-4xl font-bold font-el-messiri mt-3">
              Find Out the Latest Competition News
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto mt-4 md:mt-16 md:w-full xl:w-[80%] 2xl:w-[75%] w-full">
            {/* News Card 1 */}
            <div className="relative rounded-md shadow-xl w-full border font-jost border-blue-600">
              <Image
                alt="Professor Albert joins research on mobile money in Tanzania"
                loading="lazy"
                width={400}
                height={250}
                className="rounded-tl-lg rounded-tr-lg w-full h-auto"
                src="/img1.webp"
              />
              <div className="text-white my-6 p-2 2xl:p-5">
                <div className="flex justify-between">
                  <p className="text-sm">June 6, 2023</p>
                  <p className="text-sm">Competition / Cyber Security</p>
                </div>
                <h3 className="text-lg font-bold mt-2">
                  Professor Albert joins research on mobile money in Tanzania
                </h3>
                <a href="#" className="text-white mt-2 inline-block">
                  Read more
                </a>
              </div>
            </div>
            {/* News Card 2 */}
            <div className="relative rounded-md shadow-xl w-full border font-jost border-blue-600">
              <Image
                alt="A Global MBA for the next generation of business leaders"
                loading="lazy"
                width={400}
                height={250}
                className="rounded-tl-lg rounded-tr-lg w-full h-auto"
                src="/img2.webp"
              />
              <div className="text-white my-6 p-2 2xl:p-5">
                <div className="flex justify-between">
                  <p className="text-sm">June 6, 2023</p>
                  <p className="text-sm">Competition / Machine Learning</p>
                </div>
                <h3 className="text-lg font-bold mt-2">
                  A Global MBA for the next generation of business leaders
                </h3>
                <a href="#" className="text-white mt-2 inline-block">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Competitions Left Section */}
        <div className="bg-[rgba(93,55,148,1)] flex flex-col justify-center p-6 w-full md:w-[35%] text-white">
          <h2 className="text-xl md:text-3xl font-bold font-el-messiri">
            Upcoming Competitions
          </h2>
          <div className="mt-6">
            {/* Competition Item 1 */}
            <div className="flex items-center justify-between p-6 font-poppins">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <h3 className="text-xl md:text-3xl font-bold">07</h3>
                  <p className="font-bold text-sm mt-1">JAN</p>
                  <div className="w-12 h-1 bg-white mt-3"></div>
                </div>
                <div className="ml-3 space-y-1">
                  <h3 className="text-lg font-bold">AI and Machine Learning</h3>
                  <p className="flex items-center gap-2 text-xs font-semibold">
                    <FaRegClock className="text-white size-4" />
                    7:00 am - 9:00 am
                  </p>
                  <p className="flex items-center gap-2 text-xs font-semibold">
                    <CiLocationOn className="text-white size-5" />
                    Remote
                  </p>
                </div>
              </div>
            </div>
            {/* Competition Item 2 */}
            <div className="flex items-center justify-between p-6 font-poppins">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <h3 className="text-xl md:text-3xl font-bold">01</h3>
                  <p className="font-bold text-sm mt-1">AUG</p>
                  <div className="w-12 h-1 bg-white mt-3"></div>
                </div>
                <div className="ml-3 space-y-1">
                  <h3 className="text-lg font-bold">Advance Deep Learning</h3>
                  <p className="flex items-center gap-2 text-xs font-semibold">
                    <FaRegClock className="text-white size-4" />
                    10:00 am - 12:00 pm
                  </p>
                  <p className="flex items-center gap-2 text-xs font-semibold">
                    <CiLocationOn className="text-white size-4" />
                    Remote
                  </p>
                </div>
              </div>
            </div>
            {/* Competition Item 3 */}
            <div className="flex items-center justify-between p-6 font-poppins">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <h3 className="text-xl md:text-3xl font-bold">17</h3>
                  <p className="font-bold text-sm mt-1">DEC</p>
                  <div className="w-12 h-1 bg-white mt-3"></div>
                </div>
                <div className="ml-3 space-y-1">
                  <h3 className="text-lg font-bold">
                    Generative Artificial Intelligence
                  </h3>
                  <p className="flex items-center gap-2 text-xs font-semibold">
                    <FaRegClock className="text-white size-4" />
                    1:00 pm - 3:00 pm
                  </p>
                  <p className="flex items-center gap-2 text-xs font-semibold">
                    <CiLocationOn className="text-white size-4" />
                    Remote
                  </p>
                </div>
              </div>
            </div>

            <div className="text-left mt-6 p-6">
              <a
                href="#"
                className="text-pink-500 hover:text-pink-600 font-semibold text-sm"
              >
                View All Competitions →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LatestNews;
