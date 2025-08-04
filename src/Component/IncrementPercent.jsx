import React, { useState } from 'react'

const IncrementPercent = () => {
    const [initial, setInitial] = useState('')
    const [final, setFinal] = useState('')
    const [result, setResult] = useState('')

    const calculatePercentage = () => {
        const from = parseFloat(initial)
        const to = parseFloat(final)
        if(!final && !initial)
    {
        alert("Please enter both numbers");
    }

        if (isNaN(from) || isNaN(to) || from === 0) {
            setResult('Error')
            return
        }

        const IncrementPercent = ((to - from) / Math.abs(from)) * 100
        setResult(IncrementPercent.toFixed(2))
    }

    return (
        <div className="flex flex-wrap items-center bg-gray-200 p-4 rounded shadow-sm gap-2 justify-center">
            <span className="text-center p-4">
                What is the percentage increase/decrease from
            </span>
            <input
                type="number"
                className="w-20 border rounded p-1"
                value={initial}
                onChange={(e) => setInitial(e.target.value)}
                required
            />
            <span>to</span>
            <input
                type="number"
                className="w-20 border rounded p-1"
                value={final}
                onChange={(e) => setFinal(e.target.value)}
                required
            />
            <button className="bg-blue-500 text-white px-4 py-1 rounded ml-2" onClick={calculatePercentage} >
                CALCULATE
            </button>
            <input
                type="text"
                disabled
                className="w-20 border rounded p-1"
                value={result}
            />
            <span>%</span>
        </div>
    )
}

export default IncrementPercent