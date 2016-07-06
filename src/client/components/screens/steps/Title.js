import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    color: '#d2a700',
    fontSize: '48px',
    fontFamily: 'Turum2',
  },
  squeeze: {
    fontSize: '32px',
  },
  small: {
    fontSize: '28px',
    lineHeight: '14px',
    marginBottom: '15px',
  },
})

const Title = ({ small, squeeze, children }) => {
  if (small) {
    return (
      <div className={styles({ small })}>
        {children}
      </div>
    )
  }

  return (
    <div className={styles({ squeeze })}>
      &ndash; {children} &ndash;
    </div>
  )
}

export default Title
