import React, { FC } from 'react'
import { useTimer } from '../../hooks/useTimer'
import styles from './Countdown.module.scss'

interface ICountdownProps {
  deadline: any
}

const Countdown: FC<ICountdownProps> = ({ deadline }) => {
  const { hours, minutes, seconds } = useTimer(new Date(deadline))

  if (seconds <= 0 && minutes <= 0 && hours <= 0) {
    return <p>Готово!</p>
  }

  return (
    <div className={styles['timer']}>
      <div className={styles['hours']}>
        {/*<span>{hours < 10 ? `0${hours[0]}` : hours}</span>*/}
      </div>
      <span>:</span>
      <div className={styles['minutes']}>
        {/*<span>{minutes < 10 ? `0${minutes[0]}` : minutes}</span>*/}
      </div>
      <span>:</span>
      <div className={styles['seconds']}>
        {/*<span>{seconds < 10 ? `0${seconds[0]}` : seconds}</span>*/}
      </div>
    </div>
  )
}

export default Countdown
