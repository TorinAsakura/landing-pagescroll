import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
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
    color: '#797979',
    minWidth: '210px',
  },
})

const Field = ({ value, placeholder, onChange = f => f }) => (
  <input
    value={value}
    className={styles()}
    placeholder={placeholder}
    onChange={({ target }) => onChange(target.value)}
  />
)

export default Field
