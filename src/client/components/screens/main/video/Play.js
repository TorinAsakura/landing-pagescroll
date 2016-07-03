import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    marginTop: '40px',
    '& img': {
      width: '50px',
      cursor: 'pointer',
    },
    '&:hover': {
      '& img': {
        opacity: 0.7,
      },
    },
  },
})

const Play = ({ onClick }) => (
  <div
    className={styles()}
    onClick={onClick}
  >
    <img src='/images/play.png' />
  </div>
)

export default Play
