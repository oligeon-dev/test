import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [version, setVersion] = useState("");
  const userAgent = navigator.userAgent;
  console.log(userAgent);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const androidVersion = extractAndroidVersion(userAgent);
    const iosVersion = extractiOSVersion(userAgent);
    console.log("Android Version: ", androidVersion);
    if (androidVersion) {
      setVersion(androidVersion);
    } else if (iosVersion) {
      setVersion(iosVersion);
    }
  }, []);

  const extractAndroidVersion = (userAgent: string) => {
    const match = userAgent.match(/Android\s([0-9\.]*)/);
    if (match) {
      return match[1];
    }
    return null;
  };

  const extractiOSVersion = (userAgent: string) => {
    const match = userAgent.match(/OS\s([\d_]+)/);
    if (match) {
      return match[1].replace(/_/g, ".");
    }
    return null;
  };
  return <div>{userAgent}</div>;
}

export default App;
