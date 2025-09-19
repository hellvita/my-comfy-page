const SULPHUR_YELLOW = "#f7d455"; // DEFAULT

const colors = {
  LIGHT_PINK: "#ffadad",
  LIGHT_IVORY: "#ffd6a5",
  CREAM: "#fdffb6",
  TEA_GREEN: "#caffbf",
  WATERSPOUT: "#9bf6ff",
  BABY_BLUE_EYES: "#a0c4ff",
  VODKA: "#bdb2ff",
  BRILLIANT_LAVENDER: "#ffc6ff",
  WHITE: "#fff",
};

const containerEl = document.querySelector(".container-scroll-button");
const scrollBtnEl = document.querySelector(".js-scroll-btn");

containerEl.addEventListener("mouseover", changeShadow);
containerEl.addEventListener("mouseout", setDefaultShadow);

let previousColor = SULPHUR_YELLOW;
let currentColor = SULPHUR_YELLOW;
function changeShadow() {
  do {
    currentColor = pickRandomColor(colors);
  } while (currentColor === previousColor);

  scrollBtnEl.style.filter = `drop-shadow(0 0px 4px ${currentColor})`;
  previousColor = currentColor;
}

function setDefaultShadow() {
  scrollBtnEl.style.filter = "";
}

function getRandomElement(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandomColor(colors) {
  return Object.values(colors)[
    getRandomElement(1, Object.values(colors).length - 1)
  ];
}
