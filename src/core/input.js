export function initInput() {
  const input = {
    move: { forward: false, backward: false, left: false, right: false },
  };

  // كيبورد (كمبيوتر)
  window.addEventListener("keydown", (e) => {
    if (e.key === "w" || e.key === "ArrowUp")    input.move.forward  = true;
    if (e.key === "s" || e.key === "ArrowDown")  input.move.backward = true;
    if (e.key === "a" || e.key === "ArrowLeft")  input.move.left     = true;
    if (e.key === "d" || e.key === "ArrowRight") input.move.right    = true;
  });

  window.addEventListener("keyup", (e) => {
    if (e.key === "w" || e.key === "ArrowUp")    input.move.forward  = false;
    if (e.key === "s" || e.key === "ArrowDown")  input.move.backward = false;
    if (e.key === "a" || e.key === "ArrowLeft")  input.move.left     = false;
    if (e.key === "d" || e.key === "ArrowRight") input.move.right    = false;
  });

  // أزرار التحكم للجوال
  const buttons = document.querySelectorAll("#controls button[data-move]");
  buttons.forEach((btn) => {
    const dir = btn.getAttribute("data-move");

    const setDir = (v) => {
      if (dir === "forward")  input.move.forward  = v;
      if (dir === "backward") input.move.backward = v;
      if (dir === "left")     input.move.left     = v;
      if (dir === "right")    input.move.right    = v;
    };

    // لمس
    btn.addEventListener("touchstart", (e) => {
      e.preventDefault();
      setDir(true);
    }, { passive: false });

    btn.addEventListener("touchend", (e) => {
      e.preventDefault();
      setDir(false);
    }, { passive: false });

    // ماوس (لو فتح من كمبيوتر)
    btn.addEventListener("mousedown", () => setDir(true));
    btn.addEventListener("mouseup", () => setDir(false));
    btn.addEventListener("mouseleave", () => setDir(false));
  });

  return input;
}
