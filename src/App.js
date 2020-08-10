import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history"
import { connect } from 'react-redux'
import 'primereact/resources/themes/rhea/theme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import AuthPage from './Pages/Auth'
import ProjectsPage from './Pages/Projects'
import ProfilePage from './Pages/Profile'
import './App.css'

const history = createBrowserHistory();
class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <React.Fragment>
            <Switch>
              {this.props.token && <Redirect from="/auth" to="/projects" exact />}
              {!this.props.token && <Route path="/auth" component={AuthPage} />}
              {!this.props.token && <Redirect to="/auth" exact />}
              {<Route path="/projects" component={ProjectsPage} />}
              {<Route path="/profile" component={ProfilePage} />}
            </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  userStatus: state.auth.userStatus,
  userId: state.auth.userStatus,
  token: state.auth.token,
  tokenExpiration: state.auth.tokenExpiration
})

export default connect(mapStateToProps)(App)
