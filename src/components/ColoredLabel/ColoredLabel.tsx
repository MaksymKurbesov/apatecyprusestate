import React, { FC } from 'react'
import styles from './ColoredLabel.module.scss'
import { LABEL_COLORS } from '../../utils/consts'

interface IColoredLabel {
  text: string
}

const ColoredLabel: FC<IColoredLabel> = ({ text }) => {
  return (
    <div className={`${styles['label']} ${styles[LABEL_COLORS[text]]}`}>
      {text}
    </div>
  )
}

export default ColoredLabel
