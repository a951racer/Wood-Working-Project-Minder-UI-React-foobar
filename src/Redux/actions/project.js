import { REQUEST_PROJECTS,
  REQUEST_PROJECT,
  UPDATE_PROJECT,
  PROJECTS_RECEIVED,
  PROJECT_RECEIVED,
  PROJECT_UPDATED,
  CREATE_PROJECT,
  PROJECT_CREATED,
  DELETE_PROJECT,
  PROJECT_DELETED
} from '../actionTypes/projects'

import ProjectAPI from '../../API/project'

const api = new ProjectAPI();

export const requestProjects = () => {
  return {
    type: REQUEST_PROJECTS
  }
}

export const projectsReceived = (projects) => {
  return {
    type: PROJECTS_RECEIVED,
    projects: projects
  }
}

export const requestProject = () => {
  return {
    type: REQUEST_PROJECT
  }
}

export const projectReceived = (project) => {
  return {
    type: PROJECT_RECEIVED,
    project: project
  }
}

export const updateProject = () => {
  return {
    type: UPDATE_PROJECT
  }
}

export const projectUpdated = (project) => {
  return {
    type: PROJECT_UPDATED,
    project
  }
}

export const creatingProject = () => {
  return {
    type: CREATE_PROJECT
  }
}

export const projectCreated = (newProject) => {
  return {
    type: PROJECT_CREATED,
    newProject
  }
}

export const deletingProject = () => {
  return {
    type: DELETE_PROJECT
  }
}

export const projectDeleted = (deletedProject) => {
  return {
    type: PROJECT_DELETED,
    deletedProject
  }
}


export const fetchProjects = () => async (dispatch, getState) => {
  const state = getState()
  dispatch(requestProjects())
  const projects = await api.getProjects(state.auth.token)
  dispatch(projectsReceived(projects))
}

export const fetchProjectDetails = id => async (dispatch, getState) => {
  const state = getState()
  dispatch(requestProject())
  const project = await api.getProjectDetails(id, state.auth.token)
  dispatch(projectReceived(project))
}

export const saveProject = project => async (dispatch, getState) => {
  const state = getState()
  dispatch(updateProject())
  const updatedProject = await api.saveProject(project, state.auth.token)
  dispatch(projectUpdated(updatedProject))
}

export const createProject = project => async (dispatch, getState) => {
  const state = getState()
  dispatch(creatingProject())
  const newProject = await api.createProject(project, state.auth.token)
  dispatch(projectCreated(newProject))
}

export const deleteProject = id => async (dispatch, getState) => {
  const state = getState()
  dispatch(deletingProject())
  const deletedProject = await api.deleteProject(id, state.auth.token)
  dispatch(projectDeleted(deletedProject))
}