
function GenreFilter(props) {
  return (
    <div className="genre-filter">
      <h2 className="heading2"> Filter by Genre </h2>
      {props.genres.map(genre => (
        <button key={genre} className="btn" onClick={() => console.log(`Filtering by ${genre}`)}>
          {genre}
        </button>
      ))}
    </div>
  );
}


export default GenreFilter;
