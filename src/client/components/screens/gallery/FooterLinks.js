import React from 'react'
import { StyleSheet } from 'quantum'
import VK from './icons/VK'
import Fb from './icons/Fb'
import Instagram from './icons/Instagram'
import Youtube from './icons/Youtube'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    padding: ' 10px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderTop: '1px solid #000',
    borderBottom: '1px solid #000',
  },
})

const FooterLinks = () => (
  <div className={styles()}>
    <a href='https://vk.com/club124295446' target='_blank'>
      <VK />
    </a>
    <a href='https://www.facebook.com/narodnayasbornaya' target='_blank'>
      <Fb />
    </a>
    <a href='https://www.instagram.com/narodnaya_sbornaya/' target='_blank'>
      <Instagram />
    </a>
    <a href='https://www.youtube.com/channel/UCrZakqou5TL5JgHYWuguQKg' target='_blank'>
      <Youtube />
    </a>
  </div>
)

export default FooterLinks
