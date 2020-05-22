import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab == 0) {
            return(
                <div>
                    <h1>Tab One</h1>
                </div>
            )
        }
        else if(this.state.activeTab == 1) {
            return(
                <div>
                    <h1>Tab Two</h1>
                </div>
            )
        }
        else if(this.state.activeTab == 2) {
            return(
                <div>
                    <h1>Tab Three</h1>
                </div>
            )
        }
        else if(this.state.activeTab == 3) {
            return(
                <div>
                    <h1>Tab Four</h1>
                </div>
            )
        }
        else if(this.state.activeTab == 4) {
            return(
                <div>
                    <h1>Tab Five</h1>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <h1> WELCOME! </h1>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab> One </Tab>
                    <Tab> Two </Tab>
                    <Tab> Three </Tab>
                    <Tab> Four </Tab>
                    <Tab> Five </Tab>
                </Tabs>

                <section className="contents">
                    {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default Home;