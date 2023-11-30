import BillInput from "./BillInput"
import SelectPercentage from './SelectPercentage'
import OutPut from './OutPut'
import Reset from "./Reset"

import { useState } from 'react'

const TipCalculator = () => {
  // __________STATE____________
  const [bill, setBill] = useState("")
  const [percentage1, setPercentage1] = useState(0)
  const [percentage2, setPercentage2] = useState(0)
  const tip = bill * ((percentage1 + percentage2) / 2 / 100)

  // __________HANDLER____________
  function handleReset() {
    setBill('')
    setPercentage1(0)
    setPercentage2(0)
  }

  // __________JSX____________
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />

      <SelectPercentage
        percentage={percentage1}
        onSelect={setPercentage1}
      >you</SelectPercentage>

      <SelectPercentage
        percentage={percentage2}
        onSelect={setPercentage2}
      >your friend</SelectPercentage>

      {bill > 0 &&
        <>
          <OutPut
            tip={tip}
            bill={bill} />
          <Reset
            onReset={handleReset} />
        </>

      }
    </div>
  )
}

export default TipCalculator