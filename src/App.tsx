// import { useEffect, useState } from "react";
// import { registerSW } from "virtual/:pwa-register";
import "./App.css";
import ReloadPrompt from "./ReloadPrompt";
// import { useEffect } from "react";
// import { useRegisterSW } from "virtual:pwa-register/react";

// const intervalMS = 2 * 60 * 1000;

// const updateServiceWorker = useRegisterSW({
//   onRegistered(r) {
//     console.log("check");
//     r &&
//       setInterval(() => {
//         r.update();
//       }, intervalMS);
//   },
// });

function App() {
  // updateServiceWorker;
  // const updateServiceWorker = useRegisterSW({
  //   onRegistered(r) {
  //     r &&
  //       setInterval(() => {
  //         r.update();
  //       }, intervalMS);
  //   },
  // });
  // registerSW({
  //   onNeedRefresh() {
  //     console.log("on need refresh");
  //   },
  // });

  return (
    <main className="App">
      <div>{import.meta.env.VITE_APP_VERSION}</div>
      <ReloadPrompt />
    </main>
  );

  // const currentVersion = await getServiceWorkerVersion();
  // return <div>バージョン: {currentVersion}</div>;
  // return <div>test</div>;
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
