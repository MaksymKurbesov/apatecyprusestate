import React, { FC, useEffect, useState } from 'react'
import Language from '../../Language/Language'
import { ReactComponent as Logo } from '../../../assets/SVG/logo2.svg'
import UserInfo from '../../UserInfo/UserInfo'
import styles from './Header.module.scss'
import ProfileMenuItem from '../ProfileMenu/ProfileMenuItem/ProfileMenuItem'
import { Link, useLocation, useOutletContext } from 'react-router-dom'
import { getActiveMenuItem } from '../../../utils/helpers'
import { useWindowSize } from '../../../hooks/useWindowSize'
import Hamburger from '../../Hamburger/Hamburger'
import MobileMenu from '../MobileMenu/MobileMenu'
import { useTranslation } from 'react-i18next'
import { Ranks } from '../../../utils/PERCENTAGES_BY_RANK'
import { IActiveMenuItem } from '../../../@types/IMenu'

const isDesktopMenu = (rank: Ranks) => {
  return (
    <div className={styles['settings']}>
      <Language />
      <UserInfo rank={rank} />
    </div>
  )
}

const isMobileMenu = (menuStatus: boolean, setIsMenuOpenHandler: any) => {
  return (
    <div className={styles['settings']}>
      <Hamburger
        menuStatus={menuStatus}
        openMenuHandler={() => {
          if (!menuStatus) {
            document.body.style.overflow = 'hidden'
          } else {
            document.body.style.overflow = 'visible'
          }
          setIsMenuOpenHandler(!menuStatus)
        }}
      />
    </div>
  )
}

interface IHeaderProps {
  rank: Ranks
}

const Header: FC<IHeaderProps> = ({ rank }) => {
  const { t } = useTranslation()
  const location = useLocation()
  const [activeMenuItem, setActiveMenuItem] = useState<IActiveMenuItem>()
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const windowSize = useWindowSize()
  const isDesktop = windowSize > 1024

  useEffect(() => {
    setActiveMenuItem(getActiveMenuItem(location.pathname))

    setIsMenuOpen(false)
    // document.body.style.overflow = "visible";

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [location.pathname])

  return (
    <header className={styles['header']}>
      <Link to={'/'} className={styles['logotype']}>
        <Logo />
      </Link>

      {isDesktop ? (
        <div className={styles['current-page']}>
          <ProfileMenuItem
            // title={t(`menu.${activeMenuItem?.path}`)}
            title={'test'}
            icon={activeMenuItem?.icon}
            isHeader
          />
        </div>
      ) : null}

      {isDesktop
        ? isDesktopMenu(rank)
        : isMobileMenu(isMenuOpen, setIsMenuOpen)}
      <MobileMenu menuStatus={isMenuOpen} />
    </header>
  )
}

export default Header
