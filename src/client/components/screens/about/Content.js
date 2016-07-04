import React from 'react'
import { StyleSheet } from 'quantum'
import Title from './Title'
import Summary from './Summary'
import Container from './Container'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  }
})

const Content = () => (
  <div className={styles()}>
    <Container>
      <Title />
      <Summary />
    </Container>
  </div>
)

export default Content
