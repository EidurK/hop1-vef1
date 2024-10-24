
function ShowHide(x) {
  x.classList.toggle("change");
  var Menu = document.getElementById("Menu");
  if (Menu.style.display === "none") {
    Menu.style.display = "grid";
  } else {
    Menu.style.display = "none";
  }
}
