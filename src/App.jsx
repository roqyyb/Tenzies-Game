import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './normalize.css'
import './App.css'
import Die from './Components/Die'

function App() {
  
  // generates new dice
  function generateDice(){
    const dice = [];

    for(let i=0; i<10; i++){
      dice.push(Math.ceil(Math.random() * 6))
    }

    return dice
  }
  
  //creates die elements
  const dieElements = generateDice().map((num, i) => {
    return <Die
      key={i}
      value={num}
    />
  })

  return (
    <div className="App">
      <main>
        <section className="dice-container">
        {dieElements}
        </section>
      </main>
    </div>
  )
}

export default App
