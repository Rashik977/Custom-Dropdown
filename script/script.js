const dropdownButton = document.querySelector(".dropdown-button");
const dropdownText = document.querySelector(".dropdown-text");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownArrow = document.querySelector(".dropdown-arrow");

let selectedItem = null;
let previousSelectedItem = null;

const toggleDropdownMenu = () => {
  dropdownMenu.classList.toggle("show");
  dropdownArrow.classList.toggle("rotate");
};

const selectItem = (event) => {
  previousSelectedItem = selectedItem;
  selectedItem = event.target;
  dropdownText.textContent = selectedItem.textContent;
  toggleDropdownMenu();
  selectedItemIconToggle();
};

const selectedItemIconToggle = () => {
  selectedItem.classList.add("selected");

  /*case for when previousSelectedItem is null &
  when the previous and selected items are same  */
  if (
    !previousSelectedItem ||
    previousSelectedItem.textContent === selectedItem.textContent
  ) {
    return;
  }

  previousSelectedItem.classList.remove("selected");
};

dropdownMenu.addEventListener("click", selectItem);
dropdownButton.addEventListener("click", toggleDropdownMenu);
