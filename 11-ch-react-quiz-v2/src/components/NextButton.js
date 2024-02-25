function NextButton({ dispatch, answer, index, numQuestions, status }) {
  if (answer === null) return null

  if (index + 1 < numQuestions) return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: 'nextQuestion' })}
    >Next</button>
  )

  if (index + 1 === numQuestions) return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: 'finish' })}
    >Finish</button>
  )

  if (status === 'finished') return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: 'reset' })}
    >Let's try again</button>
  )

}

export default NextButton
