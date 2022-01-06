const {create} = require("frameover");
if (window.gframe) return window.gframe.resume();
let t = window.prompt("text?");
let frame = window.gframe = await create("rgba(0,0,0,0.5)");
frame.document.documentElement.style.width = frame.document.documentElement.style.height = frame.document.body.style.width = frame.document.body.style.height = "100%";
frame.document.body.style.display = "table";
frame.document.body.style.verticalAlign = "middle";
frame.document.body.innerHTML = `<div style="font-size: 10em; color: white; text-align: center; display: table-cell; vertical-align: middle;">${t}</div>`;
frame.window.addEventListener("click", frame.pause);
