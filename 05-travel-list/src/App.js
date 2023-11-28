import { useState } from 'react'

import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";


// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "ssPassports", quantity: 2, packed: false },
//   { id: 4, description: "vfvSocks", quantity: 7, packed: true },
//   { id: 5, description: "Pfgvdfassports", quantity: 2, packed: false },
//   { id: 6, description: "Soffcks", quantity: 1, packed: true },
// ];



function App() {
  // _______State________
  const [items, setItems] = useState([])

  // _______Handler________
  function handleAddItem(item) {
    setItems(items => [...items, item])
  }
  function handleDeleteItem(id) {
    setItems(items => items.filter(i => i.id !== id))
  }
  function handleToggleItem(id) {
    setItems(items => items.map(i => id === i.id ?
      { ...i, packed: !i.packed } : i))
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all of the items?"
    )

    if (confirmed) setItems([])
  }



  // _______JSX________
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList} />
      <Stats items={items} />
    </div>
  );
}
export default App;











