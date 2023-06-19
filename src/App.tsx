import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [version, setVersion] = useState("");
  const userAgent = navigator.userAgent;
  console.log(userAgent);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const androidVersion = extractAndroidVersion(userAgent);
    console.log("Android Version: ", androidVersion);
    if (androidVersion) {
      setVersion(androidVersion);
    }
  }, []);

  const extractAndroidVersion = (userAgent: string) => {
    const match = userAgent.match(/Android\s([0-9\.]*)/);
    if (match) {
      return match[1];
    }
    return null;
  };
  return <div>{version}</div>;
}

export default App;
