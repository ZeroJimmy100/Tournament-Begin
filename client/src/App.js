import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
    <Layout>
        <Header title={<Link style={{textDecoration: 'none', color: 'white'}} to="/"> <i class="fa fa-trophy" aria-hidden="true" width="50"> Tournament Begin </i></Link>} scroll>
            <Navigation>
              <a href="/">Contact</a>
              <a href="/">Support</a>
              <a href="/">Account</a>
              <a href="/">Link</a>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/"> <i class="fa fa-trophy" aria-hidden="true" width="50"> Home </i></Link>}>
            <Navigation>
              <a href="/">Contact</a>
              <a href="/">Support</a>
              <a href="/">Account</a>
              <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content">
              <Router>
                <Home path="/" />
              </Router>
            </div>
        </Content>
    </Layout>
</div>
  );
}

export default App;
