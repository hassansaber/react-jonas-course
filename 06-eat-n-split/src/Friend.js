import Button from "./Button"


const Friend = ({ friend, OnSelection, selectedFriend }) => {

  const { name, balance, image, id } = friend

  // _____STATES________
  const isSelected = (selectedFriend?.id === id)



  // ______HANDLER_________
  function handleSelect() {
    OnSelection(friend)
  }


  // ________JSX__________
  return (
    <li className={isSelected ? "selected" : ""}>
      <img
        src={image}
        alt="" />
      <h3>{name}</h3>
      {balance > 0 &&
        <p className="green" >
          {name} owes you {balance}€
        </p>}
      {balance < 0 &&
        <p className="red" >
          You owe {name} {Math.abs(balance)}€
        </p>}
      {balance === 0 &&
        <p>
          You and {name} are even
        </p>}

      <Button onClick={handleSelect}>{isSelected ? "close" : "select"}</Button>
    </li>
  )
}

export default Friend