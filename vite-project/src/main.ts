const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>My TypeScript Greating App</h1>

  <input id="nameInput" placeholder="Enter your name">

  <button id="helloButton">Say Hello</button>

  <p id="message"></p>
`;

const input = document.querySelector<HTMLInputElement>('#nameInput')!;
const button = document.querySelector<HTMLButtonElement>('#helloButton')!;
const message = document.querySelector<HTMLParagraphElement>('#message')!;

button.addEventListener('click', () => {
  const name: string = input.value;
  message.textContent = `Hello, ${name}! 👋`;
});
