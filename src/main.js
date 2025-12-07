import { initInput } from "./core/input.js";
import { loadWorld } from "./world/map.js";

const THREE = window.THREE;

// ========== 🚀 إعداد العالم ==========
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x87ceeb, 10, 80); // ضباب

// ========== 🎥 الكاميرا ==========
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 4, 8);

// ========== 🎬 الريندر ==========
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("game"),
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// ========== 🧍‍♂️ المقاتل (بدل المكعب) ==========
function createSoldier() {
  const group = new THREE.Group();

  // الجسم
  const bodyGeo = new THREE.BoxGeometry(1, 2, 0.6);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x14532d });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.position.y = 1.5;
  group.add(body);

  // الرأس
  const headGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
  const headMat = new THREE.MeshStandardMaterial({ color: 0xf5deb3 });
  const head = new THREE.Mesh(headGeo, headMat);
  head.position.y = 2.6;
  group.add(head);

  // رجلين
  const legGeo = new THREE.BoxGeometry(0.4, 1, 0.5);
  const legMat = new THREE.MeshStandardMaterial({ color: 0x020617 });
  const leftLeg = new THREE.Mesh(legGeo, legMat);
  const rightLeg = new THREE.Mesh(legGeo, legMat);
  leftLeg.position.set(-0.25, 0.5, 0);
  rightLeg.position.set(0.25, 0.5, 0);
  group.add(leftLeg, rightLeg);

  group.position.set(0, 0, 0);
  return group;
}

const player = createSoldier();
scene.add(player);

// ========== 💡 الإضاءة ==========
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(10, 20, 10);
scene.add(dirLight);
scene.add(new THREE.AmbientLight(0xffffff, 0.4));

// ========== 🌍 تحميل العالم ==========
await loadWorld(scene);

// ========== 🎮 التحكم ==========
const input = initInput();

// ========== 🏃‍♂️ حركة المقاتل ==========
function updatePlayerMovement() {
  const speed = 0.2;

  if (input.move.forward)  player.position.z -= speed;
  if (input.move.backward) player.position.z += speed;
  if (input.move.left)     player.position.x -= speed;
  if (input.move.right)    player.position.x += speed;

  // الكاميرا تتبع المقاتل
  camera.position.x = player.position.x;
  camera.position.z = player.position.z + 6;
  camera.lookAt(player.position.x, player.position.y + 1.5, player.position.z);
}

// ========== 🔁 اللوب الرئيسي ==========
function animate() {
  requestAnimationFrame(animate);
  updatePlayerMovement();
  renderer.render(scene, camera);
}
animate();

// ========== 🔄 تغيير حجم الشاشة ==========
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
