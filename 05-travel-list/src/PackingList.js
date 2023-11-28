import { useState } from "react";

import Item from "./Item"



function PackingList({ items, onDeleteItem, onToggleItem, onClearList }) {
  // _______States________
  const [sortBy, setSortBy] = useState('input')
  let sortedItems;
  if (sortBy === 'input') sortedItems = items
  if (sortBy === 'description') sortedItems =
    items.slice().sort(
      (a, b) => a.description.localeCompare(b.description))
  if (sortBy === 'packed') sortedItems =
    items.slice().sort((
      a, b) => Number(a.packed) - Number(b.packed))




  // _______JSX________
  return (
    <div className="list">
      <ul>
        {sortedItems.map(({ id, packed, description, quantity }) => (
          <Item
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            key={id}
            packed={packed}
            description={description}
            quantity={quantity}
            id={id} />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        {items.length ? <button onClick={onClearList}>Clear List</button> : null}
      </div>

    </div>

  )
}


export default PackingList