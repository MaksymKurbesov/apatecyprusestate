import React, { FC, useEffect, useState } from 'react'
import ExitIcon from '../../assets/SVG/quit.svg'
import styles from './UserInfo.module.scss'
import { logout } from '../../Api/Auth'
import { NavLink, useNavigate, useOutletContext } from 'react-router-dom'
import AvatarPlaceholder from '../../assets/images/avatar-placeholder.jpg'
import { ReactComponent as DefaultStatus } from '../../assets/SVG/referral status/default.svg'
import { SPONSOR_NAME_MAP } from '../../utils/consts'
import { getAuth } from 'firebase/auth'
import { useAuthState } from '../../hooks/useAuthState'
import { auth } from '../../index'
import { Ranks } from '../../utils/PERCENTAGES_BY_RANK'

interface IUserInfoProps {
  rank: Ranks
}

const UserInfo: FC<IUserInfoProps> = ({ rank }) => {
  const navigate = useNavigate()
  const [userAvatar, setUserAvatar] = useState('')
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    if (user.photoURL) {
      setUserAvatar(user.photoURL)
    } else {
      setUserAvatar(AvatarPlaceholder)
    }
  }, [])

  return (
    <div className={`${styles['user-info']}`}>
      <img
        onClick={() => navigate('settings')}
        className={styles['avatar']}
        src={userAvatar}
        width={42}
        height={42}
        alt={'User Avatar'}
      />
      <span className={styles['username']}>
        <NavLink
          to={'/profile/referrals'}
          className={styles['referral-status-icon']}
        >
          <img src={SPONSOR_NAME_MAP[rank]?.icon} alt={''} width={25} />
        </NavLink>
        {user.displayName}
      </span>
      <img
        onClick={() => logout()}
        className={styles['exit-icon']}
        src={ExitIcon}
        alt={'Exit Icon'}
        width={22}
        height={22}
      />
    </div>
  )
}

export default UserInfo
