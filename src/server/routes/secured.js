import path from 'path'
import express from 'express'
import passport from 'passport'
import { BasicStrategy } from 'passport-http'
import { renderToString } from 'react-dom/server'
import Request from '../models/request'
import { uploadDir, auth } from '../config'
import renderPage from './secured/Page'

const router = express.Router()

const strategy = new BasicStrategy((username, password, callback) => {
  if (username === auth.username && password === auth.password) {
    return callback(null, { username, password })
  }

  return callback(null, false)
})

passport.use(strategy)

const isAuthenticated = passport.authenticate('basic', { session: false })

router.get('/secured', isAuthenticated, (req, res) => {
  Request.find({}, (error, docs) => {
    if (error) {
      res.status(400)
      res.send()
    }

    res.send(renderPage(docs))
  })
})

router.get('/secured/:id', isAuthenticated, (req, res) => {
  Request.findById(req.params.id, (error, doc) => {
    if (error) {
      res.status(404)
      res.send()
    }

    const headers = {
      'Content-Disposition': `attachment; filename="${doc.video.originalFilename}"`,
    }

    res.sendFile(path.join(uploadDir, doc.video.path), { headers })
  })
})

export default router
