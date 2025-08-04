import React, { useState } from 'react'

const Percentage = () => {
  const [fnum, setFnum] = useState('')
  const [Snum, setSnum] = useState('')
  const [result, setresult] = useState('')

  const handleCalculate = () => {
    console.log(`Calculating percentage for ${fnum} of ${Snum}`);
    const firstNum = parseFloat(fnum)
    const secondNum = parseFloat(Snum)
    if(!Snum && !fnum)
    {
        alert("Please enter both numbers");
    }

    if (!isNaN(firstNum) && !isNaN(secondNum) && secondNum !== 0) {
      const calculated = (firstNum / secondNum) * 100
      setresult(calculated.toFixed(2))
    } else {
      setresult('Error')
    }
  }

  return (
    <div className="flex flex-wrap items-center bg-gray-200 p-4 rounded shadow-sm gap-2 justify-center">
      <label className="flex items-center p-4">
        <input
          type="number"
          className="w-20 border rounded p-1"
          value={fnum}
          onChange={(e) => setFnum(e.target.value)}
        />
        <span className="mx-2">is what percent of</span>
        <input
          type="number"
          className="w-24 border rounded p-1"
          value={Snum}
          onChange={(e) => setSnum(e.target.value)}
        />
        <span className="mx-2">?</span>
      </label>
      <button className="bg-blue-500 text-white px-4 py-1 rounded" onClick={handleCalculate}>
        CALCULATE
      </button>
      <input type="text" disabled className="w-20 border rounded p-1" value={result} />
      <span>%</span>
    </div>
  )
}

export default Percentage