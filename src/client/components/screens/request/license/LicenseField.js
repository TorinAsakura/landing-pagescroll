import React from 'react'
import { StyleSheet } from 'quantum'
import Check from './Check'

const styles = StyleSheet.create({
  self: {
    fontFamily: 'Turum2',
    fontSize: '24px',
    color: '#a9a9a9',
    display: 'inline-flex',
    alignItems: 'center',
    '& span:last-child': {
      marginLeft: '15px',
    },
    '& a': {
      color: '#d2a700',
      textDecoration: 'none',
      position: 'relative',
      cursor: 'pointer',
      '&:before': {
        content: '" "',
        position: 'absolute',
        height: '1px',
        width: '100%',
        bottom: '0px',
        background: '#d2a700',
      },
      '&:hover': {
        opacity: 0.8,
      },
    },
  },
})

const LicenseField = ({ confirmed, onConfirm, onShow }) => (
  <div className={styles()}>
    <Check
      confirmed={confirmed}
      onConfirm={onConfirm}
    />
    <span>
      Я согласен с <a onClick={onShow}>правилами участия в проекте</a>
    </span>
  </div>
)

export default LicenseField
