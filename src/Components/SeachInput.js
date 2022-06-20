import React from "react";
import styles from './Styles/SeachInput.module.css'
import useDebounce from "./useDebounce";
import { Link } from "react-router-dom";
import noPicture from '../images/noPicture.jpg'

const SeachInput = ({value, onChange, resultados, input, selectMovie}) => {

  const [displayValue, setDisplayValue] = React.useState(value)
  const debouncedChange = useDebounce(onChange, 500)

    function handleChange(event){
      setDisplayValue(event.target.value)
      debouncedChange(event.target.value)
    }

    
    

  return (
    <>
    <form onSubmit={(event)=>{event.preventDefault()}} className={styles.form}>
      <input
        className={styles.search}
        type="search"
        placeholder="Pesquisar"
        value={displayValue}
        onChange={handleChange}
      />
    </form>

        {input && resultados &&(
            <ul className={styles.container} >
                {resultados.map(resultado =>
                    <Link onClick={selectMovie} to={`/details/${resultado.id}`} className={styles.item} key={resultado.id} >
                    <img src={resultado.poster_path===null? noPicture : `https://image.tmdb.org/t/p/w500/${resultado.poster_path}`} alt={resultado.title}/>  
                    <p>{resultado.title}</p>
                    </Link>
                    
                )}
            </ul>)
        }

    </>
  );
};

export default SeachInput;

