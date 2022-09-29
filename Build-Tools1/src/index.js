import jokes from "jokes"
// import emojis from "@sefinek/random-emoji"

const joke = jokes();
// const emoji = emojis();

console.log(joke);
// console.log(emoji);

const jokeElement = document.querySelector("#joke");

jokeElement.innerText = joke.text;