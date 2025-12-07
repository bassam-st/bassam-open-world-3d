const THREE = window.THREE;

export async function loadWorld(scene) {
  // أرض واسعة
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(500, 500),
    new THREE.MeshStandardMaterial({ color: 0x145814 })
  );
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  // لاحقاً: هنا سنضيف الجبال والأشجار باستخدام صورك
}
