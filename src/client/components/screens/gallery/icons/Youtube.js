import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    width: '34px',
    height: '34px',
    border: '1px solid #000',
    borderRadius: '50%',
    padding: '2px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    margin: '0 6px',
    boxSizing: 'border-box',
    '&:hover': {
      borderColor: '#d2a700',
      '& svg': {
        fill: '#d2a700',
      },
    },
  },
})

const Youtube = () => (
  <span className={styles()}>
    <svg
      width='20px'
      viewBox="0 0 90 90"
    >
      <g>
        <path d="M90,26.958C90,19.525,83.979,13.5,76.55,13.5h-63.1C6.021,13.5,0,19.525,0,26.958v36.084
                C0,70.475,6.021,76.5,13.45,76.5h63.1C83.979,76.5,90,70.475,90,63.042V26.958z M36,60.225V26.33l25.702,16.947L36,60.225z"
        />
      </g>
    </svg>
  </span>
)

export default Youtube
