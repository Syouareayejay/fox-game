import { TICK_RATE } from "./constants";
import game, { handleUserActions } from "./gameState";
import initButtons from "./buttons";

async function init() {
  console.log("Starting game");

  let nextTimeToTick = Date.now();
  initButtons(handleUserActions);

  function nextAnimationFrame() {
    const now = Date.now();

    if (nextTimeToTick <= now) {
      game.tick();
      nextTimeToTick = now + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();
