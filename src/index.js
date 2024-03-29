import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoDetail from './components/video_detail/index.js';
import VideoList from './components/video_list/index.js';

let API_KEY = 'AIzaSyB3nRBM5KuOYW9q94ZVOd8redUcGSuAFKY';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    })
  }

  render() {
    const videoSearchDebounce = _.debounce(term => {
      return this.videoSearch(term)
    }, 1000);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearchDebounce} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));