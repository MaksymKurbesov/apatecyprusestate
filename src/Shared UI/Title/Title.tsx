import React, { CSSProperties } from 'react'
import styles from './Title.module.scss'

interface ITitle {
  text: string
  align?: string
  style?: CSSProperties
}

const Title = ({ text, align = 'left', style }: ITitle) => {
  return (
    <h2
      data-aos={'fade-right'}
      style={style}
      className={`${styles['title']} ${styles[align]}`}
    >
      {text}
    </h2>
  )
}

export default Title
