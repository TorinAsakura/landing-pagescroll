import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    position: 'absolute',
    top: '-200px',
    left: '50%',
    marginLeft: '-200px',
    width: '350px',
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '30px 40px',
    boxSizing: 'borderBox',
    textAlign: 'center',
    fontFamily: 'Turum2',
    fontSize: '28px',
    transition: 'all 500ms ease',
  },
  show: {
    top: '100px',
  },
})

const Message = ({ children }) => (
  <div className={styles({ show: children })}>
    {children}
  </div>
)

export default Message
