"strict mode";
const dMode = document.querySelector(".btn-mode");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const navbar = document.querySelector(".navbar");

dMode.addEventListener("click", function () {
  //  test if light mode is on
  if (dark.classList.contains("hidden")) {
    light.classList.add("hidden");
    dark.classList.remove("hidden");
    navbar.style.backgroundColor = "#ccc";

    // test if dark mode is on
  } else if (light.classList.contains("hidden")) {
    light.classList.remove("hidden");
    dark.classList.add("hidden");
    navbar.style.backgroundColor = "#0a192f";
  }
});
