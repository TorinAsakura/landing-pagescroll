import React, { Component } from 'react'
import { StyleSheet } from 'quantum'
import Images from './Images'
import Footer from './Footer'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
})

class Gallery extends Component {
  static defaultProps = {
    interval: 5000,
    images: [
      '/images/gallery1.jpg',
      '/images/gallery2.jpg',
      '/images/gallery3.jpg',
    ],
    footerHeight: 150,
  }

  constructor(props, context) {
    super(props, context)

    this.intervalId = null

    this.state = {
      active: 0,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.props.active) {
      if (nextProps.active) {
        this.startInterval()
      } else {
        this.stopInterval()
      }
    }
  }

  startInterval() {
    const { interval } = this.props

    this.intervalId = setInterval(this.onChange, interval)
  }

  stopInterval() {
    if (this.intervalId) {
      clearInterval(this.intervalId)
    }
  }

  onChange = () => {
    const { images } = this.props
    const { active } = this.state

    this.setState({
      active: (images.length - 1) === active ? 0 : active + 1,
    })
  }

  render() {
    const { width, height, images, footerHeight } = this.props
    const { active } = this.state

    return (
      <div style={{ width, height }} className={styles()}>
        <Images
          width={width}
          height={height - footerHeight}
          images={images}
          active={active}
        />
        <Footer
          height={footerHeight}
        />
      </div>
    )
  }
}

export default Gallery
