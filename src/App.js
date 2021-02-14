import { useState, useEffect } from "react";
import "./styles.css";
import Toggle from "./Toggle";
import Theme from "./Theme";

export default function App() {
  const [toggleState, setToggleState] = useState(false);

  let buttonText = "";
  if (toggleState) {
    buttonText = "Dark Mode";
  } else {
    buttonText = "Normal Mode";
  }

  let theme = Theme(toggleState);
  useEffect(() => {
    Object.assign(document.body.style, theme);
  });
  return (
    <div className="App">
      <Toggle
        stateToggler={setToggleState}
        toggleState={toggleState}
        buttonText={buttonText}
      />
    </div>
  );
}
