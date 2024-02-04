import List from "./components/List";

function App() {
  const listItems = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT JS",
    "NODE JS",
    "EXPRESS JS",
    "MONGO DB",
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Unordered List Of Tech Stack</h1>
      <List listitems={listItems} />
    </>
  );
}

export default App;
