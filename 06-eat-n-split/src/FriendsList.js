import Friend from "./Friend";




const FriendsList = ({ friends, OnSelection, selectedFriend }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          OnSelection={OnSelection}
          selectedFriend={selectedFriend}
        />
      )
      )}
    </ul>
  )
}

export default FriendsList