import React , { Component } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";


class Home extends Component {
  state = {
    isLoading: true,
    movies: []
  };
  // state의 초기값을 정의 
  
  getMovies = async () => {
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating"); 
    this.setState({movies, isLoading: false})
  };

  componentDidMount() {
   this.getMovies();
  }

  
  render() { 
    // App.js에서 최종적으로 보여지는 render값 정의
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? ( 
          <div className="loader">
            <span className="loder__text">Loading..</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                // key={movie.id}
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />  
            ))}             
          </div>  
        )}  
      </section>
    );
  }
}

export default Home;