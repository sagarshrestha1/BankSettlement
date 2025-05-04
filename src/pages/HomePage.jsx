import MovieCard from "../components/MovieCard"
import { useState } from "react";


function HomePage() {
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        { id: 1, title: "hello", release_date: "2020" },
        { id: 2, title: "hello1", release_date: "2020" },

        { id: 3, title: "hello2", release_date: "2020" },
        { id: 4, title: "hello3", release_date: "2020" },

    ];
    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };
    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="btn btn-success" className="search-button">Submit</button>
        </form>
        <div className="movies-grid">
            {movies.map(movie => (
                movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>

    </div>
}
export default HomePage;