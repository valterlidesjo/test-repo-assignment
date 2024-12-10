import axios from "axios"


const movieSearch = () => {
    axios.get("/../MockData/MockMovies.json")
    .then((response => {
        console.log(response.data);
    }))
    
    
};
movieSearch();

