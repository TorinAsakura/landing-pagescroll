import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    display: 'block',
    fontFamily: 'Turum2',
    color: '#d2a700',
    fontSize: '36px',
    marginTop: '20px',
    marginBottom: '40px',
  },
})

const Submit = () => (
  <a className={styles()}>
    ОТПРАВИТЬ
  </a>
)

export default Submit
