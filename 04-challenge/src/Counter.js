import { useState } from "react"


const Counter = () => {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)

  const date = new Date()
  date.setDate(date.getDate() + count)




  function handleReset() {
    setCount(0)
    setStep(1)
  }


  return (
    <div className="App">
      {/* STEP V1 */}
      {/* <h2><button
        onClick={() => setStep(s => s - 1)}
      >-</button>
        step:{step}
        <button
          onClick={() => setStep(s => s + 1)}
        >+</button></h2> */}

      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      /> {step}

      <h2><button
        onClick={() => {
          setCount(c => c - step)
        }}
      >-</button>

        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>

        <button
          onClick={() => setCount(c => c + step)}
        >+</button></h2>

      <h2>
        <span>
          {count === 0
            ? `today is `
            : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
        </span>

        <span> {date.toDateString()}</span>
      </h2>

      {(step !== 1 || count !== 0) ?
        <button onClick={handleReset}>Reset</button> :
        null
      }
    </div>
  )
}

export default Counter