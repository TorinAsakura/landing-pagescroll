import React, { Component } from 'react'
import { StyleSheet } from 'quantum'
import Title from './Title'
import Submit from './Submit'
import Field from './Field'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexBasis: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class Form extends Component {
  render() {
    return (
      <div className={styles()}>
        <div>
          <Title />
          <Field
            placeholder='Ф.И.О.'
          />
          <Field
            placeholder='возраст'
          />
          <Field
            placeholder='позиция на поле'
          />
          <Field
            placeholder='e-mail'
          />
          <Field
            placeholder='ссылка на видео профиль'
          />
          <Submit />
        </div>
      </div>
    )
  }
}

export default Form
