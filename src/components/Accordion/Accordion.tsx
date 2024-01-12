import React, { FC } from 'react'
import AccordionItem from './AccordionItem/AccordionItem'
import style from './Accordion.module.scss'

export interface IAccordionData {
  title: any
  content: any
}

export interface IAccordionProps {
  data: IAccordionData[]
  className: string
}

const Accordion: FC<IAccordionProps> = ({ data, className }) => {
  return (
    <ul className={style['accordion']}>
      {data.map(({ title, content }, index) => {
        return (
          <AccordionItem
            title={title}
            content={content}
            key={index}
            className={className}
            index={index}
          />
        )
      })}
    </ul>
  )
}

export default Accordion
