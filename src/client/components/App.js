import React, { Component } from 'react'
import Main from './screens/Main'
import Menu from './screens/main/Menu'
import Video from './screens/main/Video'
import About from './screens/About'
import Steps from './screens/Steps'
import Request from './screens/request/Request'
import Gallery from './screens/gallery/Gallery'
import Screens from './screens/Screens'

class App extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      active: 0,
      showMenu: false,
      showVideo: false,
    }
  }

  componentWillMount() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  onResize = () => {
    const width = window.innerWidth
                  || document.documentElement.clientWidth
                  || document.body.clientWidth

    const height = window.innerHeight
                  || document.documentElement.clientHeight
                  || document.body.clientHeight

    this.setState({ width, height })
  }

  onPrev = () => {
    const { active } = this.state

    this.setState({ active: active - 1 })
  }

  onNext = () => {
    const { active } = this.state

    this.setState({ active: active + 1 })
  }

  onShowMenu = () => {
    this.setState({ showMenu: true })
  }

  onCloseMenu = () => {
    this.setState({ showMenu: false })
  }

  onShowVideo = () => {
    this.setState({ showVideo: true })
  }

  onCloseVideo = () => {
    this.setState({ showVideo: false })
  }

  onSupport = () => {
    this.setState({
      showMenu: false,
    }, () => {
      this.setState({ active: 2 })
    })
  }

  onRequest = () => {
    this.setState({
      showMenu: false,
    }, () => {
      this.setState({ active: 3 })
    })
  }

  renderMenu() {
    const { width, height, showMenu } = this.state

    if (!showMenu) {
      return null
    }

    return (
      <Menu
        width={width}
        height={height}
        onSupport={this.onSupport}
        onRequest={this.onRequest}
        onClose={this.onCloseMenu}
      />
    )
  }

  renderVideo() {
    const { width, height, showVideo } = this.state

    if (!showVideo) {
      return null
    }

    return (
      <Video
        width={width}
        height={height}
        onClose={this.onCloseVideo}
      />
    )
  }

  render() {
    const { width, height, active } = this.state

    return (
      <div style={{ height: '100%', overflow: 'hidden', WebkitOverflowScrolling: 'touch' }}>
        {this.renderMenu()}
        {this.renderVideo()}
        <Screens
          height={height}
          active={active}
          onPrev={this.onPrev}
          onNext={this.onNext}
        >
            <Main
              width={width}
              height={height}
              onNext={this.onNext}
              onShowMenu={this.onShowMenu}
              onShowVideo={this.onShowVideo}
            />
            <About
              width={width}
              height={height}
              onNext={this.onNext}
            />
            <Steps
              width={width}
              height={height}
              onNext={this.onNext}
            />
            <Request
              width={width}
              height={height}
              onNext={this.onNext}
            />
            <Gallery
              width={width}
              height={height}
            />
        </Screens>
      </div>
    )
  }
}

export default App
