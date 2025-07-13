'use client';

import { useCalculator } from '@/context/CalculatorContext';

// List of all calculator buttons
const buttons = [
  '7', '8', '9', '/', 
  '4', '5', '6', '*', 
  '1', '2', '3', '-', 
  '0', '.', '=', '+',
  'C'
];

export default function Calculator() {
  const { input, result, append, calculate, clear } = useCalculator();

  // Handles all button click events to the appropriate calculator method
  const handleClick = (value: string) => {
    if (value === 'C') return clear();
    if (value === '=') return calculate();
    append(value);
  };

    return (
        <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm space-y-4">
            {/* Display section for current input and computed result */}
            <div className="bg-gray-100 rounded-md p-4 text-right text-xl font-mono">
                <div className="text-gray-500">{input || '0'}</div>
                <div className="text-black font-semibold text-2xl">= {result || '0'}</div>
            </div>

            {/* Render calculator buttons */}
            <div className="grid grid-cols-4 gap-3">
            {buttons.map(btn => (
                <button
                key={btn}
                onClick={() => handleClick(btn)}
                className={`
                    py-3 rounded-lg font-semibold text-lg cursor-pointer
                    ${btn === '=' 
                    ? 'col-span-2 bg-green-600 text-white hover:bg-green-700' 
                    : btn === 'C' 
                        ? 'bg-red-500 text-white hover:bg-red-600' 
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}
                `}
                >
                {btn}
                </button>
            ))}
            </div>
    </div>
    );

}
