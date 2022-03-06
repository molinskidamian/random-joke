async function connectApi() {
    const apiUrl = "https://api.chucknorris.io/jokes/random";
    const response = await fetch(apiUrl);
    const data = await response.json();

    console.log(data);
    getJoke(data);
}

function getJoke(data) {
    const jokeText = document.querySelector(".joke-text");
    jokeText.textContent = data.value;
    // console.log(data.value);
}

connectApi();
