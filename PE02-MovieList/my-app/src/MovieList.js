import Card from "./Card"
import "./App.css"
import { useState } from "react";

function MovieList() {
    const [selectedGenre, setSelectedGenre] = useState("")
    const movieData = [{Title : "Inception", Genre:"Science Fiction", ReleaseYear:2010},{Title : "The Shawshank Redemption", Genre:"Drama", ReleaseYear:1994},{Title : "The Dark Knight", Genre:"Action", ReleaseYear:2008} ];

    const handleGenreChange = (event) => {
      setSelectedGenre(event.target.value);
    };

    const filteredMovies = selectedGenre
    ? movieData.filter((movie) => movie.Genre.toLowerCase() === selectedGenre.toLowerCase())
    : movieData;

  return (
    <>
    <h2>Movie List</h2> 

    <select name="genres" id="genres" value={selectedGenre} onChange={handleGenreChange}>
      <option value="" selected>All Genres</option>
      <option value="science fiction">Science Fiction</option>
      <option value="drama">Drama</option>
      <option value="action">Action</option>
    </select>
    {filteredMovies.map((movie) => (<div onClick={() => {alert(movie.Title)}}><Card><h2 >{movie.Title}</h2><p>{movie.Genre}</p><p>{movie.ReleaseYear}</p></Card></div>))}
    {/* {movieData.map((movie) => (<Card>{<><h2>{movie.Title}</h2><p>{movie.Genre}</p><p>{movie.ReleaseYear}</p></>}</Card>))} */}
    </>
  );
}

export default MovieList;
