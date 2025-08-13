import { useState } from 'react'

import Card from './components/sample'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <h1 className="text-6xl text-red-500 font-bold">
      Tailwind Test
    </h1>
 


      <div className="bg-gray-100 h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-500">
        Tailwind with PostCSS is working 🎉
      </h1>
    </div>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <Card />
    </div>
    </>
  )
}

export default App
