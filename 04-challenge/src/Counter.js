import { useState } from "react"

const Counter = () => {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)
  const date = new Date()
  date.setDate(date.getDate() + count)



  return (
    <div className="steps">
      <h2><button
        onClick={() => setStep(s => s - 1)}
      >-</button>
        step:{step}
        <button
          onClick={() => setStep(s => s + 1)}
        >+</button></h2>

      <h2><button
        onClick={() => {
          setCount(c => c - step)

        }}
      >-</button>
        count:{count}
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
    </div>
  )
}

export default Counter