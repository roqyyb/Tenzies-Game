import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './normalize.css'
import './App.css'
import Die from './Components/Die'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <main>
        <Die/>
      </main>
    </div>
  )
}

export default App
