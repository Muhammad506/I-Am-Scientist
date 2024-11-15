import CompetitionPrizes from "@/components/CompetitionPrizes";
import CountryPartners from "@/components/CountryPartners";
import CourseFinder from "@/components/CourseFinder";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import TestLimits from "@/components/TestLimits";

const page = () => {
  return (
    <div>
      <TestLimits />
      <CourseFinder />
      <CountryPartners />
      <CompetitionPrizes/>
      <FAQs/>
      <Footer/>
    </div>
  );
};

export default page;
