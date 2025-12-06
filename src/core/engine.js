// نستخدم مكتبة THREE الموجودة عالمياً من index.html
const THREE = window.THREE;

export function initEngine() {
  const canvas = document.getElementById("game");

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio || 1);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87ceeb); // لون السماء

  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h, false);
  }

  window.addEventListener("resize", resize);
  resize();

  // إضاءة
  const dirLight = new THREE.DirectionalLight(0xffffff, 1);
  dirLight.position.set(10, 20, 10);
  scene.add(dirLight);

  const ambient = new THREE.AmbientLight(0xffffff, 0.3);
  scene.add(ambient);

  let last = performance.now();

  function startLoop(updateFn) {
    function loop(now) {
      const dt = (now - last) / 1000;
      last = now;

      if (typeof updateFn === "function") {
        updateFn(dt);
      }

      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  }

  return { scene, camera, renderer, startLoop };
}
