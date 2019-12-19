import * as React from "react";
import { render } from "react-dom";
import InputContainer from "./InputContainer";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <InputContainer />
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
