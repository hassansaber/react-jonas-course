import { useQuiz } from "../context/QuizContext";

function NextButton() {
  const { dispatch, answer, index, numQuestions, status } = useQuiz();

  if (answer === null) return null;

  if (index + 1 < numQuestions)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (status === "finished")
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Let's try again
      </button>
    );

  if (index + 1 === numQuestions)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
