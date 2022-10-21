import React, {useState} from 'react';
import {fetchMovie} from "./utils/utils";
import Header from "./components/Header/Header";
import Movie from "./components/Movie/Movie.";
import Search from "./components/Serach/Search";
import {useQuery} from "@tanstack/react-query";


function App() {
    const [searchValue, setSearchValue] = useState<string>('');
    const {data, status} = useQuery(['movies', searchValue], () => fetchMovie(searchValue));

    const search = (searchValue: any) => {
        setSearchValue(searchValue);
    };

    return (
        <div className="text-center">
            <Header text="HOOKED"/>
            <Search search={search}/>
            <p className="App-intro">Sharing a few of our favourite movies</p>
            <div className="bg-amber-50 flex items-center justify-center flex-rol flex-wrap">
                {status === 'loading' ? (
                    <span>loading...</span>
                ) : status === 'error' ? (
                    <div className="errorMessage">...Error!</div>
                ) : (
                    data.length ?
                        data?.map((movie: any, index: number) => {
                            const uniqueKey = `${index}_${movie.Title}`;
                            return (
                                <div key={uniqueKey}>
                                    <Movie Title={movie?.Title} Poster={movie.Poster} Year={movie.Year}
                                           Plot={movie.Plot}
                                           Runtime={movie.Runtime} id={uniqueKey} Genre={movie.Genre}/>
                                </div>
                            )
                        }) : <Movie Poster={data.Poster} Title={data.Title} Year={data.Year}
                                    id={`${data.Title}_${data.Year}`} Runtime={data.Runtime} Genre={data.Genre}
                                    Plot={data.Plot}/>
                )}
            </div>
        </div>
    );
}

export default App;
