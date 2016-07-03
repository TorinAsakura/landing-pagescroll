import React from 'react'
import { StyleSheet } from 'quantum'
import Image from './Image'

const styles = StyleSheet.create({
  self: {
    
  },
})

const Images = ({ width, height, images = [], active = 0 }) => (
  <div
    className={styles()}
    style={{
      height,
      width: width * images.length,
      transform: `translate3d(-${active * width}px, 0px, 0px)`,
      transition: 'all 700ms ease',
    }}
  >
    {images.map((image, index) => (
      <Image
        key={index}
        width={width}
        height={height}
        src={image}
      />
    ))}
  </div>
)

export default Images
