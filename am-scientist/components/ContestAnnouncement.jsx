import Image from "next/image";
import React from "react";

const ContestAnnouncement = () => {
  const announcement = [
    {
      id: 1,
      title: "Contest",
      heading: "Announcements",
      icon1: "/bl.png",
      icon2: "/br.png",
      date: "Nov 21, 2023 - Feb 15, 2024",
      sub1: "Registration dates",
      sub2: "Registration Confirmation",
      sub3: "Contest Dates",
      btntxt: "Explain More",
      color: "#1977FF",
    },

    {
      id: 2,
      title: "Contest",
      heading: "Announcements",
      icon1: "/pl.png",
      icon2: "/pr.png",
      date: "Nov 21, 2023 - Feb 15, 2024",
      sub1: "Registration dates",
      sub2: "Registration Confirmation",
      sub3: "Contest Dates",
      btntxt: "Explain More",
      color: "#ff3ee6",
    },

    {
      id: 3,
      title: "Contest",
      heading: "Announcements",
      icon1: "/cl.png",
      icon2: "/cr.png",
      date: "Nov 21, 2023 - Feb 15, 2024",
      sub1: "Registration dates",
      sub2: "Registration Confirmation",
      sub3: "Contest Dates",
      btntxt: "Explain More",
      color: "#5ff6ff",
    },
  ];

  return (
    <div className="lg:h-screen flex justify-center items-center relative Jmd:px-10 px-3 lg:px-10">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/announcementbg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute inset-0 z-0 bg-[#26014E] opacity-90"></div>

      {/* Main Content */}
      <div className="relative z-10 grid gap-7 text-white text-center">
        {/* Title Section */}
        <div className="my-3 h-fit">
          <h4 className="text-sm md:text-lg capitalize">Contest Schedule</h4>
          <h1 className="text-xl md:text-2xl xl:text-3xl capitalize font-semibold">
            The National I am Scientist System
          </h1>
          <hr className="border w-24 mx-auto mt-1" />
        </div>

        {/* Announcement Card Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-7">
          {announcement.map((ann) => (
            <div
              className="relative border-2 rounded-3xl p-4 flex flex-col gap-4 w-fit"
              style={{ borderColor: ann.color }}
              key={ann.id}
            >
              {/* Title and Heading */}
              <div className="space-y-1">
                <h1
                  className="text-3xl md:text-4xl italic text-left"
                  style={{ color: ann.color, fontFamily: "Pacifico" }}
                >
                  {ann.title}
                </h1>
                <h2 className="text-[#26014E] bg-white py-1 px-4 text-center rounded-lg text-xl md:text-2xl font-semibold uppercase">
                  {ann.heading}
                </h2>
              </div>

              {/* Registration Dates */}
              <div className="relative flex items-center gap-4">
                <Image src={ann.icon2} alt="Calendar" width={50} height={50} />
                <div className="flex-1 text-left">
                  <span>{ann.sub1}</span>
                  <span
                    className={`block px-2 py-1 rounded-md text-sm font-medium ${ann.id == 3 ? "text-[#26014E]" : "text-white"}`}
                    style={{ backgroundColor: ann.color }}
                  >
                    {ann.date}
                  </span>
                  <hr className="border-t-2 mt-1" />
                </div>
              </div>

              {/* Registration Confirmation */}
              <div className="relative flex flex-row-reverse items-center gap-4">
                <Image src={ann.icon1} alt="Calendar" width={50} height={50} />
                <div className="flex-1 text-left">
                  <span>{ann.sub2}</span>
                  <span
                    className={`block px-2 py-1 rounded-md text-sm font-medium ${ann.id == 3 ? "text-[#26014E]" : "text-white"}`}
                    style={{ backgroundColor: ann.color }}
                  >
                    {ann.date}
                  </span>
                  <hr className="border-t-2 mt-1" />
                </div>
              </div>

              {/* Contest Dates */}
              <div className="relative flex items-center gap-4">
                <Image src={ann.icon2} alt="Calendar" width={50} height={50} />
                <div className="flex-1 text-left">
                  <span>{ann.sub3}</span>
                  <span
                    className={`block px-2 py-1 rounded-md text-sm font-medium ${ann.id == 3 ? "text-[#26014E]" : "text-white"}`}
                    style={{ backgroundColor: ann.color }}
                  >
                    {ann.date}
                  </span>
                  <hr className="border-t-2 mt-1" />
                </div>
              </div>

              {/* Button */}
              <button
                className={`text-[#26014E] bg-white py-2 font-bold rounded-lg`}
              >
                {ann.btntxt}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContestAnnouncement;
