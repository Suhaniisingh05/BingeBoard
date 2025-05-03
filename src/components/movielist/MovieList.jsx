import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './MovieList.css';
import Card from '../card/Card.jsx';

const MovieList = () => {

  const[movieList, SetMovieList] = useState([]);
  const {type} = useParams();

  useEffect(()=>{
    getData();
  },[]);

  useEffect(()=>{
    getData();
  },[type]);

  const getData = async() =>
  {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${type ? type: "popular"}?api_key=1d5b28d07c181dfc993f8dbba9a05231&language=en-US`);
    const data = await res.json();
    SetMovieList(data.results );
  }

  return (
 <div className='movie-list'> 
  <h2 className='list-title'>{(type ? type: "POPULAR").toUpperCase()}</h2>
  <div className='list-cards'>
    
  {
    movieList.map(movie => (
    <Card movie={movie} />
  ))}
  </div>
  </div> 
  )
}

export default MovieList;
