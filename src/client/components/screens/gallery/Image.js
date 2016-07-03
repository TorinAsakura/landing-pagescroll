import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '100%',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
  },
})

const Image = ({ width, height, src }) => (
  <div
    style={{ width, height, backgroundImage: `url("${src}")`, }}
    className={styles()}
  />
)

export default Image
