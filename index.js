const toggle = document.getElementById("price-toggle");
const basicPrice = document.querySelector("#basic h1");
const processionalPrice = document.querySelector("#professional h1");
const masterPrice = document.querySelector("#master h1");

toggle.addEventListener("click", (e) => {
  if (e.target.checked) {
    basicPrice.innerHTML = "<span>&dollar;</span>19.99";
    processionalPrice.innerHTML = "<span>&dollar;</span>24.99";
    masterPrice.innerHTML = "<span>&dollar;</span>39.99";
  } else {
    basicPrice.innerHTML = "<span>&dollar;</span>199.99";
    processionalPrice.innerHTML = "<span>&dollar;</span>249.99";
    masterPrice.innerHTML = "<span>&dollar;</span>399.99";
  }
});
