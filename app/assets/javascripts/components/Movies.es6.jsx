class Movie extends React.Component {
  render(){
    var movie = this.props.movie
    var imdbLink = "http://www.imdb.com/title/" + movie.imdbID
    var poster = movie.Poster;
    $.ajax({
      url: movie.Poster,
      method: 'get'
    }).done(function(){
    }).fail(function(){
      poster = "http://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/256/Status-image-missing-icon.png"
    })
    return(
      <li className="list-group-item">
        <div className="card">
          <img className="card-img-top .img-rounded animated infinite pulse" src={poster} alt={movie.Title} />
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
