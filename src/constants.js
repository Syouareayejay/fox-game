export const TICK_RATE = 3000;
export const ICONS = ["fish", "poop", "weather"];
export const RAIN_CHANCE = 0.21;
export const SCENES = ["day", "rain"];
export const DAY_LENGTH = 24;
export const NIGHT_LENGTH = 4;

export const getNextHungryTime = (clock) =>
  Math.floor(Math.random() * 3) + 5 + clock;
export const getNextDieTime = (clock) =>
  Math.floor(Math.random() * 2) + 3 + clock;
export const getNextPoopTime = (clock) =>
  Math.floor(Math.random() * 3) + 4 + clock;
export const writeModal = (text = "") =>
  (document.querySelector(
    ".modal"
  ).innerHTML = `<div class='modal-inner'>${text}</div>`);
