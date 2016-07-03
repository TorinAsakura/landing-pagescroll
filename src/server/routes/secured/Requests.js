import React from 'react'
import Request from './Request'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  overflowY: 'auto',
  margin: '0 40px',
}

const Requests = ({ requests }) => (
  <div style={styles}>
    {requests.map((request, index) => (
      <Request key={index} request={request} />
    ))}
  </div>
)

export default Requests
