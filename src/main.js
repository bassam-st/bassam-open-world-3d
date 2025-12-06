import { initEngine } from "./core/engine.js";
import { loadWorld } from "./world/map.js";
import { loadPlayer } from "./player/player.js";
import { initInput } from "./core/input.js";

const { scene, camera, renderer, startLoop } = initEngine();
const input = initInput();

let player;

// تحميل العالم واللاعب
(async () => {
  await loadWorld(scene);
  player = await loadPlayer(scene);
})();

// تحديث اللعبة كل إطار
function update(dt) {
  if (!player) return;

  const move = input.move;

  const speed = 5; // سرعة اللاعب

  if (move.forward) player.position.z -= dt * speed;
  if (move.backward) player.position.z += dt * speed;
  if (move.left) player.position.x -= dt * speed;
  if (move.right) player.position.x += dt * speed;

  // الكاميرا تتبع اللاعب من الخلف
  camera.position.set(player.position.x, 5, player.position.z + 10);
  camera.lookAt(player.position);

  renderer.render(scene, camera);
}

startLoop(update);
