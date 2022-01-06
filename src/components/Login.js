import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link, Navigate } from 'react-router-dom'
import Header from './Header';

const Login = ({user,setuser}) => {

    const [formdata, setformdata] = useState({ email: '', password: '', })
    const [redirect, setredirect] = useState(false)

    const {
        email,
        password,
    } = formdata;

    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        // Submit to backend API with Axios/fetch 
        // Implement your backend logic here. 
        axios.post(process.env.REACT_APP_API + 'login', formdata)
            .catch(err => alert(JSON.stringify(err)))
            .then(res => {localStorage.setItem('data',JSON.stringify(res.data));setuser(res.data.user.id)})
            .then(setredirect(true))
    }
    const passRef = useRef();
    const handleClick = () => {
        passRef.current.type = "password"
    }
    console.log(user)
    if (user) {
        return <Navigate to='/dashboard' />
    }
    if (redirect) return <Navigate to='/plan' />
    return (
        <>
            <Header current={'Login'} />
            <div style={{fontSize:'40px'}}><b>You need to Login to access the site</b></div>
            <div className='formContainer'>
                
                <form onSubmit={handleSubmit} className='grid'>

                    <div className="label">Email:</div>

                    <input type='email' name='email' onChange={handleChange} placeholder={'enter your email'} required />
                    <div className="label">Password:</div>
                    <input type='password' name='password' onChange={handleChange} placeholder={'enter your password'} ref={passRef} minLength={8} required />
                    <Link to={'/register'} >Create account ?</Link>
                    <Link to={'/reset-password'} >  Forgot password ?</Link>
                    <input type='submit' />
                </form>
            </div>
        </>
    )
}
export default Login