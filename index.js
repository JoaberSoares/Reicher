/*const btnmobile = document.getElementById("btn-mobile");

function NormalMenu() {
  const nav = document.getElementById("nav");

  nav.classList.toggle("active");
}

btnmobile.addEventListener("click", NormalMenu);
*/
const nav = document.querySelector("nav");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".menu");

function handleButtonClick(event) {
  if (event.type === "touchstart") event.preventDefault();
  event.stopPropagation();

  nav.classList.toggle("active");

  handleClickOutside(menu, () => {
    nav.classList.remove("active");
    setArial();
  });
  setArial();
}

function handleClickOutside(targetElement, callback) {
  const hmtl = document.documentElement;
  function handleHTMLClick(event) {
    if (!targetElement.contains(event.target)) {
      targetElement.removeAttribute("data-target");
      html.removeEventListener("click", handleHTMLClick);
      html.removeEventListener("touchstart", handleHTMLClick);
      callback();
    }
  }

  if (!targetElement.hasAttribute("data-target")) {
    html.addEventListener("click", handleHTMLClick);
    html.addEventListener("touchstart", handleHTMLClick);

    targetElement.setAttribute("data-target", "");
  }
  function setAria() {
    const isActive = nav.classList.contains("active");
    btnMenu.setAttribute("aria-expanded", isActive);
    if (isActive) {
      btnMenu.setAttribute("arial-label", "Fechar menu");
    } else {
      enu.setAttribute("arial-label", "Abrir menu");
    }
  }
}

btnMenu.addEventListener("click", handleButtonClick);
btnMenu.addEventListener("touchstart", handleButtonClick);
