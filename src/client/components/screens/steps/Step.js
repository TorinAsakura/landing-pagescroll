import React from 'react'
import { StyleSheet } from 'quantum'
import Title from './Title'

const styles = StyleSheet.create({
  self: {
    color: '#ffffff',
    fontSize: '28px',
    fontFamily: 'Turum2',
    maxWidth: '255px',
    textAlign: 'center',
    margin: '30px 0',
  },
})

const Step = ({ number, children }) => (
  <div className={styles()}>
    <Title>
      {number}
    </Title>
    {children}
  </div>
)

export default Step
