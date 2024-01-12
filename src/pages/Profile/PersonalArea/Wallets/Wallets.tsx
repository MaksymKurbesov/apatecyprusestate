import React, { FC, useRef } from 'react'
import styles from './Wallets.module.scss'
import Wallet from './Wallet/Wallet'
import Slider from 'react-slick'
import { ReactComponent as Chevron } from '../../../../assets/SVG/chevron-down.svg'
import { useWindowSize } from '../../../../hooks/useWindowSize'
import {
  getCorrectWallets,
  sortWalletsByAvailable
} from '../../../../utils/helpers'
import { IWallet, IWallets } from '../../../../@types/IWallets'

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1500,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
}

interface IWalletsProps {
  wallets: IWallets
}

const Wallets: FC<IWalletsProps> = ({ wallets }) => {
  const sliderRef = useRef<any>()
  const windowSize = useWindowSize()

  const userWallets = getCorrectWallets(wallets)

  const sortedUserWallets = sortWalletsByAvailable(userWallets)

  return (
    <div className={styles['wallets']}>
      <Slider ref={sliderRef} {...settings}>
        {sortedUserWallets.map((userWallet: IWallet) => {
          return <Wallet wallet={userWallet} />
        })}
      </Slider>
      {windowSize > 480 ? (
        <>
          <button
            className={styles['slick-arrow-prev']}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <Chevron />
          </button>
          <button
            className={styles['slick-arrow-next']}
            onClick={() => sliderRef.current.slickNext()}
          >
            <Chevron />
          </button>
        </>
      ) : null}
    </div>
  )
}

export default Wallets
