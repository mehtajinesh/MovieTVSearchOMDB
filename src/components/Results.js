import MovieResultItem from "./MovieResultItem";

const Results = ({ movieResults, movieSearchStatus }) => {
  return (
    <div className="m-5">
      <div
        className={`display-4 ${movieSearchStatus ? "d-block" : "d-none"} mb-2`}
      >
        Search Results
      </div>
      <div className="list-group">
        {console.log(movieResults)}
        {movieResults.map((movie) => {
          <MovieResultItem movie={movie} />;
        })}
      </div>
    </div>
  );
};
export default Results;
