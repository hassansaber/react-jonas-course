import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import Input from "./ui/Input";
import Button from "./ui/Button";
import Heading from "./ui/Heading";

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in and out</Heading>
        <Button onClick={() => alert("check in")}>Check in</Button>
        <Button onClick={() => alert("check out")}>Check out</Button>

        <Heading as="h3">Forms</Heading>
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
