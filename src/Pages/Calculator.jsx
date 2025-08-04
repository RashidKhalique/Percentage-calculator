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
      <header className="py-10">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <span className="bg-black text-white px-2 py-1 rounded">%</span>
          Percentage Calculator
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Percentage Calculator is a free online tool to calculate percentages.
        </p>
      </header>

          {/* Calculator Boxes */}

      <div className="w-full max-w-4xl space-y-4 px-4 ">
      
      <NumberPerctetage/>
        <Percentage/>
        
       <IncrementPercent/>

      </div>
      <p className="text-gray-500 text-sm mt-4">Tips: Use tab to move to the next field. Use shift+tab to move to the previous field. Press enter to calculate.</p>
      <hr className="my-8 w-full max-w-4xl" />

     <About/>
     <Footer/>
    </div>
  );
}

export default Calculator;
