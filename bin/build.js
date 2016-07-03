/* eslint-disable no-console */
import webpack from 'webpack'
import * as config from '../config/webpack/prod'

webpack(config).run((error, stat) => {
  if (error) {
    console.log(error)
  }

  console.log(stat.toString({ errorDetails: true, chunks: false, children: false }))
})
