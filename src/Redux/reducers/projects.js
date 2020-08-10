import { REQUEST_PROJECTS,
  UPDATE_PROJECT,
  PROJECTS_RECEIVED,
  PROJECT_UPDATED,
  CREATE_PROJECT,
  PROJECT_CREATED,
  DELETE_PROJECT,
  PROJECT_DELETED
} from '../actionTypes/projects'

const initialState = {
  projects: [],
  isLoading: false,
  isUpdating: false,
  isCreating: false,
  isDeleting: false
};

const projects = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PROJECTS: {
      return {
        ...state,
        isLoading: true }
    }

    case PROJECTS_RECEIVED: {
      return {
        ...state,
        isLoading: false,
        projects: action.projects
      }
    }

    case UPDATE_PROJECT: {
      return {
        ...state,
        isUpdating: true } 
    }

    case PROJECT_UPDATED: {
      const currState = {...state}
      let updatedProjects = currState.projects.map(project => {
        if (project.id === action.project.id) return action.project
        return project
      })
      return {
        ...state,
        isUpdating: false,
        projects: updatedProjects
      }
    }

    case CREATE_PROJECT: {
      return {
        ...state,
        isCreating: true
      }
    }

    case PROJECT_CREATED: {
      return {
        ...state,
        projects: [...state.projects, action.newProject],
        isCreating: false
      }
    }

    case DELETE_PROJECT: {
      return {
        ...state,
        isDeleting: true
      }
    }

    case PROJECT_DELETED: {
      const currState = {...state}
      let updatedProjects = currState.projects.filter(project => {
        if (project._id !== action.deletedProject._id) return true
        return false
      })
      return {
        ...state,
        projects: updatedProjects,
        isDeleting: false
      }
    }

    default:
      return state;
  }
}

export default projects