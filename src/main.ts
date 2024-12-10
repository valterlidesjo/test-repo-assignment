import axios from "axios";

const movieSearch = () => {
  axios.get("/../MockData/MockMovies.json").then((response) => {
    console.log(response.data);
  });
};
movieSearch();

document.getElementById("searchForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const text = document.getElementById("searchText") as HTMLInputElement;
});
