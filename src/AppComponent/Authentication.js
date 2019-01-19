class Authentication {
    static isAuthenticated = () => {
        return Authentication.getUser() !== null;
    }
    
    static authenticate = (credentials) => {
        if(credentials
            && credentials.username
            && credentials.password) {
                const isValidCredentials = Authentication.checkCredentials(credentials);
                if(isValidCredentials) {
                    Authentication.setUserDetails(credentials);
                }
                return isValidCredentials;
        }
        return false;
    }
    
    static checkCredentials = (credentials) => {
        return credentials.username == "admin" && credentials.password == "123";
    }
    
    static getUsername = (userDetails) => {
        return Authentication.getUser().username;
    }
    
    static setUserDetails = (userDetails) => {
        localStorage.setItem("user", JSON.stringify(userDetails));
    }

    static getUser = () => {
        return JSON.parse(localStorage.getItem("user"));
    }

    static logOut = () => {
        localStorage.removeItem("user");
    }
}

export default Authentication;