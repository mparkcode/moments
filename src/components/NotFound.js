import React from 'react'
import NoResults from '../assets/no-results.png'
import styles from '../styles/NotFound.module.css'
import Asset from './Asset'

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
        <Asset src={NoResults} message="Sorry, the page you're looing for doesn't exist"></Asset>
    </div>
  )
}

export default NotFound