import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { effect, signal } from "./signals.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button">count is 0</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

const btn = document.querySelector("#counter");
let count = signal(0);

effect(() => {
  btn.innerHTML = `count is ${count.value}`;
});

effect(() => {
  if (count.value > 10) {
    console.error("value too high");
    count.value = 0;
  }
});
btn.addEventListener("mouseenter", () => count.value++);
