import axios from 'axios'
import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv()
const apiRoot = env.REACT_APP_API + '/auth/login'

export default class AuthAPI {

  async login(email, password) {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
    const res = await axios.post(apiRoot, {email, password}, options)
    return res.data
  }
}