const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// function to create delay
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

button.addEventListener("click", async () => {
  const message = textInput.value;
  const delayTime = Number(delayInput.value);

  output.textContent = ""; // clear previous message

  await wait(delayTime);   // wait for given delay

  output.textContent = message; // show message
});
