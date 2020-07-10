import React, { Component } from 'react'
import ProfileList from '../components/ProfileList/ProfileList';
import Show from '../components/Show/Show';
import './App.scss';

class App extends Component {

    render() {
        return (
            <div className="main-container">
                <div className="thx-wrapper flex">
                    <ProfileList/>
                    <Show />
                </div>
            </div>
        );
    }
}

export default App;
