import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    display: 'block',
    fontFamily: 'Turum2',
    fontSize: '32px',
    marginTop: '4px',
    marginBottom: '40px',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#ffffff',
    '&:hover': {
      color: '#d2a700',
    },
  },
})

const Examples = () => (
  <a
    target='_blank'
    className={styles()}
    href='https://www.youtube.com/channel/UCrZakqou5TL5JgHYWuguQKg'
  >
    ПРИМЕРЫ ЗАЯВОК
  </a>
)

export default Examples
