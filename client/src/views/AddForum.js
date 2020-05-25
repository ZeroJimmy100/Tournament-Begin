import React from 'react'
import NavBar from '../components/NavBar';
import '../components/css/AddForum.css';

export default () => {
    return (
        <div className="category-tabs">
            
            <div className="AddForumcontainer">
                <h2 className="CreateTournament">Create your Tournament</h2>
                <div className="row100">
                    <div className="col">
                        <div className="inputBox">
                            <input required="required" type="text" name="tournamentName" />
                            <span className="text">Tournament Name</span>
                            <span className="line"></span>
                        </div>
                    </div>
                    <div className="col">
                        <div className="inputBox">
                            <input required="required" type="text" name="gameCate" />
                            <span className="text">Game</span>
                            <span className="line"></span>
                        </div>
                    </div>
                </div>
                    <div className="row100">
                        <div className="col">
                            <div className="inputBox">
                                <input required="required" type="text" name="contestants" />
                                <span className="text">Contestants</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row100">
                        <div className="col">
                            <div className="inputBox">
                                <input type="date" name="startDate" />
                                <span className="text">Start Date</span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="inputBox">
                                <input type="date" name="endDate" />
                                <span className="text">End Date</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row100">
                        <div className="col">
                            <div className="inputBox textarea">
                                <textarea required="required" name="desc"></textarea>
                                <span className="text">Description</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row100">
                        <div class="col">
                            <input type="submit" value="Create"/>
                        </div>
                    </div>
                </div>
            </div>
            
            
     
    )
}
