import { useState } from "react";

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true);
  const [likes, setLikes] = useState(0);

  function handleInc() {
    setLikes(likes => likes + 1);
  }

  function handleTripleInc() {
    setLikes(likes => likes + 1);
    setLikes(likes => likes + 1);
    setLikes(likes => likes + 1);

  }
  function handleUndo() {
    setLikes(0)
  }
  function handleLaterUndo() {
    setTimeout(handleUndo, 2000)
  }


  return (
    <div className="tab-content">
      <h4>{item.summary}</h4>
      {showDetails && <p>{item.details}</p>}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Hide" : "Show"} details
        </button>

        <div className="hearts-counter">
          <span>{likes} ❤️</span>
          <button onClick={handleInc}>+</button>
          <button onClick={handleTripleInc}>+++</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleLaterUndo}>Undo in 2s</button>
      </div>
    </div>
  );
}
export default TabContent
