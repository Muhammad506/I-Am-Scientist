import "@fontsource/el-messiri";
import "@fontsource/poppins";
import "@fontsource/inter";

// Define CourseInfo Component
const CourseInfo = ({ duration, students, lessons }) => (
  <div className="flex justify-center space-x-4 text-white text-sm font-semibold">
    <p>{duration}</p>
    <p>{students} Students</p>
    <p>{lessons} Lessons</p>
  </div>
);


// Define RegisterButton Component
const RegisterButton = () => (
  <button className="font-semibold text-sm font-poppins bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] py-2 px-4 text-white rounded-lg transform transition-all duration-500 ease-in-out hover:opacity-90">
    Register Now
  </button>
);

const CourseFinder = () => {
  return (
    <main className="bg-[#1E0243] min-h-screen">
      <div className="bg-[url('/PerfectCoarseBg.png')] bg-cover bg-center opacity-100 min-h-screen flex justify-center items-center">
        {/* content */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center">
            <p className="font-[el-messiri] mt-3 text-sm font-bold text-white">
              Popular Courses
            </p>
            <h2 className="text-xl md:text-3xl font-bold font-el-messiri mt-3 text-center text-white">
              Discover Your Perfect Course
            </h2>
          </div>
          {/* line */}
          <div className="w-24 h-1 rounded-lg bg-gradient-to-r from-[rgba(46,152,252,1)] to-[rgba(224,28,244,1)] mt-3"></div>

          {/* cards container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 2xl:gap-6 mx-auto mt-14 md:w-[84%] 2xl:w-[70%] w-full">
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
                className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[linear-gradient(90deg,rgba(35,3,63)32.12%,rgba(0,50,171,0.7)100%)] rounded-xl w-[95%] h-[105%] border-2 2xl:border-4 border-white transform transition-all duration-500 ease-in-out"
              >
                <img
                  alt={course.title}
                  loading="lazy"
                  width="300"
                  height="200"
                  className="w-full h-[60%] rounded-tl-xl rounded-tr-xl"
                  src={course.img}
                />
                <div className="flex flex-col space-y-6 2xl:space-y-8 p-4 2xl:p-6 mt-3">
                  <h3 className="text-white font-inter text-sm 2xl:text-lg font-bold">
                    {course.title}
                  </h3>
                  <CourseInfo
                    duration={course.duration}
                    students={course.students}
                    lessons={course.lessons}
                  />
                  <RegisterButton />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CourseFinder;
