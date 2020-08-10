import React, { Component } from 'react'
import { connect } from 'react-redux'
import { InputText } from 'primereact/inputtext'
import { Growl } from 'primereact/growl'
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'

import PageLayout from '../Components/PageLayout'

import { fetchProfile, saveProfile } from '../Redux/actions/profile'

class ProfilePage extends Component {

  constructor(props) {
    super(props)
    console.log("constructor")
    this.state = {
      unitOptions: [
        {
          label: "Inches",
          id: 'inches'
        },
        {
          label: "Centimeters",
          id: 'cm'
        }
      ],
      profile: {}
    }
  }

  async componentDidMount() {
    await this.props.fetchProfile()
    this.setState({profile: this.props.profile})
  }

  updateProperty = (property, value) => {
    const profile = {...this.state.profile, [property]: value}
    this.setState({
      profile
    })
    this.props.profile[property] = value
  }

  saveProfile = async () => {
    console.log("saving: ", this.state.profile)
    await this.props.saveProfile(this.state.profile)
    this.growl.show({severity: 'success', summary: 'Saved', detail: 'Profile has been updated'})
  }

  render() {
    const footer = 
      <div style={{marginBottom: '.5em', width: '100px', margin: 'auto'}} >
        <Button type="button" label="&nbsp;Save" icon="pi pi-fw pi-save" onClick={() => this.saveProfile()} ></Button>
      </div>
    return (
      
      <PageLayout title="Profile">
          {this.props.isLoaded &&
            <div style={{width: '500px', margin: 'auto'}}>
            <Card footer={footer}>
                <div className="p-grid p-fluid">
                  <div className="p-col-4 "><label htmlFor="firstName">First Name</label></div>
                  <div className="p-col-8">
                    <InputText id="firstName" onChange={(e) => {this.updateProperty('firstName', e.target.value)}} value={this.state.profile.firstName}/>
                  </div>

                  <div className="p-col-4 "><label htmlFor="lastName">Last Name</label></div>
                  <div className="p-col-8">
                    <InputText id="lastName" onChange={(e) => {this.updateProperty('lastName', e.target.value)}} value={this.state.profile.lastName}/>
                  </div>

                  <div className="p-col-4 "><label htmlFor="dba">Business Name</label></div>
                  <div className="p-col-8">
                    <InputText id="dba" onChange={(e) => {this.updateProperty('dba', e.target.value)}} value={this.state.profile.dba}/>
                  </div>

                  <div className="p-col-4 "><label htmlFor="units">Unit of Measure</label></div>
                  <div className="p-col-8">
                    <Dropdown id="units"  value={this.state.profile.units} options={this.state.unitOptions} optionLabel="label" optionValue="id" style={{width: '15em'}} scrollHeight='200px' onChange={(e) => {this.updateProperty('units', e.target.value)}} />
                  </div>

                  <div className="p-col-4 "><label htmlFor="roughLength">Rough Length Add-on</label></div>
                  <div className="p-col-8">
                    <InputText id="roughLength" onChange={(e) => {this.updateProperty('roughLength', e.target.value)}} value={this.state.profile.roughLength}/>
                  </div>

                  <div className="p-col-4 "><label htmlFor="roughWidth">Rough Width Add-on</label></div>
                  <div className="p-col-8">
                    <InputText id="roughWidth" onChange={(e) => {this.updateProperty('roughWidth', e.target.value)}} value={this.state.profile.roughWidth}/>
                  </div>
                </div>
            </Card>
            </div>
        }


        <Growl ref={(el) => this.growl = el} />

      </PageLayout>
    )
  }
}

const mapDispatchToProps = {
  fetchProfile,
  saveProfile
}

const mapStateToProps = state => ({
  profile: state.profile.profile,
  isLoading: state.profile.isLoading,
  isLoaded: state.profile.isLoaded,
  userStatus: state.auth.userStatus,
  userId: state.auth.userStatus,
  token: state.auth.token,
  tokenExpiration: state.auth.tokenExpiration
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)
