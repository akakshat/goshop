import React ,{useState} from 'react'
import "./Login.css"
import { Link, useHistory } from "react-router-dom";
import {auth} from "./firebase";

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = event =>
    {
        event.preventDefault(); //this stops the refresh
        // LOGIN LOGIC
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //Login, redirect to homepage 
            history.push("/")
        }) 
        .catch((e) => alert(e.message));
    }
    const register = event =>
    {
        event.preventDefault(); //this stops the refresh
        // REGISTER LOGIC
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) =>{
            // Created a user and logged in, redirected to homepage
            history.push("/")
        })
        .catch()
    }
  return (
    <div className='login'>
        <Link to="/">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                className="login__logo"
                alt="Logo"
            />
        </Link>
        <div 
            
            className="login__container">
            <h1>Sign-In</h1> 

            <form>
                <h5> Email </h5>
                <input value={email} onChange={event => setEmail(event.target.value)} type = "email" />
                <h5> Password </h5>
                <input value={password} onChange={event => setPassword(event.target.value)} type = "password" /> 
                <button onClick={login} type= "submit" className='login__signInButton'> Sign-In</button>
            </form> 

            <p 
                className="login__checkbox">
                <input  type = "checkbox" />
                Keep me signed in
            </p>
            
            <p 
                className='login__disclaimer'>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
            </p>

            <button  
                onClick={register}
                className='login__registerButton'>
                Create Your Amazon Account
            </button>
            
        </div>

    </div>
  )
}

export default Login