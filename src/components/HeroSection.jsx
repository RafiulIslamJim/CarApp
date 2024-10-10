const HeroSection = () => {
  return (
    <section className="bg-gray-50 px-8 py-6 md:p-12">
      {/* Hero Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-blue-500 w-full h-auto md:h-96 relative rounded-lg p-6 flex flex-col md:flex-row justify-between">
        {/* Text Content */}
           <div className="flex-1 md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
             The Best Platform <br /> for Car Rental
            </h2>
             <p className="text-white mb-4">
              Ease of doing a car rental safely and <br />
             reliably, of course at a low price
             </p>
             <button className="bg-blue-600 text-white py-2 px-4 rounded">
             Rental Car
            </button>
            </div>

           {/* Car Image */}
         <div className="flex-1 md:w-1/2 relative">
            <img
              src="src/assets/file2.png" alt="Car"className="w-full h-full object-contain rounded-lg"/>
              </div>
          </div>
        {/* Card 2 */}
        <div className="hidden md:flex bg-blue-500 w-full h-auto md:h-96 relative rounded-lg p-6 flex-col md:flex-row justify-between">
        {/* Text Content */}
           <div className="flex-1 md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
             The Best Platform <br /> for Car Rental
            </h2>
             <p className="text-white mb-4">
              Ease of doing a car rental safely and <br />
             reliably, of course at a low price
             </p>
             <button className="bg-blue-600 text-white py-2 px-4 rounded">
      Rental Car
            </button>
            </div>

          {/* Car Image */}
         <div className="flex-1 md:w-1/2 relative">
            <img
              src="src/assets/file.png" alt="Car"className="w-full h-full object-contain rounded-lg"/>
              </div>
          </div>


      </div>

      {/* Pick-up and Drop-off Options */}
      <div className="mt-8 md:flex justify-evenly items-center gap-8">
  {/* Pick-up Options */}
  <div className="bg-white w-full md:w-1/2 p-4 rounded-lg mb-6">
    <h3 className="text-xl font-semibold mb-2">Pick - Up</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="block font-bold mb-2">Locations</label>
        <select className="w-full text-[#90A3BF] p-2 border rounded">
          <option>Select your city</option>
          {/* Options */}
        </select>
      </div>
      <div>
        <label className="block font-bold mb-2">Date</label>
        <input type="date" className="w-full text-[#90A3BF] p-2 border rounded" />
      </div>
      <div>
        <label className="block font-bold mb-2">Time</label>
        <input type="time" className="w-full text-[#90A3BF] p-2 border rounded" />
      </div>
    </div>
  </div>

  {/* Swap Button */}
  <div className="flex justify-center mb-6 md:mb-0">
    <button className="bg-blue-600 text-white p-2 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18" />
      </svg>
    </button>
  </div>

  {/* Drop-off Options */}
  <div className="bg-white w-full md:w-1/2 p-4 rounded-lg">
    <h3 className="text-xl font-semibold mb-2">Drop - Off</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="block font-bold mb-2">Locations</label>
        <select className="w-full text-[#90A3BF] p-2 border rounded">
          <option>Select your city</option>
          {/* Options */}
        </select>
      </div>
      <div>
        <label className="block font-bold mb-2">Date</label>
        <input type="date" className="w-full text-[#90A3BF] p-2 border rounded" />
      </div>
      <div>
        <label className="block font-bold mb-2">Time</label>
        <input type="time" className="w-full text-[#90A3BF] p-2 border rounded" />
      </div>
    </div>
  </div>
</div>

    </section>
  )
}

export default HeroSection
