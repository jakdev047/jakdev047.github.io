// define UI element
const form = document.querySelector("#search_item_form");
const searchInput = document.querySelector("#search_item");
const searchList = document.querySelector("ul#box-item-group");

// define event listener
form.addEventListener("submit", addSearch);
searchList.addEventListener("click", removeSearch);
// document.addEventListener("DOMContentLoaded", getSearch);

// define functions
function addSearch(e) {
  e.preventDefault();

  // empty input check
  if (searchInput?.value === "") {
    alert("Add a search item!");
  } else {
    // collect form data
    const searchInputValue = searchInput?.value;

    // create li element
    let li = `<li class="single-box-item">
                    <div class="box-dot"></div>
                    <div class="box-item-txt">
                        <h3>${searchInputValue}</h3>
                        <p>Search Item</p>
                    </div>
                    <div class="box-item-icon">
                        <a href="#">X</a>
                    </div>
                <li>`;

    // li inset in ul
    searchList.innerHTML += li;
  }
}

function removeSearch(e) {
  if (e.target.hasAttribute("href")) {
    if (confirm("Are you sure?")) {
      let element = e.target.parentElement.parentElement;
      element.remove();
    }
  }
}
