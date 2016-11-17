class SearchView extends React.Component {

  render() {
    return(
      <div>
        <SearchByKeyWord onUpdate={this.props.onUpdate} />
      </div>
        )
  }
}
