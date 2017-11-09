import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list/index.js';

let API_KEY = 'AIzaSyB3nRBM5KuOYW9q94ZVOd8redUcGSuAFKY';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({ key: API_KEY, term: 'jordan peterson' }, videos => {
      this.setState({ videos });
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));