import React from 'react';
import './App.css';
import MovieThumbnails from './MovieThumbnails';
import MovieDetails from './MovieDetails';

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      movies: []
    }

    this.loadMovies = this.loadMovies.bind(this);
  }

  componentDidMount()
  {
    this.loadMovies();
  }

  loadMovies()
  {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
    .then(response => {
      return response.json();
    })
    .then(jsonData => {
        console.log(jsonData);
        this.setState({movies: jsonData.results})
    });
  }

  render() {

    return (
      
      <div className="BodyContainer">
          <MovieThumbnails moviesarray={this.state.movies}/>
          <MovieDetails moviesarray={this.state.movies}/>
      </div>
    );
  }
}
export default App;
