import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Styles/Home.module.css'
import noPicture from '../images/noPicture.jpg'

const Latest = () => {

    const [movies, setMovies] = React.useState([])
    const key = 'YourKey'
    const language = 'pt-BR'
    const imagePath = 'https://image.tmdb.org/t/p/w500/'
  
  React.useEffect(()=>{
  
    async function getFilms(){ 
  
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=${language}&region=BR`)
        const json = await response.json()
      setMovies(json.results)
    }
  
    getFilms()
  },[])





  return (
    <ul className={styles.movieList}>


        {movies.map(movie => {
          return(
          <li className={styles.movie} key={movie.id}>
            <Link to={`/details/${movie.id}`}>
              <img src={movie.poster_path ? `${imagePath}${movie.poster_path}`: `${noPicture}`} alt={movie.title} />
            </Link>
            <span>{movie.title}</span>
          </li>)
        })}

      </ul>
  )
}

export default Latest