import React,{useEffect, useState} from 'react';
import './Card.css';
import {Link} from 'react-router-dom';
import {ThreeDot} from 'react-loading-indicators';
const Card = ({movie}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>
  {
    setTimeout(() =>
    {
      setIsLoading(false);
    },1500)
  },[]);


  return (
   <>

    {isLoading 
    ?
    <div className='cards'>
    <ThreeDot variant="bounce" color="#f3cd7a" size="medium"  textColor="#fffd8f" />
    </div>
    :
    <Link to ={`/movie/${movie?movie.id:""}`} style={{textDecoration: "none" ,color: "#FFFFFF"}}>
    <div className='cards'>
    <img src={`https://image.tmdb.org/t/p/original/${movie?movie.poster_path:""}`}></img>
    <div className='cards-overlay'>
    <div className='cards-title'>{movie ? movie.original_title :""}</div>
    <div className='cards-runtime'>
      {movie? movie.release_date:""}
    <span className='cards-rating'>{movie? movie.vote_average:""} <i className="fas fa-star" style={{ color: "#ffe2a9", marginLeft: "5px" }}></i></span>
    <div className='cards-description'>{movie? movie.overview.slice(0,118)+"...": ""}</div>
    </div>
    </div>
    </div>
    </Link>
}
   </>
  )
}

export default Card;