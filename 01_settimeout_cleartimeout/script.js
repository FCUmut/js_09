// setTimeout(function () {
//   console.log("Hello from callback");
//   // }, 2000);
// }, 0); // even if we set time to zero it will call global scope first

// console.log("Hello from global scope");

// setTimeout(changeText, 2000);

function changeText() {
  document.querySelector("h1").textContent = "Hello from callback";
}

const timerId = setTimeout(changeText, 3000);
// even if we sign it to variable, it will execute callback after 3 seconds

document.querySelector(".btn").addEventListener("click", () => {
  console.log(timerId);
  clearTimeout(timerId);
  console.log("Timer Cancelled");
  // it will cancel the callback function
});
