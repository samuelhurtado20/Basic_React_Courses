import { useRef } from "react";

export default function ExReferences() {
  //let refMenu = createRef(),
  let refMenu = useRef(),
    refMenuBtn = useRef();

  //console.log(refMenu, refMenuBtn);

  const handleToggleMenu = (e) => {
    /* const $menu = document.getElementById("menu");

    if (e.target.textContent === "Menú") {
      e.target.textContent = "Cerrar";
      $menu.style.display = "block";
    } else {
      e.target.textContent = "Menú";
      $menu.style.display = "none";
    } */

    if (refMenuBtn.current.textContent === "Open") {
      refMenuBtn.current.textContent = "Close";
      refMenu.current.style.display = "block";
    } else {
      refMenuBtn.current.textContent = "Open";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <>
      <h2>Example Referencs</h2>
      <button id="menu-btn" ref={refMenuBtn} onClick={handleToggleMenu}>
        Open
      </button>
      <nav id="open" ref={refMenu} style={{ display: "none" }}>
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Sec. 1</a>
        <br />
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Sec. 2</a>
        <br />
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Sec. 3</a>
        <br />
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Sec. 4</a>
        <br />
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md">Sec. 5</a>
      </nav>
    </>
  );
}