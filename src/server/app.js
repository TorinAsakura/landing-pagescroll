import path from 'path'
import Express from 'express'
import favicon from 'serve-favicon'
import serveStatic from 'serve-static'
import { request } from './routes'
import './db'

export default function configureApp(app = new Express()) {
  app.use(favicon(path.join(__dirname, '../../public/favicon.ico')))
  app.use(serveStatic(path.resolve(__dirname, './../../public')))

  app.use('/', request)

  return app
}
