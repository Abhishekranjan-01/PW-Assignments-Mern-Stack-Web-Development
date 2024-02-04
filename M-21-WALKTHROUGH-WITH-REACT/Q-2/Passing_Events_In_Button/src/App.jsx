import Button from "./components/Button";

const HandleOnClick = () => {
  alert("Button Is Clicked");
};

function App() {
  const text = "Learn";

  return <Button text={text} onclick={HandleOnClick} />;
}

export default App;
