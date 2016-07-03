import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    fontFamily: 'Turum2',
    fontSize: '32px',
    color: '#ffffff',
    marginLeft: '10px',
    paddingLeft: '10px',
    borderLeft: '1px solid #ffffff',
    maxWidth: '200px',
  },
})

const Summary = () => (
  <div className={styles()}>
    Многие думают, что Футбола в России нет. Мы же собираемся доказать обратное и найти самых талантливых игроков страны.
  </div>
)

export default Summary
