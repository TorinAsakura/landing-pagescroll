import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    maxWidth: '500px',
    fontFamily: 'Turum2',
    fontSize: '24px',
    marginTop: '4px',
    marginBottom: '30px',
    color: '#ffffff',
    '& a': {
      color: '#ffffff',
      textDecoration: 'none',
      '&:hover': {
        opacity: 0.8,
      },
    },
    '& div': {
      marginTop: '10px',
      color: '#d2a700',
    },
  },
})

const Description = () => (
  <div className={styles()}>
    Задача простая: покажи, как ты обращаешься с мячом. Попроси своего друга снять, как ты выполняешь наше тестовое задание. 
    Пример задания ты найдешь здесь. <a href='https://www.youtube.com/watch?v=IDqQiXfGagk' target='_blank'>(ссылка на видео на нашем YouTube канале)</a>
    <div>
      ВАЖНО! Съемка, должна быть непрерывной, одним кадром, без пауз и монтажа! Удачи!
    </div>
  </div>
)

export default Description
