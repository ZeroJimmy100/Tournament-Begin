import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Router, Link } from '@reach/router';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Home from '../views/Home';
import ForumPage from '../views/ForumPage';
import HomeReturnUser from '../views/HomeReturnUser';
import LoginRegistration from '../views/LoginRegistration';

export default function NavBar() {
    

    return (
        <div>
            <Layout>
                <Header title={<Link style={{textDecoration: 'none', color: 'white'}} to="/"> <i class="fa fa-trophy" aria-hidden="true" width="50"> Tournament Begins </i></Link>} scroll>
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
                    <a href="/Add-Forum/player">Add Forum</a>
                    <a href="/Forum-Page">Forum</a>
                    <a href="/">Contact</a>
                    <a href="/">Support</a>
                    </Navigation>
                </Drawer>
            </Layout>
        </div>
    )
}
