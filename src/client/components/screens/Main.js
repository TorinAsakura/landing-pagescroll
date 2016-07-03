import React, { Component } from 'react'
import { StyleSheet } from 'quantum'
import Toggle from './main/menu/Toggle'
import Play from './main/video/Play'
import NextPage from '../NextPage'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/images/main2.jpg")',
    backgroundPosition: '50% 100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

class Main extends Component {
  render() {
    const { width, height, onNext, onShowMenu, onShowVideo } = this.props

    return (
      <div style={{ width, height }} className={styles()}>
        <Toggle onClick={onShowMenu} />
        <div>
          <img src='/images/logo.png' style={{ height: height * 0.24, display: 'block', marginTop: height * 0.04 }}/>
        </div>
        <div>
          <img src='/images/hashtag.png' style={{ height: height * 0.27, display: 'block', marginTop: height * 0.025 }}/>
        </div>
        <div>
          <Play onClick={onShowVideo} />
        </div>
        <NextPage onClick={onNext} />
      </div>
    )
  }
}

export default Main
