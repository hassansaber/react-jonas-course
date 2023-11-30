

const BillInput = ({ bill, onSetBill }) => {

  return (
    <div>
      <label>How much does the Bill?</label>
      <input
        placeholder="bill value"
        type="text"
        value={bill}
        onChange={(e) =>
          onSetBill(Number(e.target.value))} />
    </div>
  )
}

export default BillInput