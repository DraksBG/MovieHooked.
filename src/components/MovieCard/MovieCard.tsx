import {FC} from "react";
import {MovieProps} from "../Movie/Movie.types";

const MovieCard: FC<MovieProps> = ({Poster, Title, Year, id, Runtime, Genre, Plot}) => {
    return (
        <div className="flex items-center font-mono" key={id}>
            <div className="bg-gray-700 rounded-md bg-gray-800 shadow-lg" key={id}>
                <div className="md:flex px-4 leading-none max-w-4xl">
                    <div className="flex-none ">
                        <img
                            src={Poster}
                            alt="pic"
                            className="md:h-50 h-72 md:w-50 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
                        />
                    </div>

                    <div className="flex-col text-gray-300">

                        <p className="pt-4 text-2xl font-bold">{Title} ({Year})</p>
                        <div className="text-md flex justify-between px-4 my-2">
                            <span className="font-bold">{Runtime && Runtime}| {Genre && Genre}</span>
                            <span className="font-bold"></span>
                        </div>
                        <p className="hidden md:block px-4 my-4 text-sm text-left">{Plot && Plot} </p>

                        <p className="flex text-md px-4 my-2">
                            Rating: 9.0/10
                            <span className="font-bold px-2">|</span>
                            Mood: Dark
                        </p>

                        <div className="text-xs">
                            <button type="button"
                                    className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER
                            </button>

                            <button type="button"
                                    className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB
                            </button>

                            <button type="button"
                                    className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;