import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    fontFamily: 'Turum2',
    fontWeight: 'bold',
    color: '#797979',
    fontSize: '72px',
    marginBottom: '10px',
  },
})

const Title = () => (
  <div className={styles()}>
    ФОРМА ЗАЯВКИ
  </div>
)

export default Title
