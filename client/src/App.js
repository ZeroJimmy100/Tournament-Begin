import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Home from './views/Home';
import ForumPage from './views/ForumPage';
import HomeReturnUser from './views/HomeReturnUser';
import LoginRegistration from './views/LoginRegistration';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <HomeReturnUser path="/1" />
        <ForumPage path="/Forum-Page"/>
        <LoginRegistration path="/LoginRegistration"/>
      </Router>
    </div>
  );
}

export default App;
