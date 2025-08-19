import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const Percentage = () => {
  const [fnum, setFnum] = useState('')
  const [Snum, setSnum] = useState('')
  const [result, setresult] = useState('')

  const handleCalculate = () => {
    const firstNum = parseFloat(fnum)
    const secondNum = parseFloat(Snum)
    if(!Snum && !fnum)
    {
        toast.warn("Please enter both numbers");
        setresult('0');
        return ;
    }

    if (!isNaN(firstNum) && !isNaN(secondNum) && secondNum !== 0) {
      const calculated = (firstNum / secondNum) * 100
      setresult(calculated.toFixed(2))
    } else {
      setresult('-Infinity')
    }
  }

  return (
    <div className="flex flex-wrap items-center bg-gray-200 py-3 px-1 rounded shadow-sm gap-2 md:justify-between justify-center">
      <label className="flex items-center p-4 ">
        <input
          type="number"
          className="md:w-24 border border-gray-300 p-1 bg-amber-50 w-16 text-[18px] font-light"
          value={fnum}
          onChange={(e) => setFnum(e.target.value)}
        />
        <span className="mx-2 text-[18px] font-light">is what percent of</span>
        <input
          type="number"
          className="md:w-24 border border-gray-300 p-1 bg-amber-50 w-16 text-[18px] font-light"
          value={Snum}
          onChange={(e) => setSnum(e.target.value)}
        />
        <span className="mx-2 ext-[18px] font-light ">?</span>
      </label>
    <div className='flex gap-3 items-center'>
        <button className="bg-[#336699] text-white font-light px-4 py-1 rounded" onClick={handleCalculate}>
        CALCULATE
      </button>
      <input type="text" disabled className="md:w-24 border border-gray-300 p-1 bg-amber-50 w-20 text-[18px] font-light" value={result} />
      <span className='font-light text-[18px]'>%</span>
    </div>
    <ToastContainer/>
    </div>
  )
}

export default Percentage