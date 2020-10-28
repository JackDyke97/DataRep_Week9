import React from 'react';
import { Movies } from './movies';
import axios from 'axios';
//Read component called in the app

export class Read extends React.Component {
    //state object to hold data associated with the component
    state = {
        //our array that hold all the movie info
        movies: []
    };
//this method gets executed and uses axios to retrieve data from json
//setting it equal to the movies array and using it to display the json data
//have an error function that will catch any errors
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then(
                (response) => {
                    this.setState({ movies: response.data.Search })
                }
            )
            .catch(
                (error) => { console.log(error) }
            );
    }

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