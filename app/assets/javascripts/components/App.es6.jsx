class App extends React.Component {
  constructor () {
    super();
    this.state = {
      movies: []
    }
    this.showMovies = this.showMovies.bind(this);
  }
  showMovies(movieResults) {
    this.setState({
      movies: movieResults
    })
  }
  render() {
    return(
      <div>
        <div className='container'>
          <SearchView onUpdate={this.showMovies} />
        </div>
        <MovieView movies={this.state.movies}/>
      </div>
      )
  }
}
