import { useState, useEffect } from 'react'

import './App.css'
 
function App() {
  const STARTING_TIME = 5

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  } 

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  function startClock() {
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
  }

  function endGame() {
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
  }

  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    } else if(timeRemaining === 0) {
        endGame()
    }
  }, [timeRemaining, isTimeRunning])

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
          onChange={handleChange}
          value={text}
          disabled={! isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button 
         onClick={startClock}
         disabled={isTimeRunning}
         >
         Start
      </button>
      <h1>Word Count: {wordCount} </h1>
    </div>
  ) 
}

export default App
