import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    color: '#d2a700',
    fontSize: '48px',
    fontFamily: 'Turum2',
  },
  small: {
    fontSize: '28px',
    lineHeight: '14px',
    marginBottom: '15px',
  }
})

const Title = ({ small, children }) => {
  if (small) {
    return (
      <div className={styles({ small })}>
        {children}
      </div>
    )
  }

  return (
    <div className={styles()}>
      &ndash; {children} &ndash;
    </div>
  )
}

export default Title
