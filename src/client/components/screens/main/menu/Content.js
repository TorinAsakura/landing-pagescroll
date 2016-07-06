import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '& a': {
      color: '#fffffft',
      fontFamily: 'Turum2',
      fontWeight: 'bold',
      fontSize: '72px',
      cursor: 'pointer',
      '&:hover': {
        color: '#d2a700',
      },
    },
  },
})

const Content = ({ onRequest, onSteps, onAbout }) => (
  <div className={styles()}>
    <a onClick={onAbout}>
      НАРОДНАЯ СБОРНАЯ
    </a>
    <a onClick={onSteps}>
      ЭТАПЫ ПРОЕКТА
    </a>
    <a onClick={onRequest}>
      ОТПРАВИТЬ ЗАЯВКУ
    </a>
  </div>
)

export default Content
