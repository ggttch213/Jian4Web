
import React from "react";
import {useLocation} from 'react-router';

export function Error404(){
let location = useLocation();

return(
    <div>
        <h1>404 Error</h1>
        <p>Resource not found at {location.pathname}</p>
    </div>
)

}