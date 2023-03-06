import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './normalize.css'
import './App.css'
import Die from './Components/Die'
import { nanoid } from 'nanoid'

function App() {
  const [dice, setDice] = useState(generateDice())
  
  // generates new dice
  function generateDice(){
    const dice = [];

    for(let i=0; i<10; i++){
      dice.push({
        value: (Math.ceil(Math.random() * 6)),
        id: nanoid()
      })
    }

    return dice
  }
  
  //creates die elements
  const dieElements = dice.map( obj => {
    return <Die
      key={obj.id}
      value={obj.value}
    />
  })

  return (
    <div className="App">
      <main>
        <section className="dice-container">
        {dieElements}
        </section>

        <button>Roll</button>
      </main>
    </div>
  )
}

export default App
