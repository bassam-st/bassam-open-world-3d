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

  // نثبت الكاميرا في مكان واحد وتنظر للاعب
  camera.position.set(0, 8, 15);
  camera.lookAt(player.position);
})();

// تحديث اللعبة كل إطار
function update(dt) {
  if (!player) return;

  const move = input.move;
  const speed = 8; // سرعة اللاعب

  if (move.forward)  player.position.z -= dt * speed;
  if (move.backward) player.position.z += dt * speed;
  if (move.left)     player.position.x -= dt * speed;
  if (move.right)    player.position.x += dt * speed;

  // الكاميرا ثابتة تنظر للاعب فقط
  camera.lookAt(player.position);

  // رسم المشهد
  renderer.render(scene, camera);
}

startLoop(update);
