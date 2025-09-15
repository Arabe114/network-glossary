const AUTH_CONFIG = {
    u: 'YWRtaW4=',
    p: 'bHV4dGVsQG5vY0AxOTQ1',
    
    // Alternative obfuscation method
    getCredentials: function() {
        return {
            username: atob(this.u),
            password: atob(this.p)
        };
    },
    
    validate: function(inputUser, inputPass) {
        const creds = this.getCredentials();
        return inputUser === creds.username && inputPass === creds.password;
    }
};

window.AUTH_CONFIG = AUTH_CONFIG;