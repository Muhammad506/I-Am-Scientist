"use client"
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";


const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Who can participate in the i am scientist contests?",
      answer:
        "Any student from 3rd to 12th grade in Pakistan, whether as part of a school or independently, can join our contests.",
    },
    {
      question: "What subjects do the contests cover?",
      answer:
        "Our contests focus on AI, Machine Learning, Deep Learning, Cybersecurity, and other tech-driven fields.",

    },
    {
      question: "How are winners rewarded?",
      answer:
        "Winners receive cash prizes and medals, while runners-up also get medals to recognize their efforts.",
    },
    {
      question: "Can school participate as organizations?",
      answer:
        "Yes, schools can register as organizations, making it easy for students to participate collectively.",
    },
    {
      question: "How can i stay updated on contest dates",
      answer: "Keep checking our website for announcements, or subscribe to our newsletter for regular updates.",
    },
  ];

  return (
    <main className=" bg-gradient-to-r from-purple-950 to-blue-900 md:px-16  py-20  ">
      <div
        className="xl:px-16 md:px-6 px-0  w-full container faqs"
        id="faqs"
      >
        <div className="lg:p-4 md:p-2 p-1">
          <h2 className=" flex items-center justify-center   lg:text-3xl text-xl font-bold   transform transition duration-500 hover:scale-105">
            <span className="border-text  text-white ">
              FREQUENTLY ASKED QUESTIONS
            </span>

          </h2>
          <hr className="w-24 mx-auto my-4 border-t-4 border-white" />


          
        </div>
        <div className="w-full flex items-center justify-center   lg:px-10 md:px-6 px-4 ">
          <div className="flex flex-col items-center   ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="w-full  bg-gradient-to-r from-purple-950 to-blue-900 border border-white my-2 py-1 overflow-hidden rounded-xl  transform transition duration-500 hover:scale-105   hover:bg-gray-300 shadow-2xl    "
              >
                <div
                  className="rounded-sm w-full p-6 py-4 cursor-pointer transition-all duration-300 ease-in-out "
                  onClick={() => toggleDropdown(index)}
                >
                  <div className="flex items-center w-full justify-between">
                    <span className="sm:text-base font-semibold md:text-xl text-lg text-white  ">
                      {faq.question}
                    </span>
                    <div className="text-white flex items-center">
                      {openIndex === index ? (
                        <FaMinus
                          className="text-white "
                          size={20}
                        />
                      ) : (
                        <FaPlus
                          className="text-white "
                          size={20}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className={`px-8 drop-shadow-lg transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-fit py-4" : "max-h-0"
                  } overflow-hidden`}
                >
                  <p className="text-white  b font-normal md:text-sm text-sm mt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQs;
