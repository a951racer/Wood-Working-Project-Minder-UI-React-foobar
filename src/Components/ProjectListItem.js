import React, { Component } from 'react'
import {Card} from 'primereact/card';

import './ProjectListItem.css'

class ProjectListItem extends Component {

  render() {
    return (
      <>
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
        <br />
      </>
    )
  }
}

export default ProjectListItem
