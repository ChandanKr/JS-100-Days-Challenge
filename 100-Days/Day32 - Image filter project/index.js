const tabs = document.querySelector(".tabs");
const gallery = document.querySelectorAll(".images");

const filterSearch = (value) => {
  gallery.forEach((curElem) => {
    if (value === "all" || curElem.dataset.category === value) {
      curElem.style.display = "block";
    } else {
      curElem.style.display = "none";
    }
  });
};

tabs.addEventListener("click", (event) => {
  if (event.target.dataset.category !== undefined) {
    filterSearch(event.target.dataset.category);
  }
});
