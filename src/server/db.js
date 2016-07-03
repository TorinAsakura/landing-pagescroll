import mongoose from 'mongoose'

const host = process.env.DB_HOST || 'localhost'

const db = mongoose.createConnection(`mongodb://${host}/narodnaia-sbornaya`)

export default db
