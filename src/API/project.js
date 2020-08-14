import axios from 'axios'
import runtimeEnv from '@mars/heroku-js-runtime-env'

const env = runtimeEnv()
const apiRoot = env.REACT_APP_API + '/project'

export default class ProjectAPI {

  async getProjects(token) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const res = await axios.get(apiRoot, options)
    return res.data
  }

  async getProjectDetails(id, token) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const res = await axios.get(apiRoot + `/${id}`, options)
    return res.data
  }

  async saveProject(project, token) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const res = await axios.put(apiRoot + `/${project._id}`, project, options)
    return res.data
  }

  async createProject(project, token) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const res = await axios.post(apiRoot, project, options)
    return res.data
  }

  async deleteProject(project, token) {
    const options = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const res = await axios.delete(apiRoot + `/${project._id}`, project, options)
    return res.data
  }
}