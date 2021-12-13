import axios from "axios";

export const getPopularMovies = async () => {
    const resp = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=ab1b7ed23a01c9bcca197c9c76f03757');
    return(resp.data.results);
  };

