
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 1, description: "ssPassports", quantity: 2, packed: false },
  { id: 2, description: "vfvSocks", quantity: 7, packed: true },
  { id: 1, description: "Pfgvdfassports", quantity: 2, packed: false },
  { id: 2, description: "Soffcks", quantity: 1, packed: true },
];



function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />

    </div>
  );
}
export default App;

function Logo() {
  return (
    <h1>🌴 Far Away 💼</h1>
  )
}

function Form() {
  return (<div className="add-form">
    <h3>What do you need for your 😍 trip?</h3>
  </div>)
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map(({ packed, description, quantity }) => (
          <Item packed={packed} description={description} quantity={quantity} />
        ))}
      </ul>
    </div>
  )
}

function Item({ packed, description, quantity }) {
  return <li>
    <span style={packed
      ? { textDecoration: "line-through" }
      : {}}>
      {quantity} {description}
    </span>
    <button>❌</button>
  </li>
}

function Stats() {
  return (
    <footer className="stats">
      <em>💼 you have X items on your list, and you already packed X (X%)</em>
    </footer>
  )
}