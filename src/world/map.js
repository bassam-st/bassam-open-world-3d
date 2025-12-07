const THREE = window.THREE;

export async function loadWorld(scene) {
  // أرض واسعة
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(500, 500),
    new THREE.MeshStandardMaterial({ color: 0x145814 }) // أخضر غامق
  );
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  // لاحقاً سنضيف هنا الجبال والأشجار والصور اللي أرسلتها
}
