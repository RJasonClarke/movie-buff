const apiKey = "&apikey=efef40b6"

export const fetchMovies = () => {
    fetch(`https://www.omdbapi.com/?t=Fight+Club${apiKey}`)
    .then(resp => resp.json())
    .then(movie => console.log(movie))
}

// https://www.omdbapi.com/?t=Fight+Club&apikey=efef40b6