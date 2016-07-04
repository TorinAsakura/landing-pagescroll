import React, { Component } from 'react'
import { StyleSheet } from 'quantum'
import Title from './Title'
import Submit from './Submit'
import Field, { FileField } from './Field'
import LicenseField from './license/LicenseField'
import validate from './utils/validate'

const styles = StyleSheet.create({
  self: {
    display: 'flex',
    flexBasis: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class Form extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      fields: {
        fullName: '',
        age: '',
        position: '',
        email: '',
        video: null,
      },
      complete: {},
      canSubmit: false,
      licenseConfirmed: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.fields !== this.state.fields) {
      const complete = validate(this.state.fields)

      this.setState({
        complete,
        canSubmit: Object.keys(complete).length == 6,
      })
    }
  }

  onChangeConfirm = () => {
    const { fields } = this.state

    this.setState({ fields: { ...fields, licenseConfirmed: !fields.licenseConfirmed } })
  }

  onChangeFullName = value => {
    const { fields } = this.state

    this.setState({ fields: { ...fields, fullName: value } })
  }

  onChangeAge = value => {
    const { fields } = this.state

    const parsed = parseInt(value, 10)

    this.setState({ fields: { ...fields, age: isNaN(parsed) ? value : parsed } })
  }

  onChangePosition = value => {
    const { fields } = this.state

    this.setState({ fields: { ...fields, position: value } })
  }

  onChangeEmail = value => {
    const { fields } = this.state

    this.setState({ fields: { ...fields, email: value } })
  }

  onChangeVideo = value => {
    const { fields } = this.state

    this.setState({ fields: { ...fields, video: value[0] } })
  }

  onSubmit = async () => {
    const { fields } = this.state

    const form = new FormData()

    Object.keys(fields).forEach(field => form.append(field, fields[field]))

    this.setState({ canSubmit: false })

    const response = await fetch('/request', { method: 'POST', body: form })

    if (response.ok) {
      this.setState({
        fields: {
          fullName: '',
          age: '',
          position: '',
          email: '',
          video: null,
        },
        complete: {},
      })
    } else {
      this.setState({ canSubmit: true })
    }
  }

  render() {
    const { onShowLicense } = this.props
    const { fullName, age, position, email, video, licenseConfirmed } = this.state.fields
    const { complete, canSubmit } = this.state

    return (
      <div className={styles()}>
        <div>
          <Title />
          <Field
            value={fullName}
            placeholder='Ф.И.О.'
            complete={complete.fullName}
            onChange={this.onChangeFullName}
          />
          <Field
            value={age}
            placeholder='возраст'
            complete={complete.age}
            onChange={this.onChangeAge}
          />
          <Field
            value={position}
            placeholder='позиция на поле'
            complete={complete.position}
            onChange={this.onChangePosition}
          />
          <Field
            value={email}
            placeholder='e-mail'
            complete={complete.email}
            onChange={this.onChangeEmail}
          />
          <FileField
            value={video}
            complete={complete.video}
            placeholder='ссылка на видео профиль'
            onChange={this.onChangeVideo}
          />
          <Submit
            disabled={!canSubmit}
            onClick={this.onSubmit}
          />
          <LicenseField
            confirmed={licenseConfirmed}
            onConfirm={this.onChangeConfirm}
            onShow={onShowLicense}
          />
        </div>
      </div>
    )
  }
}

export default Form
