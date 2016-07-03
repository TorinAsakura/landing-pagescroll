import React, { Component } from 'react'
import { renderToString } from 'react-dom/server'
import Requests from './Requests'

class Page extends Component {
  render() {
    const { requests } = this.props

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' />
          <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        </head>
        <body>
          <Requests requests={requests} />
        </body>
      </html>
    )
  }
}

export default function render(requests) {
  const page = renderToString(
    <Page requests={requests} />
  )

  return `
    <!doctype html>
    ${page}
  `
}
