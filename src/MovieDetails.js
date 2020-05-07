import React from 'react';
import './App.css';

class MovieDetails extends React.Component
{
    constructor(props) {
        super(props);


        this.makeMovieThumbnail = this.makeMovieThumbnail.bind(this);
    }


    makeMovieThumbnail (movie) {
      const moviePath = "https://image.tmdb.org/t/p/original/" + movie.poster_path;
      return (
      <div>
        <img src={moviePath} className="thumbnail"  />
      </div>
      );
    }

    render() {
        console.log(this.props.moviesarray)
        let displayMovies = [];
        displayMovies = this.props.moviesarray.map(this.makeMovieThumbnail);

        return(
            <div className="DetailsContainer">
                {displayMovies}
            </div>
            
        );
    };
}
export default MovieDetails;