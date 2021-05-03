// define UI element
const form = document.querySelector("#search_item_form");
const searchInput = document.querySelector("#search_item");
const searchList = document.querySelector("ul#box-item-group");

// define event listener
form.addEventListener("submit", addSearch);
// taskList.addEventListener("click", removeSearch);
// document.addEventListener("DOMContentLoaded", getSearch);

// define functions
function addSearch(e) {
  e.preventDefault();

  // empty input check
  if (searchInput?.value === "") {
    alert("Add a search item!");
  } else {
    // create li element
    let li = `<li class="single-box-item">
                    <div class="box-dot"></div>
                    <div class="box-item-txt">
                        <h3>Best Bike</h3>
                        <p>Search Item</p>
                    </div>
                    <div class="box-item-icon">
                        <i class="fa fa-close"></i>
                    </div>
                <li>`;

    // li inset in ul
    searchList.innerHTML += li;

    console.log("searchInput?.value", searchInput?.value);
  }
}
