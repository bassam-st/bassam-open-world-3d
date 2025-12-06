const THREE = window.THREE;

export async function loadPlayer(scene) {
  // لاعب بسيط (صندوق طويل)
  const geo = new THREE.BoxGeometry(1, 2, 1);
  const mat = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
  const player = new THREE.Mesh(geo, mat);

  player.position.set(0, 1, 0);
  player.castShadow = true;

  scene.add(player);

  return player;
}
