

const Timer = () => {
  return (
    <div className="bg-[#5D3794] flex lg:text-base text-sm justify-between flex-col Jmd:flex-row px-4 gap-5 py-7 Jmd:px-10 Jmd:py-0 text-white text-center">
      <p className="self-center">
        A day in the life. Please join us as we walk through a day of a Ed
        student. Request a tour
      </p>

      <div className="bg-gradient-to-r from-[#2E98FC] to-[#E01CF4] flex flex-col justify-center items-center Jmd:px-7 Jmd:text-nowrap px-10 py-5 font-semibold">
        <p className="text-sm">Admissions to Competition Starts in</p>
        <div className="flex justify-between h-full w-1/2 mt-2">
          <p className="">00</p>
          <p className="">:</p>
          <p className="">00</p>
          <p className="">:</p>
          <p className="">00</p>
          <p className="">:</p>
          <p className="">00</p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
