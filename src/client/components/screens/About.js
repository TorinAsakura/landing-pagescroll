import React, { Component } from 'react'
import { StyleSheet } from 'quantum'
import Content from './about/Content'
import NextPage from '../NextPage'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/images/about.jpg")',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
})

class About extends Component {
  render() {
    const { width, height, onNext } = this.props

    return (
      <div style={{ width, height }} className={styles()}>
        <Content />
        <NextPage onClick={onNext} />
      </div>
    )
  }
}

export default About
