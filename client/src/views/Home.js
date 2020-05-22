import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
import '../components/css/Home.css';

class Home extends Component {
   

    render() {
        return(
            <div className="category-tabs">
                <div className="background">
                    <h1> WELCOME! user</h1>
                    <div className="TopThreeTourneyBox">
                        <h4 id="TopThree">Top Three Tournament</h4>
                    </div>
                    <div className="TopThreePrizeTournament">
                        <h4 id="TopPrize">Top Three Prize Tournament</h4>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Home;