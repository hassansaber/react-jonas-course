import { useEffect } from "react"

function Timer({ dispatch, secondsRemaining }) {


  const min = Math.floor(secondsRemaining / 60)
  const sec = secondsRemaining % 60

  useEffect(function () {
    const id = setInterval(function () {

      dispatch({ type: 'tick' })

    }, 1000);

    return () => clearInterval(id)

  }, [dispatch, secondsRemaining])






  return (
    <div >
      <button className="timer">

        {min < 10 && "0"}{min}:{sec < 10 && "0"}{sec}
      </button>
    </div>
  )
}

export default Timer
