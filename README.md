## Description
Build the npm package from `pkg` and then reference it from a web app.

> We now have an npm package, written in Rust, but compiled to WebAssembly. It's ready for use from JavaScript, and doesn't require the user to have Rust installed; the code included was the WebAssembly code, not the Rust source.

Could publish it as a global npm module on your system. Instead, we'll reference it through a relative path...

## Setup
Steps adopted from [MDN - Rust to wasm](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm)  
```
cd hello-wasm
wasm-pack build
```

what [wasm-pack build](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm#building_the_package) does


`npm link hello-wasm` creates a `/site/node_modules` directory with your hello-wasm npm module. So now your package.json can find it when you do npm install. The module isn't hosted on the internet.


1. Building the package  
`cd hello-wasm && wasm-pack build`

2. Make our package available to npm  
`cd pkg && npm link`

3. re npm install, to get latest version of npm pkg  
`cd site && rm -rf node_modules && npm link hello-wasm && npm install`

## Run
`npm run serve`  

http://localhost:8080/
## Documentation
https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm  

https://hacks.mozilla.org/2018/04/hello-wasm-pack/

https://docs.sentry.io/platforms/native/guides/wasm/

wasm-pack. This helps compile the code to WebAssembly, as well as produce the right packaging for npm

https://lucumr.pocoo.org/2020/11/30/how-to-wasm-dwarf/

https://hacks.mozilla.org/2018/04/javascript-to-rust-and-back-again-a-wasm-bindgen-tale/

https://gist.github.com/mitsuhiko/c27fee8445d2a18a8c134e0169119058

https://github.com/getsentry/symbolicator/tree/master/wasm-split

## Troubleshooting
```
a62dbed038d38366ad89.module.wasm:0x1881 Uncaught (in promise) RuntimeError: unreachable
    at http://localhost:8080/a62dbed038d38366ad89.module.wasm:wasm-function[2]:0x1881
```

TODO the wasm-split, https://github.com/getsentry/symbolicator/tree/master/wasm-split
BUT, .greet() should work anyways...