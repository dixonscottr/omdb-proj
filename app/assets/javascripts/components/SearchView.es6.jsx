class SearchView extends React.Component {

  handleChange(event){
    event.preventDefault();
    var searchTerms = this.refs.searchTerms.value;
    var url = 'http://www.omdbapi.com/?s=' + searchTerms
    $.ajax({
      url: url,
      method: 'get'
    }).done(function(response){
      this.props.onUpdate(response.Search);
    }.bind(this));
  }

  render() {
    return(
        <div className='container'>
          <form className="form-inline" onChange={this.handleChange.bind(this)}>
            <div className="form-group">
              <label htmlFor="search-terms">Search by keyword:</label>
              <input ref='searchTerms' type="text" className="form-control" id="search-terms" placeholder="Ex: Mother may I sleep with Danger?" />
            </div>
          </form>
          <a href='/' className='btn btn-info btn-xs'>New Search</a>
        </div>
        )
  }
}
