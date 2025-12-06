export function initInput() {
  const input = {
    move: { forward: false, backward: false, left: false, right: false },
  };

  // كيبورد (للّي يشغّل اللعبة من كمبيوتر)
  window.addEventListener("keydown", (e) => {
    if (e.key === "w" || e.key === "ArrowUp") input.move.forward = true;
    if (e.key === "s" || e.key === "ArrowDown") input.move.backward = true;
    if (e.key === "a" || e.key === "ArrowLeft") input.move.left = true;
    if (e.key === "d" || e.key === "ArrowRight") input.move.right = true;
  });

  window.addEventListener("keyup", (e) => {
    if (e.key === "w" || e.key === "ArrowUp") input.move.forward = false;
    if (e.key === "s" || e.key === "ArrowDown") input.move.backward = false;
    if (e.key === "a" || e.key === "ArrowLeft") input.move.left = false;
    if (e.key === "d" || e.key === "ArrowRight") input.move.right = false;
  });

  // لمس الجوال: لمس الشاشة = تحرك للأمام
  window.addEventListener(
    "touchstart",
    (e) => {
      e.preventDefault();
      input.move.forward = true;
    },
    { passive: false }
  );

  window.addEventListener(
    "touchend",
    (e) => {
      e.preventDefault();
      input.move.forward = false;
    },
    { passive: false }
  );

  return input;
}
