import React, { FC } from 'react'
import SectionLabel from '../../Shared UI/SectionLabel/SectionLabel'
import Title from '../../Shared UI/Title/Title'
import styles from './FaqPage.module.scss'
import Accordion from '../../components/Accordion/Accordion'
import { ScrollRestoration } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { normalizeKey } from '../../utils/helpers'

const QUESTIONS_COUNT = 17

export const FaqPage: FC = () => {
  const { t } = useTranslation('faq')
  const QUESTIONS = []

  for (let i = 1; i <= QUESTIONS_COUNT; i++) {
    QUESTIONS.push({
      title: t(normalizeKey(`${i}.question`)),
      content: t(normalizeKey(`${i}.answer`))
    })
  }

  return (
    <div className={styles['faq-page']}>
      <SectionLabel text={`FAQ'S`} style={{ marginBottom: 20 }} />
      <Title align={'center'} text={t('title')} style={{ marginBottom: 20 }} />
      <p className={styles['subtitle']}>{t('description')}</p>
      <div className={styles['accordion-wrapper']}>
        <Accordion data={QUESTIONS} className={'isFaq'} />
      </div>
      <ScrollRestoration />
    </div>
  )
}
