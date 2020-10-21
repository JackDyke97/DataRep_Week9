import React from 'react';
import { Movies } from './movies';

//Read component called in the app

export class Read extends React.Component {
    //state object to hold data associated with the component
    state = {
//our array that hold all the movie info
        movies: [
            { "Title": "Avengers: Infinity War", "Year": "2018", "imdbID": "tt4154756", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg" },
            { "Title": "Captain America: Civil War", "Year": "2016", "imdbID": "tt3498820", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg" },
            { "Title": "Charlie Wilson's War", "Year": "2007", "imdbID": "tt0472062", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg" },
            ,]
    };
//our return function to call the movie component
    render() {
        return (
            <div>
                <h3>Hello from read Component.</h3>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}