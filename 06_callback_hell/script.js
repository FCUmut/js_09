function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.responseText));
    }
  };

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000);
}

// if we call this way, since we set the timeout randomly, every time output order will be different
// getData("./movies.json");
// getData("./actors.json");
// getData("./directors.json");

// that's why we use callback function and call next one inside of previous one
getData("./movies.json", (data) => {
  console.log(data);
  getData("./actors.json", (data) => {
    console.log(data);
    getData("./directors.json", (data) => {
      console.log(data);
    });
  });
});
// but this method is not useful on big scale therefore we use 'promises'
