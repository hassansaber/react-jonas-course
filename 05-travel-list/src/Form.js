import { useState } from "react";

function Form({ onAddItem }) {

  // _______States________
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)



  // _______handlers________
  function handleSubmit(e) {
    e.preventDefault()
    if (!description) return

    const newItem = { description, quantity, packed: false, id: Date.now() }
    onAddItem(newItem)

    setDescription('')
    setQuantity(1)
  }

  // _______JSX________
  return (
    <form className="add-form" onSubmit={handleSubmit}>

      <h3>What do you need for your 😍 trip?</h3>
      <select
        onChange={e =>
          setQuantity(Number(e.target.value))
        }
        value={quantity}
      >

        {Array.from({ length: 20 }, (_, i) => i + 1).map(
          num => (
            <option
              value={num}
              key={num}
            >{num}</option>
          ))}
      </select>

      <input
        type="text"
        placeholder='Item...'
        value={description}
        onChange={e =>
          setDescription(e.target.value)
        }
      />

      <button>ADD</button>
    </form>)
}

export default Form