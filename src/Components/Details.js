import React from 'react'
import {useParams} from 'react-router-dom'
import MovieDetails from './MovieDetails'

const Details = () => {
  const { id } = useParams()
  const [ movie, setMovie] = React.useState({})
  const key = 'YourKey'
  const language = 'pt-BR'
  const imagePath = 'https://image.tmdb.org/t/p/w500/'


  React.useEffect(()=>{

    async function getFilm(){ 
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${language}`)
      const json = await response.json()
      setMovie(json)
    }
  
    getFilm()

  },[id])


if(movie === {}) return <div className='loading'></div>
  return (
    <MovieDetails
    title={movie.title}
    subtitle={movie.tagline}
    desc={movie.overview}
    poster={movie.poster_path===null? null : imagePath + movie.poster_path}
    generos={movie.genres}
    
    />
  )
}

export default Details