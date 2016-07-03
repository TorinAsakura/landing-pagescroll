import React, { Component } from 'react'
import { StyleSheet } from 'quantum'
import NextPage from '../../NextPage'
import Form from './Form'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/images/request.jpg")',
    backgroundPosition: '100% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'row',
  },
})

class Request extends Component {
  render() {
    const { width, height, onNext } = this.props

    return (
      <div style={{ width, height }} className={styles()}>
        <Form />
        <NextPage onClick={onNext} />
      </div>
    )
  }
}

export default Request
