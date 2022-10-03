const games = [
  { id: 324, name: "Great game", rating: 5.0 },
  { id: 124, name: "Ok game", rating: 3.0 },
  { id: 678, name: "Meh game", rating: 2.5 },
  { id: 28, name: "Terrible game", rating: 1.0 },
  { id: 4, name: "Mediocre game", rating: 3.0 },
];

const gameList = document.querySelector(".games");

// for (let i = 0; i < games.length; i++) {
//   gameList.innerHTML += `
//     <li>Name: ${games[i].name}, rating: ${games[i].rating}</li>
//     `;
// }

games.forEach((game) => {
  gameList.innerHTML += `<li>${game.name} Rating: ${game.rating}</li>`;
});

const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", handleClick);
});

function handleClick() {
  this.classList.toggle("played");
}
