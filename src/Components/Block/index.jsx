import React from 'react'
import styles from './Style.module.scss'

export default function Block({color, title, text, image}) {
  return (
    <div className={styles.ContainerBlock} style={{borderTop: `4px solid ${color}`}}>
        <h1>{title}</h1>
        <p>{text}</p>
        <img src={image} alt="test" />
    </div>
  )
}
