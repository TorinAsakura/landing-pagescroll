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
        <div style={{ marginBottom: 60 }}>
          <Step number='НАША ЦЕЛЬ'>
            отобрать из всей России самых талантливых и неудержимых футболистов, которые докажут, что достойны играть на профессиональном уровне и получат свою путевку в большой футбол.  Помогут нам в этом не только футбольные эксперты и профессионалы, но и каждый неравнодушный поклонник футбола.
          </Step>
          <Step number={1}>
            Пройди первый барьер. Любишь футбол? Докажи это - заставь себя выйти из зоны комфорта, поверь в свои способности и подай видео-заявку, чтобы принять участие в дальнейшем отборе.Среди всех заявок с помощью народного интернет-голосования и усилиями экспертной команды селекционеров будут отобраны 300 лучших кандидатов.
          </Step>
          <Step number={2}>
            Докажи, что можешь. Теперь тебе предстоит доказать независимым футбольным экспертам, что ты способен на большее. К выбранным 300 участникам, приедут команды скаутов, чтобы  более детально оценить их навыки и потенциал и отобрать 30 самых талантливых участников. Это шанс заявить о себе! Наш скаут-тур по регионам будет смотреть вся страна через специально организованные интернет репортажи. 
          </Step>
          <Step number={3}>
            Будь лучшим, будь в основе! Совершенствуйся каждый день, чтобы оставаться в Народной Сборной.  30 футболистов приедут в Москву, чтобы на протяжении полугода жить и тренироваться по распорядку, принятому в клубах высшей лиги. С финалистами проекта будут работать профессиональные тренеры и психологи. Ежедневные репортажи позволят всем желающим следить за профессиональным развитием своих фаворитов. Но нужно постоянно проявлять самоотдачу, ведь каждые две недели кто-то из Народной Сборной может покинуть команду…
          </Step>
          <Step number={4}>
            Лето 2017. Момент истины.
            <br />
            Твое будущее ждет тебя на поле! Народная Сборная сыграет ряд публичных матчей и примет вызов от любой профессиональной команды. Народная Сборная докажет, что талант, страсть и желание #игратьлучше - это все , что нужно, чтобы быть в профессиональном футболе.
          </Step>
        </div>
        <NextPage onClick={onNext} />
      </div>
    )
  }
}

export default Steps
