import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
        {this.state.term}
      </div>

    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;