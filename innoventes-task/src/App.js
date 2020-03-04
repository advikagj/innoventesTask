import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// import './App.css';
import BookingPage from './components/BookingPage';

class App extends Component {
  render(location) {
    return (
      <div>
        <Router history={createHistory({ basename: process.env.PUBLIC_URL })}>
          <div className="route">
            <Route exact path='/' component={ BookingPage} location={location}/>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
