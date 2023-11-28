import { useState } from 'react'

const Item = ({ faq, i }) => {

  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen(iO => !iO)
  }

  return (
    <div className={`${isOpen ? "item open" : "item"}`} onClick={handleClick} >
      <div className="number">
        {i + 1}
      </div>
      <div className="title">
        {faq.title}
      </div>
      <div className="icon">
        {isOpen ? '-' : '+'}
      </div>
      {isOpen ? <div className="content-box"><ul>{faq.text}</ul>  </div> : null}
    </div>
  )
}

export default Item