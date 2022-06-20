import React from 'react'
import styles from './Styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.container}>
        <span className={styles.credits}>
            Feito por Daniel Souza
        </span>
    </footer>
  )
}

export default Footer