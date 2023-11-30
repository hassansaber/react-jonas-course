import { useState } from "react"


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  return <>
    <Steps />
    <Steps />

  </>
}






function Steps() {

  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)



  function handlePrevious() {

    if (step > 1) setStep(s => s - 1)
  }
  function handleNext() {
    if (step < 3) setStep(s => s + 1)
  }



  return (
    <div>
      <button className="close" onClick={() => setIsOpen(is => !is)}>&times;</button>
      {isOpen &&
        <div className='steps'>
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ""}>1</div>
            <div className={step >= 2 ? 'active' : ""}>2</div>
            <div className={step >= 3 ? 'active' : ""}> 3</div >
          </div >
          <StepMessage step={step}>
            <h3>{messages[step - 1]}</h3>
            <div className="buttons">
              <Button bgColor="#999" color="#fff" onClick={() => {
                alert(`
              learn how to ${messages[step - 1]}
              `)
              }} >
                Learn How
              </Button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button
              onClick={handlePrevious}
              bgColor="#7950f2"
              color='#fff'
            >Previous <span>👈</span></Button >
            <Button
              onClick={handleNext}
              bgColor="#7950f2"
              color='#fff'
            > <span>👉</span>Next</Button >
          </div>
        </div >}
    </div >
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      Step {step} :{children}
    </div>
  )
}

function Button({ onClick, bgColor, color, children }) {
  return (

    <button
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: color
      }} >
      {children}</button>
  )

}

export default App;
