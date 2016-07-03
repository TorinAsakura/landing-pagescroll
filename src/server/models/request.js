import { Schema } from 'mongoose'
import db from '../db'

const Video = Schema({
  originalFilename: String,
  path: String,
})

const Request = Schema({
  fullName: String,
  age: Number,
  position: String,
  email: String,
  video: Video,
})

const model = db.model('Request', Request)

export default model
