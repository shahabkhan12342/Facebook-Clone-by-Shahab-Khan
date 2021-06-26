import React from 'react';
import './Login.css';
import lg from './images/fblogo.png';
import lg1 from './images/fbs.png';
import { Button } from '@material-ui/core';
import {auth,provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes} from './reducer';  


function Login() {
    

    const [state,dispatch]=useStateValue();
    const signIn=()=>{


        auth.signInWithPopup(provider).then((result)=>{
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
            
           

        })
        .catch((error)=>alert(error.message));

    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <img src={lg} />
                <img src={lg1}/>
            </div>

            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
