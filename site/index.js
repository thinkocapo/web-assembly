import("./node_modules/hello-wasm/hello_wasm.js").then((js) => {
// import("./hello-wasm/pkg/hello_wasm.js").then((js) => {
    js.greet("WebAssembly");
  });