import React, { Component } from 'react';
import Authentication from '../AppComponent/Authentication';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);
    }
    
    logout =(e) => {
        Authentication.logOut();
        this.props.history.push('/login');
    }

    render() {
        const navigation = Authentication.isAuthenticated()
            ? (<div><Link to="/profile">Profile Page</Link><br /><button onClick={() => this.logout() }>Logout</button></div>)
            : <Link to="/login">Login Page</Link>;
        
            return (
            <React.Fragment>
                <div>This is Home Page</div>
                { navigation }
            </React.Fragment>
        );
    }
}

export default Home;