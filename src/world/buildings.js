const THREE = window.THREE;

export function addHouse(scene) {
  // الأساس (قاعدة البيت)
  const baseGeo = new THREE.BoxGeometry(6, 3, 6);
  const baseMat = new THREE.MeshStandardMaterial({ color: 0xd9d9d9 });
  const base = new THREE.Mesh(baseGeo, baseMat);
  base.position.set(10, 1.5, -5); // مكان البيت
  scene.add(base);

  // السقف (مثلث بسيط)
  const roofGeo = new THREE.ConeGeometry(5, 2.5, 4);
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x8b0000 });
  const roof = new THREE.Mesh(roofGeo, roofMat);
  roof.position.set(10, 4, -5);
  roof.rotation.y = Math.PI / 4;
  scene.add(roof);

  // باب البيت
  const doorGeo = new THREE.BoxGeometry(1.2, 2, 0.2);
  const doorMat = new THREE.MeshStandardMaterial({ color: 0x3d2b1f });
  const door = new THREE.Mesh(doorGeo, doorMat);
  door.position.set(10, 1, -2.2);
  scene.add(door);
}
