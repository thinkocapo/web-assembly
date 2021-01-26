console.log("pre import")

import("./node_modules/hello-wasm/hello_wasm.js").then((js) => {
  js.greet("Yourself");
});
