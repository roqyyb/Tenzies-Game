import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './normalize.css'
import './App.css'
import Die from './Components/Die'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  const [dice, setDice] = useState(generateDice())
  const [tenzies, setTenzies] = useState(false)

  useEffect(()=>{

    const allHeld = dice.every(obj=> obj.isHeld === true);
    const allSameValue = dice.every(obj => obj.value === dice[0].value)
    
    if(allHeld && allSameValue){
      setTenzies(true)
    } else{
      setTenzies(false)
    }

  }, [dice])




  //generate a die
  function generateDie(){
    return(
      {
        value: (Math.ceil(Math.random() * 6)),
        id: nanoid(),
        isHeld: false
      }
    )
  }
  
  // generates new dice
  function generateDice(){
    const diceArr = [];

    for(let i=0; i<10; i++){
      diceArr.push(generateDie())
    }

    return diceArr
  }
  
  //creates die elements
  const dieElements = dice.map( obj => {
    return <Die
      key={obj.id}
      value={obj.value}
      isHeld={obj.isHeld}
      holdDice= {()=> holdDice(obj.id)}
    />
  })

  //handleClick
  function handleClick(){
    setDice(oldDice=>{

      const newDice = oldDice.map(obj=>{
        return(
          obj.isHeld? obj : {...obj, value:(Math.ceil(Math.random() * 6))}
        )
      })

      return newDice
    })
  }

  //holdDice 

  function holdDice(id){
    setDice(oldDice =>{

      const newDice = oldDice.map(obj=>{
        return (
          obj.id === id ? {...obj, isHeld: !(obj.isHeld)} : obj
        )
      })

      return newDice
    })

  }

  return (
    <div className="App">
      <main>
        {tenzies && <Confetti/>}
        <header>Tenzies</header>
        <p className="text">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p> 
        <section className="dice-container">
        {dieElements}
        </section>

        <button
          onClick={handleClick}
        >Roll</button>
      </main>
    </div>
  )
}

export default App
