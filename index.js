let menu = document.querySelector(".menu");
let links = document.querySelector(".links");

menu.addEventListener("click", () => {
  if (links.style.display == "") {
    links.style.display = "flex";
  } else if (links.style.display == "flex") {
    links.style.display = "";
  }
});
