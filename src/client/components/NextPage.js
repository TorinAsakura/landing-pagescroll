import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
    textAlign: 'center',
    paddingBottom: '30px',
    '& img': {
      width: '40px',
      cursor: 'pointer',
      '&:hover': {
        opacity: 0.7,
      },
    },
  },
})

const NextPage = ({ onClick }) => (
  <div className={styles()}>
    <img
      src='/images/next-page.png'
      onClick={onClick}
    />
  </div>
)

export default NextPage
