import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    display: 'block',
    maxWidth: '225px',
    '& input': {
      background: 'transparent',
      borderWidth: '0px',
      borderBottom: '1px solid #797979',
      borderRadius: '0px',
      paddingBottom: '2px',
      paddingLeft: '0px',
      display: 'block',
      marginBottom: '10px',
      outline: 'none',
      fontFamily: 'Turum2',
      fontSize: '32px',
      color: '#a9a9a9',
      minWidth: '210px',
      '&:focus': {
        borderBottomColor: '#d2a700',
        color: '#ffffff',
      },
      '&::-webkit-input-placeholder': {
        color: '#797979',
      },
      '&::-moz-placeholder': {
        color: '#797979',
      },
      '&:-ms-input-placeholder': {
        color: '#797979',
      },
    },
  },
  'type=file': {
    '& input': {
      cursor: 'pointer',
    },
  },
})

const Complete = () => (
  <svg
    width='22px'
    fill='#d2a700'
    viewBox='0 0 24 24'
    style={{ position: 'absolute', right: -20, top: 8 }}
  >
    <g>
      <path
        d='M21 5q0.43 0 0.715 0.285t0.285 0.715q0 0.422-0.289 0.711l-12 12q-0.289 0.289-0.711
          0.289t-0.711-0.289l-6-6q-0.289-0.289-0.289-0.711 0-0.43 0.285-0.715t0.715-0.285q0.422
          0 0.711 0.289l5.289 5.297 11.289-11.297q0.289-0.289 0.711-0.289z'
      />
    </g>
  </svg>
)

const Field = ({ type, value, placeholder, complete, onChange = f => f }) => (
  <span className={styles({ type })}>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={({ target }) => onChange(target.value)}
    />
    {complete ? <Complete /> : null}
  </span>
)

class FileField extends Component {
  onTrigger = () => {
    findDOMNode(this.refs.fileInput).click()
  }

  onChange = ({ target }) => {
    const { onChange } = this.props

    if (onChange) {
      onChange(target.files)
    }
  }

  getFileName() {
    const { value = {} } = this.props

    return value && value.name ? value.name : ''
  }

  render() {
    const { placeholder, complete } = this.props

    return (
      <span className={styles({ type: 'file' })}>
        <input
          readOnly
          placeholder={placeholder}
          value={this.getFileName()}
          onClick={this.onTrigger}
        />
        <input
          type='file'
          ref='fileInput'
          accept='video/*'
          style={{ position: 'absolute', top: '-9999px' }}
          onChange={this.onChange}
        />
        {complete ? <Complete /> : null}
      </span>
    )
  }
}

export {
  FileField,
}

export default Field
