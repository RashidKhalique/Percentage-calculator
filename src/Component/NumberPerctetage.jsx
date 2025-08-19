import React, { useState } from 'react'

const NumberPercentage = () => {
  const [fNum, setFNum] = useState('')
  const [SNUm, setSNUm] = useState('')
  const [sresult, setSresult] = useState('')

  const handleCalculate = () => {
    const percentNum = parseFloat(fNum)
    const baseNum = parseFloat(SNUm)
    if (!SNUm && !fNum) {
        toast.warn("Please enter both numbers");
             setSresult('0');
             return 0;
    }
    if (!isNaN(percentNum) && !isNaN(baseNum)) {
      const calculated = (percentNum / 100) * baseNum
      setSresult(calculated.toFixed(2))
    } else {
      setSresult('-Infinity')
    }
  }

  return (
    <div className="flex flex-wrap items-center w-full bg-gray-200 p-4 rounded shadow-sm gap-2 md:justify-between justify-center">
      <label className="flex items-center p-4">
        <span className="mr-2 text-[18px] font-light">What is</span>
        <input
          type="number"
          className="md:w-24 w-16 border border-gray-300 p-1 bg-amber-50 text-[18px] font-light"
          value={fNum}
          onChange={(e) => setFNum(e.target.value)}
          required
        />
        <span className="mx-2 text-[18px] font-light">% of</span>
        <input
          type="number"
          className="md:w-24 w-16 border border-gray-300 p-1 bg-amber-50 text-[18px] font-light"
          value={SNUm}
          onChange={(e) => setSNUm(e.target.value)}
          required
        />
        <span className="mx-2 font-light text-[18px]">?</span>
      </label>
      <div className='flex justify-center gap-3'>
        <button className="bg-[#336699] text-white px-4 py-1 rounded  font-light" onClick={handleCalculate}>
          CALCULATE
        </button>
        <input
          type="text"
          disabled
          className="md:w-24 w-20 border border-gray-300 p-1 bg-amber-50 text-[18px] font-light"
          value={sresult}
        />
      </div>

    </div>
  )
}

export default NumberPercentage