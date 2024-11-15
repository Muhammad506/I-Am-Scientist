import CompetitionPrizes from "@/components/CompetitionPrizes";
import ContestAnnouncement from "@/components/ContestAnnouncement";
import CountryPartners from "@/components/CountryPartners";
import CourseFinder from "@/components/CourseFinder";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import NavBar from "@/components/NavBAr";
import TestLimits from "@/components/TestLimits";
import Timer from "@/components/Timer";

const page = () => {
  return (
    <div>
      {/* Ammad Uddin */}
      <NavBar />
      <Hero />
      <Timer />
      <ContestAnnouncement />

      {/* Umer */}
      <TestLimits />
      <CourseFinder />
      <LatestNews />
      <CountryPartners />

      {/* Ammad  */}
      <CompetitionPrizes />
      <FAQs />
      <Footer />
    </div>
  );
};

export default page;
