import React , { Component } from "react";
import axios from "axios";
import Moviedetail from "../components/Movie_detail";
// import { render } from "@testing-library/react";


class Detail extends Component {
  state = {
    isLoading: true,
    movie: []
  };
  // state의 초기값을 정의 
  constructor(props) {
    super(props);
    console.log(props, props.match.params)
  };
  
  getMovies = async () => {
    const {
      data: {
        data: {movie}
      }
    } = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=10`); 
    this.setState({movie, isLoading: false})
  };
  componentDidMount() {
   this.getMovies();
  }

  
  render() { 
    // App.js에서 최종적으로 보여지는 render값 정의
    const { isLoading, movie } = this.state;
    return (
      <section className="container">
        {
          isLoading ? ( 
            <div className="loader">
              <span className="loder__text">Loading..</span>
            </div>
          ) : (
            <div className="movie">
              <Moviedetail 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                description={movie.description_full} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            </div>  
          )
        }  
      </section>
    );
  }
}

export default Detail;