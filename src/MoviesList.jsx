import React, { useState } from 'react';

const MoviesList = () => {
    // Initialize state with a list of movies
    const [movies, setMovies] = useState([
        { title: "Inception", genre: "Thriller", description: "A skilled thief, who can enter people's dreams and steal their secrets, is given a chance to have his criminal history erased if he can implant another person's idea into a target's subconscious.", showDetails: false },
        { title: "The Shawshank Redemption", genre: "Drama", description: "Wrongly convicted of murder, a banker forms an unlikely friendship with a fellow inmate and devises a plan to escape from the notorious Shawshank prison.", showDetails: false },
        { title: "The Dark Knight", genre: "Action", description: "Batman faces his greatest challenge yet when the Joker unleashes chaos and destruction on Gotham City, forcing the caped crusader to confront his own limits and morals.", showDetails: false }
    ]);

    // Function to toggle the 'showDetails' property of a movie
    function toggleDetails(index) {
        const newMovies = movies.map(function(movie, i) {
            if (i === index) {
                movie.showDetails = !movie.showDetails;
            }
            return movie;
        });
        setMovies(newMovies);
    }

    // Function to remove a movie from the list
    function removeMovie(index) {
        const newMovies = movies.filter(function(movie, i) {
            return i !== index;
        });
        setMovies(newMovies);
    }

    return (
        <div>
            <ul>
                {movies.map(function(movie, index) {
                    return (
                        <li key={index}>
                            <span onClick={function() { toggleDetails(index); }}>
                                {movie.title}
                            </span>
                            <button onClick={function() { removeMovie(index); }}>
                                Remove
                            </button>
                            {movie.showDetails ? <p>{movie.description}</p> : null}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MoviesList;





   
    // {/* movies.map ((movie,index) => (<li key={index}>{movie.title} </li>)) */}
    
    
    // {/* -> button to remove the movie from the list */}
    
    // </ul> 

    // {/* Section for selected movie card-where you give extra details about movie  */}
    // <div className="card">

    // {/* title */}
    // {/* genre */}

    // {/* title-if you click on button it toggles the details */}
    // {/* Conditionall display more details if showDetails = true - ternary operator */}
    // {/* or you can show detail button to toggle showDetails */}

    // </div>