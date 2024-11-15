import CountryPartners from "@/components/CountryPartners";
import CourseFinder from "@/components/CourseFinder";
import TestLimits from "@/components/TestLimits";

const page = () => {
  return (
    <div>
      <TestLimits />
      <CourseFinder />
      <CountryPartners />
    </div>
  );
};

export default page;
