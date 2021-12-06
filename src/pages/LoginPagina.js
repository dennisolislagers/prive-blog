import React from 'react';
import {useHistory} from "react-router-dom";


function LoginPagina({ userIsAuthenticated }){
    const history = useHistory()
    function signIn () {
        userIsAuthenticated (true)
        history.push('/blogposts')
    }
    return (
            <div>
                <h3>Login Pagina</h3>
                <p>Druk op de knop om je in te loggen</p>
                <button type="button" onClick={signIn}>Inloggen</button>
            </div>
    );
}
export default LoginPagina;