import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
let API_KEY = 'AIzaSyB3nRBM5KuOYW9q94ZVOd8redUcGSuAFKY';

YTSearch({key: API_KEY, term: 'jordan peterson'}, data => {
  console.dir(data);
})

class App extends React.Component {
   render() {
     return (
       <div>
         <SearchBar />

       </div>
     )
   } 
}

ReactDOM.render(<App />, document.querySelector('#root'));