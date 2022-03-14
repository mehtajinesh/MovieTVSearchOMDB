const MovieSearch = () => {
  return (
    <div className="input-group p-5">
      <span className="input-group-text bg-white wd-border-top-left-rounded-pill wd-border-bottom-left-rounded-pill border-end-0">
        <label
          className="fa-solid fa-magnifying-glass text-muted"
          htmlFor="searchMovie"
        ></label>
      </span>
      <input
        type="text"
        id="searchMovie"
        className="shadow-none form-control wd-border-top-right-rounded-pill wd-border-bottom-right-rounded-pill border-start-0"
        placeholder="Search Movies"
      />
    </div>
  );
};
export default MovieSearch;
