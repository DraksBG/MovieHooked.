import React, {useEffect, useState} from 'react';
import './App.css';
import {MOVIE_API_URL} from "./utils/utils";
import Header from "./components/Header/Header";
import Search from "./components/Serach/Search";
import Movie from "./components/Movie/Movie.";

function App() {

    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState<any>([]);
    const [isError, setIsError] = useState(false);
    // const {isLoading, data, isError} = useQuery(['movies'], fetchMovies, {staleTime: 60000});
    // setMovies(data);
    // if (isLoading) return <div>Loading...</div>
    // const search = (searchValue: string) => {
    //     const data: any = axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=f4c69417`);
    //     setMovies(data?.Search);
    //
    // }
    useEffect(() => {
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then((jsonResponse: any) => {

                setMovies([...movies, jsonResponse]);
                setIsLoading(false);
            });
    }, []);

    const search = (searchValue: any) => {
        setIsLoading(true);
        setIsError(false);
        fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=f4c69417`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.Response === "True") {
                    setMovies(jsonResponse.Search);
                    setIsLoading(false);
                } else {
                    setIsError(true);
                    setIsLoading(false);
                }
            });
    };
    return (
        <div className="App">
            <Header text="HOOKED"/>
            <Search search={search}/>
            <p className="App-intro">Sharing a few of our favourite movies</p>
            <div className="movies">
                {isLoading ? (
                    <span>loading...</span>
                ) : isError ? (
                    <div className="errorMessage">...Error!</div>
                ) : (
                    movies?.map((movie: any) => (
                        <Movie Title={movie?.Title} Poster={movie.Poster} Year={movie.Year}/>
                    ))
                )}
            </div>
        </div>
    );
}

export default App;
