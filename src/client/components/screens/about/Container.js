import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'row'
  }
})

const Container = ({ children }) => (
  <div className={styles()}>
    {children}
  </div>
)

export default Container
