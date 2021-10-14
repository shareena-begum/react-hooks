import { useState } from 'react'

import './App.css'

function App() {
  const [text, setText] = useState("")

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function calculateWordCount(text) {
    const wordsArr = text.split(" ")
    console.log(wordsArr.length)
    return wordsArr.length
  }

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
          onChange={handleChange}
          value={text}
      />
      <h4>Time remaining: ???</h4>
      <button>Start</button>
      <h1>Word Count  onClick={() => calculateWordCount(text)} : ???</h1>
    </div>
  ) 
}

export default App
