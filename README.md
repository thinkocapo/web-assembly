## Description
This app uses WASM via a npm module. Basically, you build the npm package from `pkg` and then reference it from a web app. You could publish the npm module online, but we're making it a global npm module on your system, and we'll reference it via a relative path (npm link hello-wasm) into our js project.

> We now have an npm package, written in Rust, but compiled to WebAssembly. It's ready for use from JavaScript, and doesn't require the user to have Rust installed; the code included was the WebAssembly code, not the Rust source.

This app follows the steps defined here [MDN - Rust to wasm](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm).

## Setup

1. Building the package  
`cd hello-wasm && wasm-pack build`

2. Make our package available to npm  
`cd pkg && npm link`

3. re npm install, to get latest version of npm pkg  
`cd site && rm -rf node_modules && npm link hello-wasm && npm install`

## Explanations
What [wasm-pack build](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm#building_the_package) does.

`npm link hello-wasm` creates a `/site/node_modules` directory with your hello-wasm npm module. So now your package.json can find it when you do npm install. The module isn't hosted on the internet.

## Run
1. `npm run serve`  
2. http://localhost:8080/

## Documentation
https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm  

https://hacks.mozilla.org/2018/04/hello-wasm-pack/

https://docs.sentry.io/platforms/native/guides/wasm/

wasm-pack. This helps compile the code to WebAssembly, as well as produce the right packaging for npm

https://lucumr.pocoo.org/2020/11/30/how-to-wasm-dwarf/

https://hacks.mozilla.org/2018/04/javascript-to-rust-and-back-again-a-wasm-bindgen-tale/

https://gist.github.com/mitsuhiko/c27fee8445d2a18a8c134e0169119058

https://github.com/getsentry/symbolicator/tree/master/wasm-split

https://github.com/alexcrichton/wasm-bindgen/tree/master/examples/dom

https://rustwasm.github.io/docs/wasm-bindgen/

https://rustwasm.github.io/docs
