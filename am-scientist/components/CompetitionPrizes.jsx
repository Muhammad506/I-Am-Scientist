// Component made by Ammad

import React from "react";
import { FaAward } from "react-icons/fa";

const CompetitionPrizes = () => {
  return (
    <section className="bg-[#390276] text-white py-12 px-4 md:px-16">
      <div className="text-center mb-8">
        <h2 className="text-lg font-light">Discover Our Latest Prizes</h2>
        <h1 className="text-3xl font-bold mt-2">
          Find Out the Latest Competition Prizes
        </h1>
        <hr className="w-24 mx-auto mt-4 border-t-2 border-white" />
      </div>

      <div className="grid gap-6 md:grid-cols-3 items-end">
        <div className="flex flex-col">
          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold mb-4 text-center">
            <FaAward className="inline-block" /> Silver
          </h3>
          <div className="bg-[rgba(200,14,189,1)] rounded-xl px-4 md:px-6 py-4  text-center md:text-left flex-1">
            <p>40 runners-up will be awarded </p>
            <p>partial scholarships of 75% to</p>
            <p> study their chosen subject with</p>
            <p> Immerse.</p>
          </div>
        </div>

        <div className="flex flex-col h-[180px] md:h-[250px]">
          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold mb-4 text-center">
            <FaAward className="inline-block" /> Gold
          </h3>
          <div className="border-[rgba(255,255,255,1)] border border-white rounded-xl p-6 md:p-8 flex-1 flex flex-col justify-start">
            <p>
              10 winners will receive a 100% scholarship for their exceptional
              work. Take a look at{" "}
              <a
                href="#"
                className="underline  bg-clip-text text-transparent  bg-gradient-to-r from-[#6B41FF] via-[#F64CFF] to-[#FFC553]"
              >
                previous essay competition winners
              </a>
              .
            </p>
            <div className="flex-1"></div>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="text-xl md:text-3xl lg:text-3xl font-semibold mb-4 text-center">
            <FaAward className="inline-block pr-2" />
            Bronze
          </h3>
          <div className="bg-[rgba(200,14,189,1)] rounded-xl p-4 md:p-6 text-center md:text-left flex-1">
            <p>The last category of 150 entrants</p>
            <p> receive partial scholarships </p>
            <p> worth 50%.</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-fuchsia-500 rounded-xl p-4 md:p-8 mt-16 text-center">
        <h3 className="text-xl md:text-3xl lg:text-3xl font-bold mb-2">
          Merit Awards
        </h3>
        <p className="font-medium">
          Any student who submits a full-length essay, but doesn’t receive a
          scholarship, will be eligible for the option of a £1000 award for our
          residential programmes, a £500 award for our Online Research
          Programmes, or a Online Research Programmes.
        </p>
      </div>

      <div className="mt-6 text-center">
        <button className="bg-pink-600 px-6 py-2 rounded-full text-lg hover:bg-pink-700 transition">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default CompetitionPrizes;
