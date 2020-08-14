import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import { Card } from 'primereact/card';

import './ProjectListItem.css'

class ProjectListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      redirectTo: ''
    }
  }

  clickHandler = (id) => {
    this.setState({redirect: true, redirectTo: '/project-details/' + id})
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirectTo} />;
    }
    return (
      <>
        <Router>
        <div onClick={() => this.clickHandler(this.props.project._id)}>
          <Card
            id={this.props.project._id}
            title={this.props.project.name}
            subTitle={this.props.project.type + " - " +  this.props.project.subType}
          >
            <div className="project-image">
              <img className="thumbnail" src={'planer_stand.png'} alt="Planer Stand" ></img>
            </div>
            <div className="project-category">
              
            </div>
            <div className="project-description">
              {this.props.project.description}
            </div>
          </Card>
        </div>
        </Router>
        <br />
      </>
    )
  }
}

export default ProjectListItem
