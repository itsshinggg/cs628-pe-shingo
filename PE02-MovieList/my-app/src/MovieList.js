import Card from "./Card"
import "./App.css"

function MovieList() {

    const movieData = [{Title : "Inception", Genre:"Science Fiction", ReleaseYear:2010},{Title : "The Shawshank Redemption", Genre:"Drama", ReleaseYear:1994},{Title : "The Dark Knight", Genre:"Action", ReleaseYear:2008} ];
  return (
    <>
    <h2>Movie List</h2> 

    <select name="genres" id="genres">
      <option value="" disabled selected hidden>All Genres</option>
      <option value="science fiction">Science Fiction</option>
      <option value="drama">Drama</option>
      <option value="action">Action</option>
    </select>

    {movieData.map((movie) => (<Card>{<><h2>{movie.Title}</h2><p>{movie.Genre}</p><p>{movie.ReleaseYear}</p></>}</Card>))}
    </>
  );
}

export default MovieList;
