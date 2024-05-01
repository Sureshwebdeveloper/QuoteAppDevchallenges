const author = document.getElementById("author");
const random = document.getElementById("random");
const copy = document.getElementById("copy");
const quotes = document.getElementById("quote");
const famousBtn = document.getElementById("famous");

window.addEventListener("DOMContentLoaded", () => {
  randomapi();
});

random.addEventListener("click", () => {
  randomapi();
});

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(quotes.innerHTML);
  alert("Text Copied!");
});

const randomApi = "https://api.quotable.io/quotes/random";

async function randomapi() {
  try {
    const response = await fetch(randomApi);

    if (!response.ok) {
      alert("could not fetch check your connection");
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    author.innerHTML = data[0].author;
    quotes.innerHTML = data[0].content;
    famousBtn.innerHTML = data[0].tags[0];
  } catch (error) {
    console.log(error);
  }
}
