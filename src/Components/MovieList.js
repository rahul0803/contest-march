
function MovieList(props) {
  return (
    <table className="table">
      <thead className="table-head">
        <tr className="table-row">
          <th>Title</th>
          <th>Genre</th>
          <th className="year">Year</th>
        </tr>
      </thead>
      <tbody className="table-body">
        {props.movies.map(movie => (
          <tr key={movie.title}>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td className="year-data">{movie.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


export default MovieList;
