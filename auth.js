// Authentication configuration
// This file contains encoded credentials for security
const AUTH_CONFIG = {
    // Base64 encoded credentials - decode to verify
    u: 'YWRtaW4=', // admin
    p: 'bHV4dGVsQG5vY0AxOTQ1', // luxtel@noc@1945
    
    // Alternative obfuscation method
    getCredentials: function() {
        return {
            username: atob(this.u),
            password: atob(this.p)
        };
    },
    
    // Validation function
    validate: function(inputUser, inputPass) {
        const creds = this.getCredentials();
        return inputUser === creds.username && inputPass === creds.password;
    }
};

// Export for use in login
window.AUTH_CONFIG = AUTH_CONFIG;