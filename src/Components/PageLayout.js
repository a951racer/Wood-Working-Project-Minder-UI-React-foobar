import React, { Component } from 'react'
import MainNavigator from '../Components/MainNavigator'

import './PageLayout.scss'

class PageLayout extends Component {

  render() {
    return (
      <div id="main">
        <div className="container">
          <div className="header">
            <div className="nav">
              <MainNavigator />
            </div>
            <div className="brand">
              Woodworking Project Minder
            </div>
          </div>
          <div className="title">
            {this.props.title}
          </div>
          <div className="content">
            {this.props.children}
          </div>
          <div className="footer">
            A HobbsSquad Joint &copy; 2020
          </div>
        </div>
      </div>
    )
  }
}

export default PageLayout
