import {FC} from "react";
import style from "./Movie.module.css"
import {MovieProps} from "./Movie.types";
import {DEFAULT_PLACEHOLDER_IMAGE} from "../../utils/utils";

const Movie: FC<MovieProps> = ({Poster, Title, Year}) => {
    const poster = Poster === 'N/A' ? DEFAULT_PLACEHOLDER_IMAGE : Poster;
    console.log(poster);
    return (
        <div className={style.movie}>
            <h2>{Title}</h2>
            <>
                <img width={200} alt={`The movie titled: ${Title}`} src={poster}/>
            </>
            <p>{Year}</p>
        </div>
    );
}

export default Movie;