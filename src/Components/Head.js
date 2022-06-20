import React from 'react'
import { Link, NavLink  } from 'react-router-dom'
import SeachInput from './SeachInput'
import styles from './Styles/Head.module.css'


const Head = () => {
  const url = 'https://api.themoviedb.org/3/search/movie?api_'
  const key = 'YourKey'
  const language = 'pt-BR'
  const [text, setText] = React.useState('')
  const [info, setInfo] = React.useState(null)


  React.useEffect(()=>{
  async function searchFilms(){
    if(text){
    setInfo(null)
    let response = await fetch(`${url}key=${key}&language=${language}&query=${text}`)
    let json = await response.json()
    setInfo(json.results)
    }
}
searchFilms()
  }, [text])


  function selectMovie(){
    setText('')
  }


  if(info !== null){
  if (info.length > 5) {
    info.length = 5;
  }

  
  }
  return (
    <header className={styles.header}>
      <div>
        <Link to='/'><h1 className={styles.title}>SeachFilms</h1></Link>
        <Link to='/'><h1 className={styles.titleMobile}>SF</h1></Link>
      </div>

        <ul className={styles.menu}>
            <li> <NavLink className={styles.menuItem} to={'/'}>Inicio</NavLink> </li>
            <li> <NavLink className={styles.menuItem} to={'/latest'}> Lançamentos</NavLink> </li>
            <li> 
              <SeachInput selectMovie={selectMovie} input={text} resultados={info} value={text} onChange={(search)=>setText(search)}/>
            </li>
        </ul>
    </header>
  )
}

export default Head