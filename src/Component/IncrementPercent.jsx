import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const IncrementPercent = () => {
    const [initial, setInitial] = useState('')
    const [final, setFinal] = useState('')
    const [result, setResult] = useState('')

    const calculatePercentage = () => {
        const from = parseFloat(initial)
        const to = parseFloat(final)
        if (!final && !initial) {
            toast.warn("Please enter both numbers");
            setResult('0');
            return 0;
        }

        if (isNaN(from) || isNaN(to) || from === 0) {
            setResult('-Infinity')
            return
        }

        const IncrementPercent = ((to - from) / Math.abs(from)) * 100
        setResult(IncrementPercent.toFixed(2))
    }

    return (
        <div className="flex flex-wrap items-center bg-gray-200 p-4  rounded shadow-sm gap-4 md:justify-between justify-center ">
            <div className='flex flex-col items-center justify-center'>
                <span className="text-center p-2 text-[18px] font-light  ">
                    What is the percentage increase/decrease
                </span>
                <div className='flex gap-4 ml-3 justify-center items-center text-[18px] font-light'>
                    <span className=''>from</span>
                    <input
                        type="number"
                        className="md:w-24 w-16 border border-gray-300 p-1 bg-amber-50 text-[18px] font-light"
                        value={initial}
                        onChange={(e) => setInitial(e.target.value)}
                        required
                    />
                    <span >to</span>
                    <input
                        type="number"
                        className="md:w-24 w-16 border border-gray-300 p-1 bg-amber-50 text-[18px] font-light"
                        value={final}
                        onChange={(e) => setFinal(e.target.value)}
                        required
                    />
                </div>

            </div>

            <div className='flex justify-center gap-3 '>
                <button className="bg-[#336699] text-white px-4 py-1 rounded font-light" onClick={calculatePercentage} >
                    CALCULATE
                </button>
                <input
                    type="text"
                    disabled
                    className="md:w-24 w-16 border border-gray-300 p-1 bg-amber-50 text-[18px] font-light"
                    value={result}
                />
                <span className='font-light text-[18px]'>%</span>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default IncrementPercent