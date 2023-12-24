function Options({ question, answer, dispatch }) {
  const hasAnswered = answer !== null

  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option 
          ${answer === i ? "answer" : ""} 
          ${hasAnswered ?
              question.correctOption === i ? "correct" : "wrong"
              : ""}`}
          onClick={() => dispatch({ type: 'newAnswer', payload: i })}
          key={option}
          disabled={hasAnswered}
        >{option}</button>
      ))}
    </div>
  )
}

export default Options
