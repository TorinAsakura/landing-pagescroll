import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    top: '30px',
    right: '40px',
    width: '30px',
    cursor: 'pointer',
    '& div': {
      height: '2px',
      marginBottom: '10px',
      background: '#d2a700',
      borderRadius: '1px',
    },
    '&:hover': {
      '& div': {
        opacity: 0.7,
      },
    },
  },
})

const Toggle = ({ onClick }) => (
  <div
    className={styles()}
    onClick={onClick}
  >
    <div />
    <div />
    <div />
  </div>
)

export default Toggle
