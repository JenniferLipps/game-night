import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../components/Home/Home';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import './App.scss';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Home />
      </div>
    );
  }
}

export default App;
