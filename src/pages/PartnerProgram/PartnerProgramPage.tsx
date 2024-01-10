import React, { FC } from 'react'
import styles from './PartnerProgramPage.module.scss'
import Main from './Main/Main'
import WhatIs from './WhatIs/WhatIs'
import HowDoesItWork from './HowDoesItWork/HowDoesItWork'
import HowToGetStarted from './HowToGetStarted/HowToGetStarted'
import { ScrollRestoration } from 'react-router-dom'
import Structure from './Structure/Structure'

export const PartnerProgramPage: FC = () => {
  return (
    <div className={styles['partner-program']}>
      <Main />
      <WhatIs />
      <Structure />
      <HowDoesItWork />
      <HowToGetStarted />
      <ScrollRestoration />
    </div>
  )
}
