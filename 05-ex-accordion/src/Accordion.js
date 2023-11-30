import Item from "./Item"

import { useState } from 'react'

const Accordion = ({ faqs }) => {

  // ___________STATE______________
  const [currOpen, setIsOpen] = useState(null)

  // ___________JSX______________
  return (
    <div className="accordion">
      {faqs.map((faq, i) =>
        <Item
          currOpen={currOpen}
          onOpen={setIsOpen}
          faq={faq}
          num={i}
          key={faq.title} />)}
    </div>
  )
}

export default Accordion