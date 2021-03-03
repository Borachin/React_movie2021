import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";
  
class Movie extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
    }

    // class  형 컴포넌트, 함수형 컴포넌트  stete 설정 방법 찾아보기 !
    state = {
        year: this.props.year,
        title: this.props.title,
        summary: this.props.summary,
        poster: this.props.poster,
        genres: this.props.genres

    }



    render() {
        const { id, title, year, summary, poster, genres } = this.props;  // destructuring  할당 
        console.log(id);
        return (
            <Link to={{
                pathname: `/Detail`
            }}
            params={{ key: 'hello' }}
            >
            <img src={poster} alt={title} title={title} />
                <div className="movie">
                    <div className="movie__data">
                        <h3 className="movie__title">{title}</h3>
                        <h5 className="movie__year">{this.state.year}</h5>
                        <ul className="genres">
                            {genres.map((genres, index) => (
                                <li key={index} className="genres__genre">{genres}</li>
                            ))}
                        </ul>
                        <p className="movie__summary">{summary.slice(0, 140)}...</p>
                    </div>
                </div>
            </Link>
        );
    }
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};


export default Movie;