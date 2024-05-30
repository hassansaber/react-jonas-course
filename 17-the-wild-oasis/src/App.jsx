import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: var(--border-radius-sm);
  background-color: var(--color-brand-600);
  color: var(--color-brand-50);
  box-shadow: var(--shadow-sm);
  cursor: pointer;
`;

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("check in")}>Check in</Button>
        <Button onClick={() => alert("check out")}>Check out</Button>

        <Input type="number" placeholder="Number of guests" />
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;

// STYLED COMPONENTS

// // step-1
// import styled from "styled-components";

// // step-2 : way1
// // generate a NamedStyledComponent from html tag
// const Input = styled.h1`
//   font-size: 5rem;
// `;

// // step-2 : way2
// // change existed component into styled
// const StyledApp = styled.div`
//   background-color: orange;
// `;

// function App() {
//   return (
//     // usage : really simple
//     <StyledApp>
//       <Input>Hello world</Input>
//     </StyledApp>
//   );
// }
// export default App;
