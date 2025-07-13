'use client';

import { createContext, useContext, useState } from 'react';

// Define calculator context state and actions
type CalculatorContextType = {
  input: string;
  result: string;
  append: (value: string) => void;
  calculate: () => void;
  clear: () => void;
};

// Create the calculator context with an initial undefined value
const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

// Context provider component that holds and manages calculator state
export const CalculatorProvider = ({ children }: { children: React.ReactNode }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

   // Append a character (number/operator) to the input string
  const append = (val: string) => setInput(prev => prev + val);

  // Evaluate the expression and update the result
  const calculate = () => {
    try {
      setResult(eval(input).toString());
    } catch {
      setResult('Error');
    }
  };

  // Clear both the input and result states
  const clear = () => {
    setInput('');
    setResult('');
  };

  // Provide the calculator context to any children components
  return (
    <CalculatorContext.Provider value={{ input, result, append, calculate, clear }}>
      {children}
    </CalculatorContext.Provider>
  );
};

// Custom hook to access the calculator context
export const useCalculator = () => {
  const ctx = useContext(CalculatorContext);
  if (!ctx) throw new Error('useCalculator must be used within CalculatorProvider');
  return ctx;
};
