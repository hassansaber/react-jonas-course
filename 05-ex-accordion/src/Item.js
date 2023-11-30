

const Item = ({ faq, num, currOpen, onOpen }) => {

  // ___________STATE______________
  const isOpen = num === currOpen

  // ___________HANDLER______________
  function handleToggle() {
    onOpen(isOpen ? "null" : num)
  }

  // ___________JSX______________
  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={handleToggle} >
      <p className="number">
        {num < 9 ? `0${num + 1}` : num + 1}
      </p>
      <p className="title">
        {faq.title}
      </p>
      <p className="icon">
        {isOpen ? '-' : '+'}
      </p>
      {isOpen && <div className="content-box"><ul>{faq.text}</ul>  </div>}
    </div>
  )
}

export default Item