console.log("pre import")
Sentry.init({
  dsn: "https://8f4d53a78c534f95908a4f9302844a7b@o262702.ingest.sentry.io/5533981",
  release: "dev",
  debug: true,
});

// SENTRY DOCS
loadWasm("./node_modules/hello-wasm/hello_wasm_bg.wasm").then(callback => {
  console.log("callback", callback)
  // If greet() throws an error in wasm, then sentry sdk captures it? shows stack trace?
  // callback.instance.exports.greet("name is")
  // captureError()
})

// MDN DOCS - still works
// import("./node_modules/hello-wasm/hello_wasm.js").then((js) => {
//   js.greet("WebAssembly");
//   // js.greet();
// });

function captureError() {
  try {
    throw new Error();
  } catch (e) {
    Sentry.captureException(e);
  }
}

async function loadWasm(url) {
  const importObj = {
    env: {
      capture_error: captureError,
    },
  };
  return await WebAssembly.instantiateStreaming(fetch(url), importObj);
}

// failed Access to script...CORS, tried 'http-serve'ing it
// import("./hello-wasm/pkg/hello_wasm.js").then((js) => {