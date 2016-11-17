class MovieView extends React.Component {
  render(){
    return(
      <div className='container'>
        <ul className='list-group text-center'>
        {
          this.props.movies.map((movie, i) => {
            return <Movie movie={movie} key={i} />
            })
        }
        </ul>
      </div>
    )
  }
}
