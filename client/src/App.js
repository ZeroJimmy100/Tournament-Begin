import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Home from './views/Home';
import ForumPage from './views/ForumPage';
import HomeReturnUser from './views/HomeReturnUser';

function App() {
  return (
    <div className="App">
    <Layout>
        <Header title={<Link style={{textDecoration: 'none', color: 'white'}} to="/"> <i class="fa fa-trophy" aria-hidden="true" width="50"> Tournament Begin </i></Link>} scroll>
            <Navigation>
              <a href="/">Contact</a>
              <a href="/">Support</a>
              <a href="/">Account</a>
              <a href="/Forum-Page">Forum</a>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/"> <i class="fa fa-trophy" aria-hidden="true" width="50"> Home </i></Link>}>
            <Navigation>
              <a href="/">Account</a>
              <a href="/">My Tournaments</a>
              <a href="/">Friends</a>
              <a href="/">My Forum</a>
              <a href="/">Add Forum</a>
              <a href="/Forum-Page">Forum</a>
              <a href="/">Contact</a>
              <a href="/">Support</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content">
              <Router>
                <Home path="/" />
                <HomeReturnUser path="/1" />
                <ForumPage path="/Forum-Page"/>
              </Router>
            </div>
        </Content>
    </Layout>
</div>
  );
}

export default App;
