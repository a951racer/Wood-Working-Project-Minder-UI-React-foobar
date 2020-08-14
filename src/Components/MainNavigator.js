import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import { Menu } from 'primereact/menu'
import { connect } from 'react-redux'

import { logout } from '../Redux/actions/auth'
import './MainNavigator.css';


class MainNavigator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
      redirectTo: null,
      showMenu: false
    }
  
    this.items = [
      {
        label:'Projects',
        icon: 'pi pi-fw pi-folder-open',
        command: () => this.handleClick(true, '/projects')
      },
/*      {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        command: () => this.handleClick(true, '/settings')
      },
*/      {
        label:'Profile',
        icon: 'pi pi-fw pi-user-edit',
        command: () => this.handleClick(true, '/profile')
      },
      {
        separator: true
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.props.logout()
      }
    ]
    this.menu = React.createRef()
  }

  handleClick = (match, page) => {
    if (match) this.setState({redirect: true, redirectTo: page})
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to={this.state.redirectTo} />;
    }
    return (
      <React.Fragment>
        <button className="menu-button" onClick={(event) => this.menu.toggle(event)}>{<i className="pi pi-bars"></i> }</button>
          <Router>
            <Menu model={this.items} popup={true} ref={el => this.menu = el} id="popup_menu"/>
          </Router>
      </React.Fragment>
      )
  }
}

/*
function MenuLink({ label, to, activeOnlyWhenExact, icon, clickHandler }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "menu-item-active" : "menu-item"} onClick={clickHandler}>
      <i className={"pi pi-"+icon}></i>&nbsp;<span className="menu-item-text">{label}</span>
    </div>
  );
}
*/

const mapDispatchToProps = {
  logout
}

export default connect(null, mapDispatchToProps)(MainNavigator)