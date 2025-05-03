import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Movie.css';

const Movie = () => {

  const [currentMovie, setCurrentMovie] = useState(); // Fixed casing
  const { id } = useParams();

  useEffect(() => {
    document.body.style.backgroundColor = "black";
    getData();
    window.scrollTo(0, 0);

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const getData = async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1d5b28d07c181dfc993f8dbba9a05231&language=en-US`);
    const data = await res.json();
    setCurrentMovie(data);
  };

  return (
    <div className='movie'>
      <div className='movie-intro'>
        <img className='movie-backdrop' alt="backdrop" src={`https://image.tmdb.org/t/p/original${currentMovie ? currentMovie.backdrop_path : ""}`} />
      </div>
      <div className='movie-detail'>
        <div className='movie-detailLeft'>
          <div className='movie-posterbox'>
            <img className='movie-poster' alt="poster" src={`https://image.tmdb.org/t/p/original${currentMovie ? currentMovie.poster_path : ""}`} />
          </div>
        </div>
        <div className='movie-detailRight'>
          <div className='movie-detailRightTop'>
            <div className='movie-name'>{currentMovie?.original_title || ""}</div>
            <div className='movie_tagline'>{currentMovie?.tagline || ""}</div>
            <div className='movie-rating'>
              {currentMovie?.vote_average || ""} <i className="fas fa-star" style={{ color: "#ffe2a9", marginLeft: "5px" }}></i>
              <span className='movie-voteCount'>{currentMovie ? `(${currentMovie.vote_count})` : ""}</span>
            </div>
            <div className='movie-runtime'>{currentMovie ? currentMovie.runtime + " mins" : ""}</div>
            <div className='movie-releaseDate'>{currentMovie ? "Release Date: " + currentMovie.release_date : ""}</div>
            <div className='movie-genres'>
              {
                currentMovie?.genres?.map(genre => (
                  <span className='movie-genre' id={genre.id} key={genre.id}>{genre.name}</span>
                ))
              }
            </div>
          </div>
          <div className='movie-detailRightBottom'>
            <div className='synopsisText'>Synopsis</div>
            <div>{currentMovie?.overview || ""}</div>
          </div>
        </div>
      </div>

      <div className='movie-links'>
        <div className='movie_heading'> Useful Links </div>
        {
          currentMovie?.homepage &&
          <a href={currentMovie.homepage} target='_blank' rel="noreferrer" style={{ textDecoration: "none" }}>
            <p>
              <span className='movie-homeButton movie-Button'>Homepage <i className="newTab fas fa-external-link-alt" style={{ color: "white" , marginLeft:"0.5rem"}}></i></span>
            </p>
          </a>
        }
        {
          currentMovie?.imdb_id &&
          <a href={"https://www.imdb.com/title/" + currentMovie.imdb_id} target='_blank' rel="noreferrer" style={{ textDecoration: "none" }}>
            <p>
              <span className='movie-imdbButton movie-Button'>IMDb <i className="newTab fas fa-external-link-alt" style={{ color: "#ED6044" , marginLeft:"0.5rem" }}></i></span>
            </p>
          </a>
        }
      </div>
      <div className='movie-heading'> Production companies</div>
      <div className='movie-production'>
        {
          currentMovie?.production_companies?.map(company => (
            company.logo_path && (
              <span className='productionCompanyImage' key={company.id}>
                <img className='movie-productionCompany' alt={company.name} src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                <span>{company.name}</span>
              </span>
            )
          ))
        }
      </div>
    </div>
  );
}

export default Movie;
