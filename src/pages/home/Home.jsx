import React,{useEffect, useState} from 'react';
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movielist/MovieList';

const Home = () => {

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(()=>{
   const fetchData = async() =>
    {
      const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US');
      const data = await res.json();
      setPopularMovies(data.results);
    }; 
    fetchData();
  },[]);

  return (
    <>
    <Carousel
    showThumbs ={false}
    autoPlay ={true}
    transitionTime={3}
    infiniteLoop ={true}
    showStatus ={false}
    >
      {popularMovies.map(movie => (
        <Link style ={{textDecoration:"none",color:"#ffe2a9"}} to={`/movie/${movie.id}`}>
        <div className='movie-image'>
          <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`}></img>
        </div>
        <div className='movie-overlay'>
          <div className='movie-title'>{movie ? movie.original_title : ""}</div>
          <div className='movie-runtime'>
          {movie ? movie.release_date: ""}
          <span className='movie-rating'>{movie ?movie.vote_average : ""}
          <i className="fas fa-star" style={{ color: "#ffe2a9", marginLeft: "5px" }}></i>
          </span>
          <div className="movie-desciption">{movie ? movie.overview : ""}</div>
          </div>
        </div>
        </Link>
      ))}
      
    </Carousel>
    <MovieList />
    </>
  )
}

export default Home;