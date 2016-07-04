import React, { Component } from 'react'
import { StyleSheet } from 'quantum'
import NextPage from '../../NextPage'
import License from './license/License'
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
    overflow: 'hidden',
  },
})

class Request extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      showLicense: false,
    }
  }

  onShowLicense = () => {
    this.setState({ showLicense: true })
  }

  onCloseLicense = () => {
    this.setState({ showLicense: false })
  }

  renderLicense() {
    const { showLicense } = this.state

    if (!showLicense) {
      return null
    }

    return (
      <License
        onClose={this.onCloseLicense}
      />
    )
  }

  render() {
    const { width, height, onNext } = this.props

    return (
      <div style={{ width, height }} className={styles()}>
        {this.renderLicense()}
        <Form onShowLicense={this.onShowLicense} />
        <NextPage onClick={onNext} />
      </div>
    )
  }
}

export default Request
