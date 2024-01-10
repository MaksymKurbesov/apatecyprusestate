import React, { ReactNode } from 'react'
import styles from '../../Shared UI/Modal/Modal.module.scss'
import Modal from '../../Shared UI/Modal/Modal'
import SuccessIcon from '../../assets/images/success-modal.webp'
import { NavLink } from 'react-router-dom'

interface ISuccessModal {
  closeHandler: () => void
  modalStatus: boolean
  children: ReactNode
  toTransactionButton?: any
}

const SuccessModal = ({
  closeHandler,
  modalStatus,
  children,
  toTransactionButton
}: ISuccessModal) => {
  return (
    <Modal handleClose={closeHandler} isOpen={modalStatus}>
      <img
        className={styles['img']}
        src={SuccessIcon}
        width={200}
        height={200}
        alt={'modal status'}
      />
      {children}
      <div className={'buttons'}>
        {toTransactionButton && (
          <NavLink to={'/profile/transactions'}>
            <button onClick={closeHandler} className={'button close-button'}>
              Транзакции
            </button>
          </NavLink>
        )}
        <NavLink to={'/profile/personal-area'}>
          <button onClick={closeHandler} className={'button'}>
            В кабинет
          </button>
        </NavLink>
      </div>
    </Modal>
  )
}

export default SuccessModal
