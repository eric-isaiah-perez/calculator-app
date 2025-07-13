'use client'

import Calculator from "@/components/Calculator"

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="text-left w-100">
          <h1 className="ml-2 mb-3">This Calculator App is built by
              <a className="text-blue-500 hover:text-blue-300" target="_blank" href="https://www.linkedin.com/in/eric-isaiah-perez-2b7700178/">
                &nbsp;Eric Isaiah Perez
              </a>
          </h1>
        </div>
        <Calculator />
    </div>
  );
}
