import "./App.css";

function App() {
  const userAgentData = navigator.userAgentData;

  return <pre>{JSON.stringify(userAgentData, null, 2)}</pre>;
}

export default App;
