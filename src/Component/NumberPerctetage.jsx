import React, { useState } from 'react'

const NumberPercentage = () => {
  const [fNum, setFNum] = useState('')
  const [SNUm, setSNUm] = useState('')
  const [sresult, setSresult] = useState('')

  const handleCalculate = () => {
    const percentNum = parseFloat(fNum)
    const baseNum = parseFloat(SNUm)
    if(!SNUm && !fNum)
    {
        alert("Please enter both numbers");
    }
    if (!isNaN(percentNum) && !isNaN(baseNum)) {
      const calculated = (percentNum / 100) * baseNum
      setSresult(calculated.toFixed(2))
    } else {
      setSresult('Error')
    }
  }

  return (
    <div className="flex flex-wrap items-center w-full bg-gray-200 p-4 rounded shadow-sm gap-2 justify-center">
      <label className="flex items-center p-4">
        <span className="mr-2">What is</span>
        <input
          type="number"
          className="w-20 border rounded p-1"
          value={fNum}
          onChange={(e) => setFNum(e.target.value)}
          required
        />
        <span className="mx-2">% of</span>
        <input
          type="number"
          className="w-24 border rounded p-1"
          value={SNUm}
          onChange={(e) => setSNUm(e.target.value)}
          required
        />
        <span className="mx-2">?</span>
      </label>
      <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={handleCalculate}>
        CALCULATE
      </button>
      <input
        type="text"
        disabled
        className="w-20 border rounded p-1"
        value={sresult}
      />
    </div>
  )
}

export default NumberPercentage