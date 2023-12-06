import { useState } from "react"
import Button from "./Button"


const FormAddFriend = ({ onAddFriend }) => {
  // ________STATE__________
  const [name, setName] = useState("")
  const [image, setImage] = useState("https://i.pravatar.cc/48")



  // ________HANDLER__________
  function handleSubmit(e) {
    e.preventDefault()

    if (!name || !image) return;

    const id = crypto.randomUUID()
    const newFriend = {
      name,
      id,
      image: `${image}?=${id}`,
      balance: 0
    }

    onAddFriend(newFriend)

    setImage("https://i.pravatar.cc/48")
    setName('')
  }



  // ________JSX__________
  return (
    <>
      <form
        className="form-add-friend"
        onSubmit={handleSubmit}>
        <label style={{ whiteSpace: "nowrap" }}>👭 Friend name</label>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <label>🌆 Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <Button>Add</Button>
      </form >
    </>
  )
}

export default FormAddFriend