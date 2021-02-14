export default function Toggle({ stateToggler, toggleState, buttonText }) {
  function clickHandler() {
    stateToggler(!toggleState);
  }
  return <button onClick={clickHandler}>{buttonText} </button>;
}
