const MovieResultItem = ({ movie }) => {
  return (
    <div className="list-group-item p-2">
      <div className="row">
        <div className="col-1">
          <img className="img-thumbnail" src={movie.Poster}></img>
        </div>
        <div className="col">
          <div className="row">
            <label className="form-label fw-bold">{`Movie Name:${movie.Title}`}</label>
          </div>
          <div className="row g-0">
            <div className="col-1">
              <label className="form-label">{`Type:${movie.Type}`}</label>
            </div>
            <div className="col-1">
              <label className="form-label">{`Year:${movie.Year}`}</label>
            </div>
          </div>
          <div className="row">
            <a href={`https://www.imdb.com/title/${movie.imdbID}/`}>
              {`IMDB: https://www.imdb.com/title/${movie.imdbID}/`}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieResultItem;
