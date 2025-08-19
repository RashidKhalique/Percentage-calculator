import React from 'react';
import NumberPerctetage from '../Component/NumberPerctetage';
import Percentage from '../Component/Percentage';
import IncrementPercent from '../Component/IncrementPercent';
import About from '../Component/About';
import Footer from '../Component/Footer';

function Calculator() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      {/* Header Section */}
     
      <header className="py-10 text-[18px] font-light">
        <h1 className="text-3xl font-bold flex items-center gap-2 md:justify-start justify-center font-mono">
          <span className="bg-black text-[#47BDFF] px-3 py-1  ">%</span>
          Percentage Calculator
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Percentage Calculator is a free online tool to calculate percentages.
        </p>
      </header>
     

          {/* Calculator Boxes */}

     <div className="w-full max-w-3xl space-y-4 px-4 ">
      <NumberPerctetage/>
        <Percentage/>
       <IncrementPercent/>
      </div>
      <p className="text-gray-500 md:text-sm mt-4 text-center ">Tips: Use tab to move to the next field. Use shift+tab to move to the previous field. Press enter to calculate.</p>
      <hr className="my-8 md:w-full max-w-3xl w-70" />

     <About/>
     <Footer/>
    </div>
  );
}

export default Calculator;
