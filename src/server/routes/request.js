import path from 'path'
import express from 'express'
import { Form } from 'multiparty'
import request from '../models/request'
import { uploadDir } from '../config'

const router = express.Router()

const formatFields = fields => {
  return Object.keys(fields).reduce((result, field) => { 
    return {
      ...result,
      [field]: fields[field][0],
    }
  }, {})
}

const formatFile = file => ({
  originalFilename: file.originalFilename,
  path: file.path.replace(uploadDir, ''),
})

const formatData = (fields, file) => {
  return {
    ...formatFields(fields),
    video: formatFile(file),
  }
}

const formatErrors = (errors = {}) => {
  return Object.keys(errors).reduce((result, error) => {
    return {
      ...result,
      [error]: errors[error].message,
    }
  }, {})
}

router.post('/request', (req, res) => {
  const form = new Form({ uploadDir })

  form.parse(req, (parseError, fields, files) => {
    if (parseError) {
      res.status(400)
      res.send()

      return
    }

    if (!(files && files.video && files.video[0])) {
      res.status(422)
      res.json({})
    }

    const data = formatData(fields, files.video[0])

    request.create(data, (error, doc) => {
      if (error) {
        res.status(422)
        res.json(formatErrors(error.errors))

        return
      }

      res.json({})
    })
  })
})

export default router
