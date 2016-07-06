import React from 'react'
import { StyleSheet } from 'quantum'
import Title from './Title'

const styles = StyleSheet.create({
  self: {
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Turum2',
    maxWidth: '650px',
    textAlign: 'center',
    margin: '10px 0',
  },
})

const Step = ({ title, subtitle, children }) => (
  <div className={styles()}>
    <Title>
      {title}
    </Title>
    {subtitle ? (
      <Title small>
        {subtitle}
      </Title>
    ): null}
    {children}
  </div>
)

export default Step
