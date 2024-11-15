import "@fontsource/el-messiri";
import "@fontsource/poppins";
import "@fontsource/inter";

// Define CourseInfo Component
const CourseInfo = ({ duration, students, lessons }) => (
  <div className="flex justify-center space-x-4 text-white text-xs md:text-sm font-semibold">
    <p>{duration}</p>
    <p>{students} Students</p>
    <p>{lessons} Lessons</p>
  </div>
);

const CourseFinder = () => {
  return (
    <main className="bg-[#1E0243] min-h-screen py-6 md:py-12 2xl:py-14 px-4">
      <div className="bg-[url('/PerfectCoarseBg.png')] bg-cover bg-center opacity-100 min-h-screen flex justify-center items-center">
        {/* Content */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="font-[el-messiri] mt-3 text-xs md:text-sm font-bold text-white">
              Popular Courses
            </p>
            <h2 className="text-lg md:text-2xl xl:text-4xl font-bold font-el-messiri mt-3 text-center text-white">
              Discover Your Perfect Course
            </h2>
          </div>
          {/* Line */}
          <div className="w-20 md:w-24 h-1 rounded-lg bg-gradient-to-r from-[rgba(46,152,252,1)] to-[rgba(224,28,244,1)] mt-3"></div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto mt-14 md:w-[85%]  xl:w-[79%] w-full">
            {/* Course Cards */}
            {[
              {
                title: "Become a Machine Learning - Master",
                duration: "3 Months",
                students: "35",
                lessons: "53",
                img: "/ucard1.jpeg",
              },
              {
                title: "Deep Learning for Beginners – Master Deep Learning",
                duration: "2 Months",
                students: "45",
                lessons: "64",
                img: "/ucard2.jpeg",
              },
              {
                title: "The Complete AI Science Course 2024",
                duration: "4 Months",
                students: "50",
                lessons: "72",
                img: "/ucard3.jpeg",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[linear-gradient(90deg,rgba(35,3,63)32.12%,rgba(0,50,171,0.7)100%)] rounded-xl w-full border-2  border-white overflow-hidden transform transition-all duration-500 ease-in-out"
              >
                <img
                  alt={course.title}
                  loading="lazy"
                  width="300"
                  height="200"
                  className="w-full h-[50%] md:h-[45%] xl:h-[59%] rounded-tl-xl rounded-tr-xl object-cover"
                  src={course.img}
                />
                <div className="flex flex-col space-y-3 md:space-y-4 p-2 xl:p-3">
                  <h3 className="text-white font-inter text-sm  font-bold">
                    {course.title}
                  </h3>
                  <CourseInfo
                    duration={course.duration}
                    students={course.students}
                    lessons={course.lessons}
                  />
                  <div className="flex justify-center items-center text-center pb-0 md:pb-2">
                    <button className="font-semibold text-xs md:text-sm xl:text-base font-poppins bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] py-2 md:py-3 px-4 md:px-6 text-white rounded-lg transform transition-all duration-500 ease-in-out hover:opacity-90">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center text-center pt-10">
            <button className="font-semibold w-fit mb-2 text-xs md:text-sm xl:text-base font-poppins bg-[linear-gradient(90deg,_#2E98FC_0%,_#E01CF4_100%)] py-2 md:py-3 px-4 md:px-6 text-white rounded-lg transform transition-all duration-500 ease-in-out hover:opacity-90">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseFinder;
