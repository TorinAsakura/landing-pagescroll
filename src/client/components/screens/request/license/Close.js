import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    top: '20px',
    right: '30px',
    cursor: 'pointer',
    '& img': {
      width: '25px',
    },
  },
})

const Close = ({ onClick }) => (
  <div className={styles()} onClick={onClick}>
    <img src='/images/close-black.png' />
  </div>
)

export default Close
