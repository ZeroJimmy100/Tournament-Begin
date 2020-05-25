import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
import '../components/css/Home.css';
import NavBar from '../components/NavBar';

class Home extends Component {
   

    render() {
        return(
            <div className="category-tabs">
                
                <div className="background">
                    <h1> WELCOME! Asshole</h1>

                    <div className="TopPart">
                        <div className="TopThreeTourneyBox">
                            <h4 id="TopThree">Top Three Tournament</h4>
                        </div>
                        <div className="MyTourneyBox">
                            <h4 id="MyTournament">My Tournament</h4>
                        </div>
                    </div>

                    <div className="MiddlePart">
                        <div className="TopThreePrizeTournament">
                            <h4 id="TopPrize">Top Three Prize Tournament</h4>
                        </div>
                        <div className="FriendBox">
                            <h4 id="Friends">Friends list</h4>
                        </div>
                    </div>

                    <div className="BottomPart">
                        <div className="OngoingTournamentBox">
                            <h4 id="OngoingTourney">Ongoing Tournaments</h4>
                        </div>
                        <div className="RecentTourneyPost">
                            <h4 id="Recent">Recent Tourney</h4>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default Home;