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
  'width=middle': {
    backgroundPosition: '50% 50%',
  },
  'width=small': {
    backgroundPosition: '50% 50%',
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

  getWidthMod(width) {
    if (width < 740) {
      return 'small'
    }

    if (width < 1000) {
      return 'middle'
    }

    return null
  }

  getHeightMod(height) {
    if (height < 450) {
      return 'small'
    }

    if (height < 1000) {
      return 'middle'
    }

    return
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
    const widthMod = this.getWidthMod(width)
    const heightMod = this.getHeightMod(height)

    return (
      <div
        style={{ width, height }}
        className={styles({ width: widthMod, height: heightMod, })}
      >
        {this.renderLicense()}
        <Form
          size={heightMod}
          onShowLicense={this.onShowLicense}
        />
        <NextPage onClick={onNext} />
      </div>
    )
  }
}

export default Request
