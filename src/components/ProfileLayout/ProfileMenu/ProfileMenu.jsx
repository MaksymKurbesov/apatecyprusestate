import React, { useEffect, useState } from 'react'
import { ReactComponent as Settings } from '../../../assets/SVG/menu icons/settings.svg'
import { ReactComponent as Instagram } from '../../../assets/SVG/instagram.svg'
import { ReactComponent as Youtube } from '../../../assets/SVG/youtube.svg'
import { ReactComponent as Telegram } from '../../../assets/SVG/telegram.svg'

import styles from './ProfileMenu.module.scss'
import { NavLink } from 'react-router-dom'
import ProfileMenuItem from './ProfileMenuItem/ProfileMenuItem'
import { useTranslation } from 'react-i18next'
import { MENU_ITEMS } from '../../../utils/consts'

const ProfileMenu = ({ userData }) => {
  const [menu, setMenu] = useState(MENU_ITEMS)
  const { t } = useTranslation()

  useEffect(() => {
    if (userData.isAdmin) {
      setMenu((prevState) => [
        ...prevState,
        {
          title: 'Admin',
          icon: <Settings />,
          path: 'admin'
        }
      ])
    }
  }, [])

  return (
    <nav className={`${styles['menu-list']} custom-bg custom-border`}>
      <ul>
        {menu.map(({ title, icon, path }) => {
          return (
            <li className={styles['link']} key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? styles['active'] : '')}
              >
                <ProfileMenuItem icon={icon} title={t(`menu.${path}`)} />
              </NavLink>
            </li>
          )
        })}
      </ul>
      <ul className={styles['social-links']}>
        <li>
          <Instagram />
        </li>
        <li>
          <Youtube />
        </li>
        <li>
          <Telegram />
        </li>
      </ul>
    </nav>
  )
}

export default ProfileMenu
