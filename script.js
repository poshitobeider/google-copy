const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const query = new URLSearchParams({ q: searchInput.value });
  window.location.href = `https://www.google.com/search?${query}`;
});
