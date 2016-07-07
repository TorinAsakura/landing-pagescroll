import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    letterSpacing: '2px',
    fontSize: '30px',
  },
})

const Content = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default Content
