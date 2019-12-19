import * as React from "react";
import { render } from "react-dom";
import InputContainer from "./InputContainer";
import InputContainerTwo from "./InputContainerTwo";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <InputContainer />
      <InputContainerTwo />
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
