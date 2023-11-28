function Stats({ items }) {

  // _______JSX________
  if (!items.length) return <footer className="stats">
    <em>Start adding some items to your packing list 🚀</em>
  </footer>


  // States
  const numItems = items.length
  const numPacked = items.filter(i => i.packed).length
  const percentage = Math.round((numPacked / numItems) * 100)

  // _______JSX________
  return (
    <footer className="stats">
      <em>
        {percentage === 100 ?
          `You got everything! Ready to go ✈` :
          `💼 you have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`
        }
      </em>
    </footer>
  )
}

export default Stats