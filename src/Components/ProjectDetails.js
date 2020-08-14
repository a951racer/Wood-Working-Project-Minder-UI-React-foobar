import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Inplace, InplaceDisplay, InplaceContent } from 'primereact/inplace';
import { Card } from 'primereact/card'
import { OverlayPanel } from 'primereact/overlaypanel';

class ProjectDetails extends Component {

  render() {
    const footer = 
      <div style={{marginBottom: '.5em', width: '100px', margin: 'auto'}} ></div>

    return (
      <>
        <Card footer={footer}>
          <div className="project-details-container">
            <div className="project-image">
              <img className="cover-image" src={'https://wwpm-files.s3-us-west-2.amazonaws.com/cover-images/Stowable+Workbench.png'} alt="Planer Stand" onClick={(e) => this.op.toggle(e)} ></img>
            </div>

            <div className="project-data">
              <div className="data-item">
                <span className='label'>Project Name:</span>
                <Inplace closable={true} className="inplace">
                  <InplaceDisplay>
                      {this.props.project.name}&nbsp;<i className="pi pi-w pi-pencil"></i>
                  </InplaceDisplay>
                  <InplaceContent>
                      <InputText id="name" onChange={(e) => {this.updateProperty('name', e.target.value)}} value={this.props.project.name}/>
                  </InplaceContent>
                </Inplace>
              </div>

              <div className="data-item">
                <span className='label'>Type:</span>
                <Inplace closable={true} className="inplace">
                  <InplaceDisplay>
                      {this.props.project.type}&nbsp;<i className="pi pi-w pi-pencil"></i>
                  </InplaceDisplay>
                  <InplaceContent>
                    <div className="p-col-7">
                      <InputText id="type" onChange={(e) => {this.updateProperty('type', e.target.value)}} value={this.props.project.type}/>
                    </div>
                  </InplaceContent>
                </Inplace>
              </div>

              <div className="data-item">
                <span className='label'>Sub Type:</span>
                <Inplace closable={true} className="inplace">
                  <InplaceDisplay>
                      {this.props.project.subType}&nbsp;<i className="pi pi-w pi-pencil"></i>
                  </InplaceDisplay>
                  <InplaceContent>
                    <div className="p-col-7">
                      <InputText id="subType" onChange={(e) => {this.updateProperty('subType', e.target.value)}} value={this.props.project.subType}/>
                    </div>
                  </InplaceContent>
                </Inplace>
              </div>

              <div className="data-item">
                <span className='label'>Description:</span>
                <Inplace closable={true} className="inplace">
                  <InplaceDisplay>
                      {this.props.project.description}&nbsp;<i className="pi pi-w pi-pencil"></i>
                  </InplaceDisplay>
                  <InplaceContent>
                    <div className="p-col-7">
                      <InputText id="description" onChange={(e) => {this.updateProperty('description', e.target.value)}} value={this.props.project.description}/>
                    </div>
                  </InplaceContent>
                </Inplace>
              </div>

              <div className="data-item">
                <span className='label'>Google Sheets Id:</span>
                <Inplace closable={true} className="inplace">
                  <InplaceDisplay>
                      {this.props.project.sheetsId}&nbsp;<i className="pi pi-w pi-pencil"></i>
                  </InplaceDisplay>
                  <InplaceContent>
                    <div className="p-col-7">
                      <InputText id="sheetsId" onChange={(e) => {this.updateProperty('sheetsId', e.target.value)}} value={this.props.project.sheetsId}/>
                    </div>
                  </InplaceContent>
                </Inplace>
              </div>

              <div className="data-item">
                <span className='label'>Fusion Model URL:</span>
                <Inplace closable={true} className="inplace">
                  <InplaceDisplay>
                      {this.props.project.model}&nbsp;<i className="pi pi-w pi-pencil"></i>
                  </InplaceDisplay>
                  <InplaceContent>
                    <div className="p-col-7">
                      <InputText id="model" onChange={(e) => {this.updateProperty('model', e.target.value)}} value={this.props.project.model}/>
                    </div>
                  </InplaceContent>
                </Inplace>
              </div>
            </div>
          </div>
        </Card>

        <OverlayPanel ref={(el) => this.op = el} showCloseIcon={true}>
          <img src="https://wwpm-files.s3-us-west-2.amazonaws.com/cover-images/Stowable+Workbench.png" alt={this.props.project.name} />
        </OverlayPanel>
      </>
      )
    }
}

export default ProjectDetails