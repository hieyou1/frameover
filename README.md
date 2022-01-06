# frameover
### For when you need a frame over!

## Install
```
npm i frameover
```
```
yarn add frameover
```
```
pnpm install frameover
```
or whatever NPM equivalent you use

## Docs, short & simple
```js
const {create} = require("frameover");

window.onload = async () => {
    // takes in an optional background color in any CSS format [if you end up using it, I'd recommend a shade of gray]
    const frame = await create("rgba(0,0,0,0.5)");

    // do stuff in your frame
    frame.document.innerHTML = "";
    frame.window.console.log("in a frame!!");

    // and when you're done, destroy it so the user can get back to the page
    frame.destroy();

    // or pause it and resume later
    frame.pause();
    setTimeout(frame.resume, 5000);
};
```

## Use cases
- Web extension where you need to show something on top of a website without affecting the site's existing JS [cross-origin isolation for the win!]
- There's definitely more but I can't think of them right now

## Code
Reused from one of my old projects I never ended up releasing & cleaned up a bit in case anyone else wanted to use it.

## Issues
Open an issue or PR.
