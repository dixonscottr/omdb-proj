class Movie extends React.Component {
  render(){
    var movie = this.props.movie
    var imdbLink = "http://www.imdb.com/title/" + movie.imdbID
    return(
      <li className="list-group-item">
        <div className="card">
          <img className="card-img-top .img-rounded animated infinite pulse" src={movie.Poster} alt={movie.Title} />
          <div className="card-block">
            <h4 className="card-title">{movie.Title}</h4>
            <p className="card-text">Year: {movie.Year}</p>
            <a href={imdbLink} target="_blank" className="btn btn-primary">IMDB</a>
          </div>
        </div>
      </li>
      )
  }
}
