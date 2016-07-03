import React from 'react'

const styles = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  padding: '10px 0',
  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
}

const rowStyles = {
  flexBasis: '20%'
}

const Request = ({ request: { _id, fullName, age, position, email, video = {} } = {} }) => (
  <div style={styles}>
    <div style={rowStyles}>
      {fullName}
    </div>
    <div style={rowStyles}>
      {age}
    </div>
    <div style={rowStyles}>
      {position}
    </div>
    <div style={rowStyles}>
      {email}
    </div>
    <div style={rowStyles}>
      <a href={`/secured/${_id}`}>
        {video.originalFilename}
      </a>
    </div>
  </div>
)

export default Request
