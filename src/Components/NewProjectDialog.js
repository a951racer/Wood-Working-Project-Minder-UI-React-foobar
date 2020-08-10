import React, { Component } from 'react';
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { Dialog } from 'primereact/dialog'
import { connect } from 'react-redux'

import { createProject } from '../Redux/actions/project'

class NewProjectDialog extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      showDialog: false,
      project: {
        name: null,
        type: null,
        subType: null,
        description: null,
      }
    }
  }

  updateProperty = (property, value) => {
    const project = {...this.state.project, [property]: value}
    this.setState({
      project: project
    })
  }

  cancel = () => {
    this.setState({
      project: {},
      showDialog: false
    })
  }

  save = async () => {
    console.log('about to save: ', this.state.project)
    this.props.createProject(this.state.project)
    this.setState({
      project: {},
      showDialog: false
    })
  }

////////////////////////
  render () {
    let dialogFooter = <div className="ui-dialog-buttonpane p-clearfix">
                        <Button label="Cancel" icon="pi pi-times" className="scotchy-button" onClick={this.cancel}/>
                        <Button label="Save" icon="pi pi-check" className="scotchy-button" onClick={this.save}/>
                      </div>;

    return (
      <>
        <Button type="button" label="New" icon="pi pi-fw pi-plus" style={{marginBottom: '.5em'}} onClick={() => this.setState({showDialog: true})} ></Button>

        <Dialog visible={this.state.showDialog} style={{width:'25vw'}} header={'New Project'} modal={true} footer={dialogFooter} onHide={this.cancel}>
          {
            <div className="p-grid p-fluid">
            <div className="p-col-4 "><label htmlFor="firstName">Project Name</label></div>
            <div className="p-col-8">
              <InputText id="name" onChange={(e) => {this.updateProperty('name', e.target.value)}} value={this.state.project.name}/>
            </div>

            <div className="p-col-4 "><label htmlFor="lastName">Type</label></div>
            <div className="p-col-8">
              <InputText id="type" onChange={(e) => {this.updateProperty('type', e.target.value)}} value={this.state.project.type}/>
            </div>

            <div className="p-col-4 "><label htmlFor="organization">Sub-Type</label></div>
            <div className="p-col-8">
              <InputText id="subType" onChange={(e) => {this.updateProperty('subType', e.target.value)}} value={this.state.project.subType}/>
            </div>

            <div className="p-col-4 "><label htmlFor="phone">Description</label></div>
            <div className="p-col-8">
              <InputText id="description" onChange={(e) => {this.updateProperty('description', e.target.value)}} value={this.state.project.description}/>
            </div>

        </div>
          }
        </Dialog>
      </>
    )
  }
}

const mapDispatchToProps = { createProject }

export default connect(null, mapDispatchToProps)(NewProjectDialog)