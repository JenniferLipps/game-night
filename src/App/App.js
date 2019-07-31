import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import firebase from 'firebase/app';

import Auth from '../components/Auth/Auth';
import EditProfile from '../components/EditProfile/EditProfile';
import GameTypes from '../components/GameTypes/GameTypes';
import Home from '../components/Home/Home';
import MyLibrary from '../components/MyLibrary/MyLibrary';
import NewGame from '../components/NewGame/NewGame';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Profile from '../components/Profile/Profile';
import SingleGame from '../components/SingleGame/SingleGame';
import fbConnection from '../helpers/data/fbConnection';
import './App.scss';

fbConnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />)
  );
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />)
  );
  return <Route {...rest} render={props => routeChecker(props)} />;
};

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar authed={authed} />
            <div className="container">
              <div className="row">
                <Switch>
                  <PublicRoute path='/auth' component={Auth} authed={authed} />
                  <PrivateRoute path='/home' component={Home} authed={authed} />
                  <PrivateRoute path='/myLibrary' component={MyLibrary} authed={authed} />
                  <PrivateRoute path='/gameTypes' component={GameTypes} authed={authed} />
                  <PrivateRoute path='/game/:id' component={SingleGame} authed={authed} />
                  <PrivateRoute path='/newGame' component={NewGame} authed={authed} />
                  <PrivateRoute path='/userName' component={Profile} authed={authed} />
                  <PrivateRoute path='/name/:id' component={EditProfile} authed={authed} />
                  <Redirect from="*" to="/auth" />
                </Switch>
              </div>
            </div>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
