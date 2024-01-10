import React from 'react'
import Title from '../../../Shared UI/Title/Title'
import { ReactComponent as VerticalRoadmap } from '../../../assets/images/vertical-roadmap-last.svg'
import { ReactComponent as RoadmapBackground } from '../../../assets/images/roadmap.svg'
import styles from './Roadmap.module.scss'
import { useWindowSize } from '../../../hooks/useWindowSize'
import { useTranslation } from 'react-i18next'

const STEPS = [
  {
    date: '2019 Q1-Q4',
    description:
      'Заключение стратегических партнерств и подготовка к первому большому проекту с архитекторами, инженерами и поставщиками материалов.'
  },
  {
    date: '2020 Q1-Q4',
    description:
      'Начало строительства первого флагманского проекта и осуществление рекламных кампаний для привлечения потенциальных инвесторов.'
  },
  {
    date: '2021 Q1-Q2',
    description:
      'Завершение строительства первого проекта и его успешное введение в эксплуатацию. Привлечение первых инвесторов.'
  },
  {
    date: '2021 Q3-Q4',
    description:
      'Начало разработки идеи для следующего инновационного проекта. Расширение команды для обеспечения более масштабных задач.'
  },
  {
    date: '2022 Q1-Q4',
    description:
      'Запуск строительства второго проекта с акцентом на устойчивость и инновации. Расширение строительной базы и использование современных методов управления проектами.'
  },
  {
    date: '2023 Q1-Q4',
    description:
      'Продолжение второго проекта и завершение работ по диверсификации. Аудит для оптимизации внутренних процессов.'
  },
  {
    date: '2024 Q1-Q2',
    description:
      'Внедрение усовершенствованных методов управления проектами для обеспечения эффективности и качества. Запуск международной партнерской программы.'
  },
  {
    date: '2024 Q3-Q4',
    description:
      'Завершение строительства второго проекта и его успешное введение в эксплуатацию. Внедрение новых технологий и подходов для устойчивого роста.'
  }
]

const Roadmap = () => {
  const { t } = useTranslation()
  const windowSize = useWindowSize()

  return (
    <div className={styles['roadmap']}>
      <Title align="center" text={'Apate Cyprus Estate Roadmap'} />
      <p data-aos={'fade-down'} className={styles['subtitle']}>
        {t('roadmap.subtitle')}
      </p>
      <div className={styles['roadmap-wrapper']}>
        {windowSize > 1024 ? (
          <RoadmapBackground width={'100%'} />
        ) : (
          <VerticalRoadmap className={styles['vertical-roadmap']} />
        )}

        {STEPS.map(({ date, description }, index) => {
          return (
            <div
              data-aos={windowSize > 1024 && 'fade-in'}
              data-aos-delay={200 * index}
              key={index}
              className={styles['step']}
            >
              <span>{windowSize <= 480 ? date : index + 1}</span>
              <div className={styles['step-info']}>
                {windowSize > 480 && <h3>{date}</h3>}
                <p>{t(`roadmap.${index + 1}`)}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Roadmap
