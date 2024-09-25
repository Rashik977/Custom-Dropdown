const dropdownButton = document.querySelector(".dropdown-button");
const dropdownText = document.querySelector(".dropdown-text");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownArrow = document.querySelector(".dropdown-arrow");
const dropdown = document.querySelector(".dropdown");

let selectedItem = null;
let previousSelectedItem = null;

const toggleDropdownMenu = () => {
  dropdownMenu.classList.toggle("show");
  dropdownArrow.classList.toggle("rotate");

  if (dropdownMenu.classList.contains("show")) {
    document.addEventListener("keydown", keyboardNavigation);
  } else {
    document.removeEventListener("keydown", keyboardNavigation);
  }
};

const selectItem = (event) => {
  // to prevent other items from being selected
  if (!event.target.classList.contains("dropdown-item")) {
    return;
  }
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

const keyboardNavigation = (event) => {
  if (event.key === "Enter") {
    selectItem(event);
  }
};

const closeDropdownOutsideClick = (event) => {
  // Check if the click is outside the dropdown
  if (!dropdown.contains(event.target)) {
    toggleDropdownMenu();
    dropdownMenu.classList.remove("show");
    dropdownArrow.classList.remove("rotate");
  }
};

document.addEventListener("click", closeDropdownOutsideClick);
dropdownMenu.addEventListener("click", selectItem);
dropdownButton.addEventListener("click", toggleDropdownMenu);
