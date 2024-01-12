import React, { CSSProperties, FC } from 'react'
import styles from './Button.module.scss'
import { NavLink } from 'react-router-dom'

interface IButtonProps {
  text: string
  isLink: boolean
  to: string
  style: CSSProperties
  handler: () => void
}

const Button: FC<IButtonProps> = ({ text, isLink, to, style, handler }) => {
  return isLink ? (
    <NavLink to={to}>
      <button onClick={handler} className={styles['button']} style={style}>
        {text}
      </button>
    </NavLink>
  ) : (
    <button onClick={handler} className={styles['button']} style={style}>
      {text}
    </button>
  )
}

export default Button
