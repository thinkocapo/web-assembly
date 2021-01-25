## Description
Build the npm package from `pkg` and then reference it from a web app.

> We now have an npm package, written in Rust, but compiled to WebAssembly. It's ready for use from JavaScript, and doesn't require the user to have Rust installed; the code included was the WebAssembly code, not the Rust source.

Could publish it as a global npm module on your system. Instead, we'll reference it through a relative path...

## Setup
```
cd hello-wasm
wasm-pack build
```

what [wasm-pack build](https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm#building_the_package) does


`npm link hello-wasm` creates a `/site/node_modules` directory with your hello-wasm npm module. So now your package.json can find it when you do npm install. The module isn't hosted on the internet.

## Run
`npm run serve`  

http://localhost:8080/
## Documentation
https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm  

https://hacks.mozilla.org/2018/04/hello-wasm-pack/

https://docs.sentry.io/platforms/native/guides/wasm/

wasm-pack. This helps compile the code to WebAssembly, as well as produce the right packaging for npm

https://lucumr.pocoo.org/2020/11/30/how-to-wasm-dwarf/