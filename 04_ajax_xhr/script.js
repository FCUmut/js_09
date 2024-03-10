const xhr = new XMLHttpRequest();

// xhr.open("GET", "./movies.json");
xhr.open("GET", "https://api.github.com/users/fcumut/repos");

// readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready

xhr.onreadystatechange = function () {
  //   if (this.readyState === 4 && this.status === 200) {
  //     // console.log(JSON.parse(this.responseText));
  //     const data = JSON.parse(this.responseText);
  //     data.forEach((movie) => {
  //       const li = document.createElement("li");
  //       li.innerHTML = `<strong>${movie.title}</strong> - <strong>${movie.year}</strong>`;

  //       document.querySelector("#results").appendChild(li);
  //     });
  //   }

  //   console.log(this.readyState); // 2-3-4
  //   console.log(this.status); // 200

  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);

    data.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${repo.name}</strong> - <strong>${repo.description}</strong>`;

      document.querySelector("#results").appendChild(li);
    });
  }
};

xhr.send();
