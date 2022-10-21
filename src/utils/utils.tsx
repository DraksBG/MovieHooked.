import axios from "axios";
import {MovieProps} from "../components/Movie/Movie.types";

export const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

export const MOVIE_API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=f4c69417";


export const fetchMovie = async (searchValue?: string) => {
    const res = await axios.get(searchValue ? `https://www.omdbapi.com/?s=${searchValue}&apikey=f4c69417` : MOVIE_API_URL)
    return searchValue? res.data.Search : res.data;
}