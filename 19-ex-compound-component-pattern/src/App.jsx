import Counter from "./Counter";

//Compound Component pattern
// usages: modal windows, pagination ,table ,...
// how works : parent component , and child components who really belongs to parent component
// mini example : <select> and <option> tags in html
// advantage : we use much less props , prevent "prop explosion"
// how implement : with context api => steps starts at next file

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>

      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
        counterPosition="top"
      /> */}

      <div>
        <Counter>
          <Counter.Label>My super flexible counter</Counter.Label>
          <Counter.Increase icon="+" />
          <Counter.Count />
          <Counter.Decrease icon="-" />
        </Counter>
      </div>

      <div>
        <Counter>
          <Counter.Increase icon="◀️" />
          <Counter.Count />
          <Counter.Decrease icon="▶️" />
        </Counter>
      </div>
    </div>
  );
}
