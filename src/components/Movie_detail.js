import React , { Component } from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class Movie_detail extends Component {  
    
    constructor(props) {
        super(props);
        console.log(props);
    }

    // class  형 컴포넌트, 함수형 컴포넌트  stete 설정 방법 찾아보기 !
    // state= {
    //     year:this.props.year,
    //     title:this.props.title,
    //     description:this.props.description,
    //     poster:this.props.poster,
    //     genres:this.props.genres

    // }



    render() {

        const {id,title, year, description,poster, genres} = this.props;  // destructuring  할당 
        
        return (
            <Link to={{
                pathname:"/Detail",
                state: {
                    id:id,
                    year:year,
                    title:title,
                    description:description,
                    poster:poster,
                    genres:genres
                }
            }}>
                <div className="movie">
                    <img src={poster} alt={title} title={title} />
                    <div className="movie__data">
                        <h3 className="movie__title">{title}</h3>
                        <h5 className="movie__year">{year}</h5>
                        <ul className="genres">{genres}</ul>
                        <p className="movie__description">{description}</p>
                    </div> 
                </div>    
            </Link>   
        );
    }
}

Movie_detail.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};


export default Movie_detail;