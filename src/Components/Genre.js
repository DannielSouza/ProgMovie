import React from 'react'
import {Link, useParams} from 'react-router-dom'
import styles from "./Styles/Home.module.css";

const Genre = () => {
  
    const { id } = useParams()
    const { name } = useParams()
    const key = 'YourKey'
    const language = 'pt-BR'
    const imagePath = "https://image.tmdb.org/t/p/w500/";
    const [movies, setMovies] = React.useState(null)
    const [page, setPage] = React.useState(1);
  

    React.useEffect(()=>{

        async function getFilm(){ 
          const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=${language}&with_genres=${id}&page=${page}`)
          const json = await response.json()
          setMovies(json.results)
          window.scrollTo(0,0)
        }
      
        getFilm()
    
      },[id, page])
  

      function prevPage() {
        if (page > 1) setPage(page - 1);
        else setPage(1);
      }
    
      function nextPage() {
        if (page < 500) {
          setPage(page + 1);
        }
      }

    if(movies === null) return <div className='loading'></div>
    else return (

    <>

    <h1 className={styles.genreTitle}>{name}</h1>
        
    <ul className={styles.movieList}>
        {movies.map((movie)=> <li className={styles.movie} key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`${imagePath}${movie.poster_path}`}
                  alt={movie.title}
                  />
              </Link>
              <span>{movie.title}</span>
            </li>
            )}
    </ul>


    <div className={styles.pagenationContainer}>
        {page > 1 ? (
          <button id="pagenationButtonL" className={`${styles.pagenationButton} ${styles.pagenationButtonL}`} onClick={prevPage}>
            Anterior
          </button>
        ) : (
          <button disabled className={`${styles.pagenationButton} ${styles.pagenationButtonL}`}>
            Anterior
          </button>
        )}
        <span className={styles.pagenation}>{page}</span>
        {page < 500 ? (
          <button className={`${styles.pagenationButton} ${styles.pagenationButtonR}`} onClick={nextPage}>
            Próxima
          </button>
        ) : (
          <button disabled className={`${styles.pagenationButton} ${styles.pagenationButtonR}`}>
            Próxima
          </button>
        )}
      </div>


    </>
  )
}

export default Genre