import "@fontsource/el-messiri";
import "@fontsource/poppins";
import "@fontsource/inter";


const TestLimits = () => {
  return (
    <main className="bg-[#5D3794] text-white flex justify-center items-center py-6 relative">
      {/* left bottom shape */}
      <div className="h-6 w-16 lg:h-14 lg:w-40 bg-[#C406B9] rounded-tr-full rounded-br-full absolute left-0 bottom-0"></div>
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#97DB4E] absolute bottom-4 left-8 md:bottom-8 md:left-24 shadow-xl"></div>

      {/* right top shape */}
      <div className="h-6 w-16 lg:h-14 lg:w-40 bg-[#C406B9] rounded-tl-full rounded-bl-full absolute right-0 top-3"></div>
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#97DB4E] absolute top-6 right-8 md:top-14 md:right-24 shadow-xl"></div>

      {/* left top circle */}
      <div className="w-6 h-6 md:w-20 md:h-20 rounded-full bg-[#408CFB] absolute top-4 left-10 md:top-6 md:left-28  2xl:left-40 shadow-xl"></div>

      {/* right bottom circle */}
      <div className="w-6 h-6 md:w-20 md:h-20 rounded-full bg-[#408CFB] absolute bottom-4 right-10 md:bottom-6 md:right-28 2xl:right-40 shadow-xl"></div>

      {/* content */}
      <div className="w-[85.5%] md:w-[66%]  justify-center items-center flex flex-col relative z-10">
        <h1 className="font-el-messiri font-bold text-xl tracking-wide pt-14 md:pt-12 md:text-4xl text-white text-center">
          &quot;Test Your Limits—Sign Up for Remote Competitions and Rise to the
          Top&quot;
        </h1>

        <p className="font-poppins font-normal text-sm mt-2 text-center">
          Start your journey with I am Scientist! Open to schools,
          organizations, and individual students (3rd-12th grade) across
          Pakistan, registration is easy. Join a network of young innovators and
          unlock your potential through our exciting, knowledge-driven contests.
          Get started today!
        </p>
        {/* Button */}
        <div>
          <button className="font-semibold text-sm font-poppins bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] py-2 md:py-3 px-2 md:px-6 text-white rounded-full mt-4 md:mt-8 transform transition-all duration-500 ease-in-out hover:opacity-90">
            Get started for free
          </button>
        </div>
      </div>
    </main>
  );
};

export default TestLimits;
