import Item from "./Item"

const Accordion = ({ faqs }) => {
  return (
    <div className="accordion">
      {faqs.map((faq, i) => <Item faq={faq} i={i} />)}

    </div>
  )
}

export default Accordion