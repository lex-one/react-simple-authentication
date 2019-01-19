import React, { Component } from 'react';
import Authentication from '../AppComponent/Authentication';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                This is Profile Page.<br />
                Login as { Authentication.getUsername() }
            </div>
        );
    }
}

export default Profile;