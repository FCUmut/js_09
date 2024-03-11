const xhr = new XMLHttpRequest();
const btn = document.querySelector(".btn");

function generateJoke() {
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      console.log(data.value);
      const joke = document.querySelector("#joke");
      joke.innerHTML = data.value;
    } else {
      joke.innerHTML = "Something went wrong! (Not Funny)";
    }
  };

  xhr.send();
}

btn.addEventListener("click", generateJoke);
document.addEventListener("DOMContentLoaded", generateJoke);
