import React from 'react';
import Card from 'react-bootstrap/Card';


export class MovieItem extends React.Component {
//Card function that calls title, year and poster from our movie array
//this allows us to call it to movies.js which sends it to our read.js
    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200" ></img>
                            <footer className="blockquote-footer">
                                <p>{this.props.movie.Year}</p>
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>


            </div>
        );
    }
}