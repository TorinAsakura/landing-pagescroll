import React from 'react'
import { StyleSheet } from 'quantum'
import Close from './video/Close'
import Player from './video/Player'

const styles = StyleSheet.create({
  self: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 9,
    color: 'white',
    background: '#000',
  },
})

const Video = ({ width, height, onClose }) => (
  <div
    className={styles()}
    style={{ width, height }}
  >
    <Close onClick={onClose} />
    <Player />
  </div>
)

export default Video
