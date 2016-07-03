import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    color: '#d2a700',
    fontSize: '48px',
    fontFamily: 'Turum2',
  },
})

const Title = ({ children }) => (
  <div className={styles()}>
    &ndash; {children} &ndash;
  </div>
)

export default Title
