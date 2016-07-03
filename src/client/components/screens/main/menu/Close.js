import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    top: '30px',
    right: '40px',
    cursor: 'pointer',
    '& img': {
      width: '30px',
    },
  },
})

const Close = ({ onClick }) => (
  <div className={styles()} onClick={onClick}>
    <img src='/images/close.png' />
  </div>
)

export default Close
