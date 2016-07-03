import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    fontFamily: 'Turum2',
    color: '#d2a700',
    fontSize: '72px',
    lineHeight: '48px',
    textAlign: 'right',
    verticalAlign: 'top',
  },
})

const Title = () => (
  <div className={styles()}>
    <div>
      ФУТБОЛ
    </div>
    <div>
      ИЗМЕНИТЬ
    </div>
    <div>
      ПОСИЛАМ ТЕБЕ
    </div>
  </div>
)

export default Title
