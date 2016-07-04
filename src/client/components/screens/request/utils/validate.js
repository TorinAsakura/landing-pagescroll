import t from 'tcomb-validation'

const File = t.struct({
  name: t.String,
  type: t.String,
})

const Min = t.subtype(t.String, value => value.length > 2, 'Min')
const Email = t.subtype(t.String, value => /.+\@.+\..+/.test(value), 'Email')
const VideoFile = t.subtype(File, ({ type }) => type.includes('video'), 'VideoFile')
const License = t.subtype(t.Boolean, value => value, 'License')

const Request = t.struct({
  fullName: Min, 
  age: t.Number,
  position: Min,
  email: Email,
  video: VideoFile,
  licenseConfirmed: License,
})

const validate = (value = {}) => {
  const { errors } = t.validate(value, Request)
  const paths = errors.reduce((result, error) => result.concat(error.path[0]), [])

  return Object.keys(value).reduce((result, key) => {
    if (value[key] && !paths.includes(key)) {
      return {
        ...result,
        [key]: true,
      }
    }

    return result
  }, {})
}

export default validate
