import React from "react";
import { Link } from "react-router-dom";
import styles from "./Styles/Home.module.css";

function Home() {
  const [movies, setMovies] = React.useState([]);
  const key = "YourKey";
  const language = "pt-BR";
  const imagePath = "https://image.tmdb.org/t/p/w500/";
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    async function getFilms() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${page}`
      );
      const json = await response.json();
      setMovies(json.results);
      window.scrollTo(0,0)
    }

    getFilms();
  }, [page]);

  function prevPage() {
    if (page > 1) setPage(page - 1);
    else setPage(1);
  }

  function nextPage() {
    if (page < 500) {
      setPage(page + 1);
    }
  }


  return (
    <>
      

      <ul className={styles.movieList}>
        {movies.map((movie) => {
          return (
            <li className={styles.movie} key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img
                  src={`${imagePath}${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
              <span>{movie.title}</span>
            </li>
          );
        })}
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
  );
}

export default Home;
