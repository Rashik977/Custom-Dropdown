const dropdownButton = document.querySelector(".dropdown-button");
const dropdownMenu = document.querySelector(".dropdown-menu");
const dropdownItems = document.querySelectorAll(".dropdown-item");
let selectedItem = null;
let previousSelectedItem = null;

const toggleDropdown = () => {
  dropdownButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
  });
};

const selectItem = (event) => {
  previousSelectedItem = selectedItem;
  selectedItem = event.target;
  dropdownButton.textContent = selectedItem.textContent;
  dropdownMenu.classList.remove("show");
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

toggleDropdown();
