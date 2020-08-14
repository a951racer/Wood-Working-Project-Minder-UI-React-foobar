import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Growl } from 'primereact/growl'
import { TabView,TabPanel } from 'primereact/tabview';

import PageLayout from '../Components/PageLayout'
import ProjectDetails from '../Components/ProjectDetails'
import Boards from '../Components/Boards'

import { fetchProjectDetails, saveProject } from '../Redux/actions/project'

import './ProjectDetails.scss'
import './planer_stand.png'

class ProjectDetailsPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      projectDetails: {}
    }
  }

  async componentDidMount() {
    //let { id } = useParams()
    await this.props.fetchProjectDetails(this.props.match.params.id)
    this.setState({projectDetails: this.props.projectDetails})
  }

  updateProperty = (property, value) => {
    const projectDetails = {...this.state.projectDetails, [property]: value}
    this.setState({
      projectDetails
    })
    this.props.projectDetails[property] = value
  }

  saveProjectDetails = async () => {
    await this.props.saveProject(this.state.projectDetails)
    this.growl.show({severity: 'success', summary: 'Saved', detail: 'ProjectDetails has been updated'})
  }

  render() {
    return (
      <PageLayout title={this.props.isLoaded ? this.props.projectDetails.name : "Loading..."}>
        {this.props.isLoaded &&
          <div style={{width: '80vw', margin: 'auto'}}>
            <ProjectDetails project={this.props.projectDetails} />
            <br />
            <TabView>
              <TabPanel header="Boards">
                  <Boards boards={this.state.projectDetails.boards} />
              </TabPanel>
              <TabPanel header="Library">
                  Files Component
              </TabPanel>
              <TabPanel header="Reports">
                  Reports Component
              </TabPanel>
              <TabPanel header="Notes">
                  Notes Component
              </TabPanel>
            </TabView>
          </div>
        }

        <Growl ref={(el) => this.growl = el} />

      </PageLayout>
    )
  }
}

const mapDispatchToProps = {
  fetchProjectDetails,
  saveProject
}

const mapStateToProps = state => ({
  projectDetails: state.projects.currentProject,
  isLoading: state.projects.currentProjectIsLoading,
  isLoaded: state.projects.currentProjectIsLoaded,
  userStatus: state.auth.userStatus,
  userId: state.auth.userStatus,
  token: state.auth.token,
  tokenExpiration: state.auth.tokenExpiration
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailsPage)
