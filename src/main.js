import { initInput } from "./core/input.js";
import { loadWorld } from "./world/map.js";

// ========== 🚀 إعداد السين (العالم) ==========
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x87ceeb, 10, 80);

// ========== 🎥 الكاميرا ==========
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 3, 6);

// ========== 🎬 الريندر ==========
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("game"),
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// ========== 🧍 اللاعب ==========
const playerGeo = new THREE.BoxGeometry(1, 2, 1);
const playerMat = new THREE.MeshStandardMaterial({ color: 0x0e9f6e });
const player = new THREE.Mesh(playerGeo, playerMat);
player.position.set(0, 1, 0);
scene.add(player);

// ========== 💡 الإضاءة ==========
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 20, 10);
scene.add(light);
scene.add(new THREE.AmbientLight(0xffffff, 0.4));

// ========== 🌍 تحميل العالم (الأرض + البيت) ==========
await loadWorld(scene);

// ========== 🎮 التحكم ==========
const input = initInput();

// ========== 🏃‍♂️ حركة اللاعب ==========
function updatePlayerMovement() {
  const speed = 0.15;

  if (input.move.forward) player.position.z -= speed;
  if (input.move.backward) player.position.z += speed;
  if (input.move.left) player.position.x -= speed;
  if (input.move.right) player.position.x += speed;

  camera.position.x = player.position.x;
  camera.position.z = player.position.z + 6;
  camera.lookAt(player.position);
}

// ========== 🔁 التحديث المستمر ==========
function animate() {
  requestAnimationFrame(animate);
  updatePlayerMovement();
  renderer.render(scene, camera);
}

animate();

// ========== تغيير حجم الشاشة ==========
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
