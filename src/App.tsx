import { useEffect, useState } from "react";
import "./App.css";

// Service Workerのファイルパスを指定
const serviceWorkerPath = "/sw.js";

// 現在のService Workerバージョンを取得する関数
async function getServiceWorkerVersion(): Promise<string | null> {
  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.getRegistration(
      serviceWorkerPath
    );
    if (registration) {
      const sw = registration.active;
      if (sw) {
        return sw.scriptURL.includes("?") ? sw.scriptURL.split("?")[1] : null;
      }
    }
  }
  return null;
}

function App() {
  async function initApp() {
    const currentVersion = await getServiceWorkerVersion();
    console.log("現在のService Workerバージョン:", currentVersion);
  }

  initApp();
  // const currentVersion = await getServiceWorkerVersion();
  // return <div>バージョン: {currentVersion}</div>;
  return <div>test</div>;
  // const [_, setVersion] = useState("");
  // const userAgent = navigator.userAgent;
  // console.log(userAgent);
  // useEffect(() => {
  //   const userAgent = navigator.userAgent;
  //   const androidVersion = extractAndroidVersion(userAgent);
  //   const iosVersion = extractiOSVersion(userAgent);
  //   console.log("Android Version: ", androidVersion);
  //   if (androidVersion) {
  //     setVersion(androidVersion);
  //   } else if (iosVersion) {
  //     setVersion(iosVersion);
  //   }
  // }, []);
  // const extractAndroidVersion = (userAgent: string) => {
  //   const match = userAgent.match(/Android\s([0-9\.]*)/);
  //   if (match) {
  //     return match[1];
  //   }
  //   return null;
  // };
  // const extractiOSVersion = (userAgent: string) => {
  //   const match = userAgent.match(/OS\s([\d_]+)/);
  //   if (match) {
  //     return match[1].replace(/_/g, ".");
  //   }
  //   return null;
  // };
  // return (
  //   <>
  //     <div>{userAgent}</div>
  //     <div>test</div>
  //   </>
  // );
}

export default App;
