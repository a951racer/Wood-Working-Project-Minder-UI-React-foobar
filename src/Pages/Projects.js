import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Growl } from 'primereact/growl'

import PageLayout from '../Components/PageLayout'
import NewProjectDialog from '../Components/NewProjectDialog'
import ProjectListItem from '../Components/ProjectListItem'

import { fetchProjects, saveProject } from '../Redux/actions/project'

class ProjectPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      editingProject: null,
    }
  }

  componentDidMount() {
    this.props.fetchProjects()
  }

  render() {
    return (
      <PageLayout title="Projects">
        <NewProjectDialog />

        {
          this.props.projects.map(project =>
            <ProjectListItem key={project._id} project={project} />
        )}

        <Growl ref={(el) => this.growl = el} />

      </PageLayout>
    )
  }
}

const mapDispatchToProps = {
  fetchProjects,
  saveProject
}

const mapStateToProps = state => ({
  projects: state.projects.projects,
  isLoading: state.projects.isLoading,
  userStatus: state.auth.userStatus,
  userId: state.auth.userStatus,
  token: state.auth.token,
  tokenExpiration: state.auth.tokenExpiration
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage)
