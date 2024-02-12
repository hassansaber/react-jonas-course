import { useEffect, useReducer } from 'react';
import Header from './Header'
import Main from './Main';
import Loader from './Loader'
import Error from './Error'
import StartScreen from './StartScreen'
import Question from './Question'
import NextButton from './NextButton';
import Progress from './Progress';
import FinishScreen from './FinishScreen';
import Footer from './Footer';
import Timer from './Timer';

const initialState = {
  questions: [],
  status: 'loading', // loading , error , ready , active , finished
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null
}

const SEC_PER_QUESTION = 30

function reducer(state, action) {
  switch (action.type) {

    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready'
      }

    case 'dataFailed':
      return { ...state, status: 'error' }

    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SEC_PER_QUESTION
      }
    case 'newAnswer':
      const currentQuestion = state.questions[state.index]
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === currentQuestion.correctOption ?
            state.points + currentQuestion.points :
            state.points
      }

    case 'nextQuestion':
      return {
        ...state,
        index: state.index++,
        answer: null
      }
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highScore: state.highScore > state.points ? state.highScore : state.points
      }
    case 'reset':
      return {
        ...initialState,
        status: 'ready',
        highScore: state.highScore,
        questions: state.questions
      }
    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining--,
        status: state.secondsRemaining === 0 ?
          'finished' : state.status
      }

    default:
      throw new Error('unknown payload')
  }
}






function App() {
  // ____________STATES_____________

  const [{
    status, questions, index, answer, points, highScore, secondsRemaining
  }, dispatch] = useReducer(reducer, initialState)

  const numQuestions = questions.length
  const maxPossiblePoints = questions.reduce((acc, cur) => acc + cur.points, 0)


  // ____________EFFECTS_____________

  useEffect(function () {

    async function getQuestions() {
      try {
        const res = await fetch("http://localhost:8000/questions")
        const data = await res.json()
        dispatch({ type: 'dataReceived', payload: data })

      } catch (err) {
        dispatch({ type: 'dataFailed' })
        console.log(err.message);
      }
    }
    getQuestions()
  }, [])



  // ____________JSX_____________

  return (
    <div className="app">
      <Header />

      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === 'active' && (
          <>
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer} />

            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer} />

            <Footer>
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />

              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions} />
            </Footer>
          </>
        )}
        {status === 'finished' &&
          <>
            <FinishScreen
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              highScore={highScore} />
            <NextButton status={status} dispatch={dispatch} />
          </>}

      </Main>
    </div>
  );
}

export default App;
