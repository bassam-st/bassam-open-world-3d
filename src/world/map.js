const THREE = window.THREE;
import { addHouse } from "./buildings.js";

export async function loadWorld(scene) {
  // أرض كبيرة
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(500, 500),
    new THREE.MeshStandardMaterial({ color: 0x228b22 })
  );

  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  // إضافة البيت
  addHouse(scene);
}
