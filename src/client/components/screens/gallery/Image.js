import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '100%',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'inline-flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
})

const Image = ({ width, height, src }) => (
  <div
    style={{ width, height, backgroundImage: `url("${src}")`, }}
    className={styles()}
  >
    <div>
      <img
        src='/images/hashtag.png'
        style={{
          display: 'block', 
          height: height * 0.33,
          marginBottom: height * 0.02,
        }}
      />
    </div>
    <div>
      <img
        src='/images/logo.png'
        style={{
          display: 'block', 
          height: height * 0.2,
          marginBottom: height * 0.04,
        }}
      />
    </div>
  </div>
)

export default Image
