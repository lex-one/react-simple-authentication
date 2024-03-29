import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authentication from './Authentication';

class ProtectedRoute extends Component {
    render() {
        const {component: Component, ...others} = this.props;
        
        const renderRoute = props => {
            if (Authentication.isAuthenticated()) {
                return ( <Component {...props} /> );
            }

            return (
                <Redirect to={
                    {
                        pathname: '/login', 
                        state: { returnUrl: props.location }
                    }
                } />
            );
        }

        return (
            <Route {...others} render={renderRoute}/>
        );
    }
}

export default ProtectedRoute;