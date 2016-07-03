import React, { Component } from 'react'
import { StyleSheet } from 'quantum'
import NextPage from '../NextPage'
import Step from './steps/Step'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/images/steps.jpg")',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class Steps extends Component {
  render() {
    const { width, height, onNext } = this.props

    return (
      <div style={{ width, height }} className={styles()}>
        <div>
          <Step number={1}>
            Открытый прием заявок в ходе которого путем профессионального и народного голосования будут отобраны 300 претендентов
          </Step>
          <Step number={2}>
            Команда селекционеров отправится в разные города, чтобы отобрать лучших талантов со всей страны
          </Step>
          <Step number={3}>
            Команда в составе 30 человек отправится на базу для тренировок с командой профессионалов
          </Step>
          <Step number={4}>
            Чтобы доказать уровень, Народная Сборная сыграет товарищеские матчи с профессиональными клубами, а также открыто предложит провести матч со сборной России по футболу
          </Step>
        </div>
        <NextPage onClick={onNext} />
      </div>
    )
  }
}

export default Steps
