const mobileNavControl = document.querySelector("#mobileNavControl");
const mobileNavDropdown = document.querySelector(".mobileNavDropdown");
const mobileSearch = document.querySelector(".mobileSearch");
const searchIcon = document.querySelector(".searchIcon");
const body = document.querySelector("body");

mobileNavControl.addEventListener("click", () => {
  mobileNavDropdown.style.display =
    mobileNavDropdown.style.display === "none" ? "block" : "none";
});
const searchInput = document.createElement("input");
let searchInputVisible = false;

searchIcon.addEventListener("click", () => {
  searchIcon.style.display = "none";
  mobileSearch.style.right = "4.5rem";
  searchInput.type = "text";
  searchInput.className = "searchInput";
  mobileSearch.append(searchInput);
});

body.addEventListener("click", e => {
  const clicked = e.target;
  if (
    clicked.parentElement.className !== "mobileSearch" &&
    clicked.parentElement.className !== "searchAcct"
  ) {
    searchInput.remove();
    searchIcon.style.display = "block";
  }
  console.log(clicked.parentElement.className);
});
