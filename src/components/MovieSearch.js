import SearchBox from "./SearchBox";
import Results from "./Results";
import config from "../config";
import { useState } from "react";

const MovieSearch = () => {
  const [movieItems, updateMovieItems] = useState([]);
  const [movieSearchDone, updateMovieSearchDone] = useState(false);
  const onClickSearchMovie = (searchText) => {
    if (searchText === "") {
      updateMovieItems([]);
      updateMovieSearchDone(false);
      return;
    }
    const url = `https://www.omdbapi.com?apikey=${config.OMDB_API_KEY}&s=${searchText}`;
    fetch(url)
      .then((responseObj) => responseObj.json())
      .then((data) => {
        updateMovieItems(data.Search);
        updateMovieSearchDone(true);
      });
  };
  return (
    <div>
      <h1 className="display-1 text-center">Movie Search</h1>
      <SearchBox searchMovie={onClickSearchMovie} />
      <Results movieResults={movieItems} movieSearchStatus={movieSearchDone} />
    </div>
  );
};
export default MovieSearch;
