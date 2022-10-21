import {FC} from "react";
import {MovieProps} from "./Movie.types";
import {DEFAULT_PLACEHOLDER_IMAGE} from "../../utils/utils";
import MovieCard from "../MovieCard/MovieCard";

const Movie: FC<MovieProps> = ({Poster, Title, Year, id, Runtime, Genre, Plot}) => {
    const poster = Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : Poster;
    return (
        <div className="flex m-10" key={id}>
            <MovieCard Poster={poster} Title={Title} Year={Year} Genre={Genre} id={id} Plot={Plot} Runtime={Runtime}/>
        </div>
    );
}

export default Movie;