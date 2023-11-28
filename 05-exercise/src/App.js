import { useState } from "react";

function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];

function FlashCards() {
  // __________State___________
  const [selectedId, setSelectedId] = useState(null)

  // __________Handler___________
  function handleClick(id) {
    setSelectedId(selectedId === id ? null : id)

  }


  // __________JSX___________
  return <div className="flashcards">
    {questions.map(q =>
      <div
        key={q.id}
        className={`${selectedId === q.id ? "selected" : ''}`}
        onClick={() => handleClick(q.id)}>

        <p>{selectedId === q.id ? q.answer : q.question}</p>
      </div>

    )
    }
  </div >;
}











//my solution
// function Card({ q }) {
//   // __________State___________
//   const [isClicked, setIsClicked] = useState(false)

//   // __________Handler___________
//   function handleClick() {
//     setIsClicked(i => !i)
//   }

//   // __________JSX___________
//   return (
//     <div className={`${isClicked ? "selected" : ''}`} onClick={handleClick} >
//       {isClicked ? q.answer : q.question}
//     </div>
//   )
// }


export default App;
