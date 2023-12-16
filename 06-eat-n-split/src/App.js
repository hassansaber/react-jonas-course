import { useState } from 'react'

import FriendsList from "./FriendsList";
import FormAddFriend from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill";
import Button from './Button';





const App = () => {

  // ________STATE__________
  const [friends, setFriends] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    }
  ])
  const [showAddFriend, setShowAddFriend] = useState(false)
  const [selectedFriend, setSelectedFriend] = useState(null)





  // ________HANDLER__________
  function handleShowAddFriend() {
    setShowAddFriend(iA => !iA)
  }

  function handleAddFriend(friend) {
    setFriends(friends => [...friends, friend])
    setShowAddFriend(false)
  }

  function handleSelection(friend) {
    setSelectedFriend(sF =>
      sF?.id === friend.id ? null : friend)
    setShowAddFriend(false)

  }

  function handleSplitBill(value) {
    setFriends(friends =>
      friends.map(friend =>
        friend.id === selectedFriend.id ?
          { ...friend, balance: friend.balance + value } :
          friend
      ))

    setSelectedFriend(null)
  }



  // ________JSX__________
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          OnSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showAddFriend &&
          <FormAddFriend
            onAddFriend={handleAddFriend} />}

        <Button
          onClick={handleShowAddFriend}>
          {showAddFriend ?
            "close" : "Add Friend"}
        </Button>
      </div>

      {selectedFriend &&
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />}

    </div>
  )
}

export default App