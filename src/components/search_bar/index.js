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
          onChange={event => this.setState({ term: event.target.value })} 
          />
        value of input: {this.state.term}
      </div>

    )
  }
}

export default SearchBar;