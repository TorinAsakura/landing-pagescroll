import React from 'react'
import { StyleSheet } from 'quantum'
import Title from './Title'
import Content from './Content'

const styles = StyleSheet.create({
  self: {
    color: '#ffffff',
    fontSize: '20px',
    fontFamily: 'Turum2',
    maxWidth: '650px',
    textAlign: 'center',
    margin: '10px 0',
  },
  squeeze: {
    maxWidth: 'initial',
    margin: '5px 0',
    fontSize: '18px',
  }
})

const Step = ({ title, subtitle, squeeze, children }) => (
  <div className={styles({ squeeze })}>
    <Title squeeze={squeeze}>
      {title}
    </Title>
    {subtitle ? (
      <Title small squeeze={squeeze}>
        {subtitle}
      </Title>
    ): null}
    <Content>
      {children}
    </Content>
  </div>
)

export default Step
