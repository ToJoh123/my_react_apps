import { useState, useEffect} from "react";
import MovieCard from './MovieCard.jsx';
import  searchIkon from './search.svg';

import './App.css';
//10d4d043

const API_URL = 'https://www.omdbapi.com/?apikey=10d4d043';
// const movie1 = {
//     "Title": "The Avengers",
//     "Year": "2012",
//     "imdbID": "tt0848228",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
//   }
const App = () => {
    const [movies, setMovies] = useState([]); //use state hook
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        searchMovies('Searching');
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        // console.log(data);
        setMovies(data.Search);
    };

    return (
        <div  className="app">
            <div className="search">
                <input placeholder="Search for a movies" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={searchIkon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>
            
            {
                movies?.length > 0 
                ? (
                    <div className = "container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className="empty"> 
                    <h2> No movies found</h2>
                    </div>
                )
            }

        </div>
    );
}
export default App;
