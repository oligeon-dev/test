// sw.js

const VERSION = "v2";

self.addEventListener("install", (event) => {
  // インストール処理
  console.log("install");
});

self.addEventListener("activate", (event) => {
  // アクティベーション処理
  console.log("activate");
  window.localStorage.setItem("test", "test");
});

self.addEventListener("fetch", (event) => {
  // ネットワークリクエストのインターセプトなど
  console.log("fetch");
});
