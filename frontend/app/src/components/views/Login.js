
import React from 'react';


class Login extends React.Component{

    render(){
        return(
            <div> Login<br /><br />
                <div> 
                    Username<br />
                    <input type="text" autoComplete="new-password" />
                </div>
                <div style={{ marginTop: 10 }}>
                    Password<br />
                    <input type="password" autoComplete="new-password" />
                </div>
            </div>
        )
    }
} 

export default Login;