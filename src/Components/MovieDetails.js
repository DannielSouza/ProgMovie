import React from 'react'
import styles from './Styles/MovieDetails.module.css'
import noPicture from '../images/noPicture.jpg'
import { Link } from 'react-router-dom'

const MovieDetails = ({title, desc, poster, generos, subtitle}) => {



if(generos === undefined) return <div className='loading'></div>
  return (
    <>
    <div className={styles.container}>
        <div>
            <img src={poster == null? noPicture : poster} alt="" />
        </div>

        <div className={styles.descContainer}>
            <div>
                <h2 className={styles.title} >{title}</h2>
                <p className={styles.subTitle} >{subtitle}</p>
                <p className={styles.desc} >{desc}</p>
            </div>
            <div className={styles.generosContainer} >
             {generos.map(genero => <Link to={`/genre/${genero.id}/${genero.name}`} className={styles.generoItem} key={genero.id} >{genero.name}</Link>)}
            </div>
        </div>
        
    </div>



    


    </>
  )
}

export default MovieDetails