import React from 'react'
import ReactPlayer from 'react-player'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    
  },
})

const Player = () => (
  <ReactPlayer
    playing
    controls
    width='100%'
    height='100%'
    className={styles()}
    url='https://www.youtube.com/watch?v=kRqcTR0tdHA'
  />
)

export default Player
