const CompetitionPrizes = () => {
  return (
    <section className="bg-gradient-to-r from-purple-950 to-purple-950 text-white py-12 px-4 md:px-16">
      <div className="text-center mb-8">
        <h2 className="text-lg font-light">Discover Our Latest Prizes</h2>
        <h1 className="text-3xl font-bold mt-2">Find Out the Latest Competition Prizes</h1>
        <hr className="w-24 mx-auto mt-4 border-t-2 border-white" />
      </div>

      <div className="grid gap-6 md:grid-cols-3 items-end"> {/* Align cards at the bottom */}
        {/* Left Runners-Up */}
        <div className="flex flex-col">
          <h3 className="text-3xl font-semibold mb-4 text-center">🏆 Silver</h3>
          <div className="bg-fuchsia-600 rounded-xl px-4 md:px-6 py-4  text-center md:text-left flex-1">
            <p>
              40 runners-up will be awarded </p>
               <p>partial scholarships of 75% to</p>
                <p> study their chosen subject with</p>
                  <p> Immerse.
            </p>
          </div>
        </div>

        {/* Center 1st Place */}
        <div className="flex flex-col h-[200px] md:h-[300px]">
          <h3 className="text-3xl font-semibold mb-4 text-center">🏆 Gold</h3>
          <div className="bg-purple-800 border border-white rounded-xl p-6 md:p-8 flex-1 flex flex-col justify-start">
            <p>
              10 winners will receive a 100% scholarship for their exceptional work. Take a look at{' '}
              <a href="#" className="underline text-blue-400">previous essay competition winners</a>.
            </p>
            {/* Space left at the bottom */}
            <div className="flex-1"></div>
          </div>
        </div>

        {/* Right Runners-Up */}
        <div className="flex flex-col">
          <h3 className="text-3xl font-semibold mb-4 text-center">🏆 Bronze</h3>
          <div className="bg-fuchsia-600 rounded-xl p-4 md:p-6 text-center md:text-left flex-1">
            <p>The last category of 150 entrants</p>
            <p> receive partial scholarships </p>
            <p> worth 50%.</p>
          </div>
        </div>
      </div>

      {/* Merit Awards */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-fuchsia-500 rounded-xl p-4 md:p-8 mt-16 text-center">
        <h3 className="text-3xl font-bold mb-2">Merit Awards</h3>
        <p className='font-medium'>
          Any student who submits a full-length essay, but doesn’t receive a scholarship, will be eligible for the option of
          a £1000 award for our residential programmes, a £500 award for our Online Research Programmes, or a 
          Online Research Programmes.
        </p>
      </div>

      {/* Explore More Button */}
      <div className="mt-6 text-center">
        <button className="bg-pink-600 px-6 py-2 rounded-full text-lg hover:bg-pink-700 transition">
          Explore More
        </button>
      </div>
    </section>
  );
};

export default CompetitionPrizes;
