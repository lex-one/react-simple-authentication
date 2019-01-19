import React, { Component } from 'react';
import Authentication from '../AppComponent/Authentication';

class Login extends Component {
    constructor(props) {
        super(props);
        this.loginForm = React.createRef();
        this.state = {
            isLoginSuccess: true
        }
    }

    doLogin = () => {
        const form = this.loginForm.current;
        const credentials = {
            username: form.username.value,
            password: form.password.value
        }
        const isLoginSuccess = Authentication.authenticate(credentials);
        this.setState({ isLoginSuccess });
        if(!isLoginSuccess){ return; }

        let successUrl = this.props.location.state ? this.props.location.state.returnUrl : '/';
        this.props.history.push(successUrl);
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    This is Login Page
                </div>
                <div>
                    <form ref={this.loginForm} onSubmit={(e)=> { e.preventDefault(); this.doLogin() }} >
                        <input type="text" name="username" placeholder="username" /><br />
                        <input type="password" name="password" placeholder="password" /><br />
                        <input type="submit" value="Submit" />
                    </form>
                    <div>{this.state.isLoginSuccess ? '' : 'Login fail.'}</div>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;