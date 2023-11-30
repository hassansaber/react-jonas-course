

const OutPut = ({ bill, tip }) => {



  return (
    <h3>you pay $
      {tip + bill}
      (${bill} + ${tip} tip)
    </h3>
  )
}

export default OutPut