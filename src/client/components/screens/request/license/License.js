import React from 'react'
import { StyleSheet } from 'quantum'
import Content from './Content'

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const License = ({ onClose }) => (
  <div className={styles()}>
    <Content onClose={onClose} />
  </div>
)

export default License
