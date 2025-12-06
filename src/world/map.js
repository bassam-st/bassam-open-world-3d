const THREE = window.THREE;

export async function loadWorld(scene) {
  // أرض كبيرة (يمكننا تغييرها لاحقاً حسب الصور)
  const groundGeo = new THREE.PlaneGeometry(200, 200);
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x228b22 });
  const ground = new THREE.Mesh(groundGeo, groundMat);

  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;

  scene.add(ground);

  // لاحقاً سنضيف المباني/الطرق هنا حسب الصور التي سترسلها
}
