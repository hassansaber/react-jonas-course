import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { StyleSheetManager } from "styled-components";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {
      // solve warning: (styled-component v6)
      // it looks like an unknown prop is being sent through to the DOM, which will likely trigger a React console error
    }
    <StyleSheetManager shouldForwardProp={() => true}>
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);
