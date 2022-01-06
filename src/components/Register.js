import React, {  useState } from 'react';
import {Link,Navigate} from 'react-router-dom'
import axios from 'axios'
import Header from './Header';

const Register = ({user,setuser}) => {

    const [formdata, setformdata] = useState({ email: '', password: '', })
    const [redirect,setredirect]=useState(false)
    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        if(formdata.password!==formdata.password2){
            alert('Passwords Did not match please Check')
        }else{
            axios.post(process.env.REACT_APP_API+'register',formdata)
            .then(res=>{localStorage.setItem('data',JSON.stringify(res.data));setuser(res.data.user.id)})
            .then(setredirect(true))
            
        }
        // Submit to backend API with Axios/fetch 
        // Implement your backend logic here. 

    }
   
    if(redirect) return <Navigate to='/plan' />
    if(user){
        return <Navigate to='/dashboard' />
    }
    return (
        <>
      <Header current={'Register'} user={user}/>

            <div className='formContainer'>
                <form onSubmit={handleSubmit} className='grid'>

                    <div className="label">Email:</div>

                    <input type='email' name='email' onChange={handleChange} placeholder={'Enter your email'} required />
                    <div className="label">Password:</div>
                    <input type='password' name='password' onChange={handleChange} placeholder={'Enter your password'} required />
                    <div className="label">Confirm Password:</div>
                    <input type='password' name='password2' onChange={handleChange} placeholder={'Enter your password'} required />
                    <div className="label">Phone Number:</div>
                    <input type='number' name='phone' onChange={handleChange} placeholder={'Enter your Phone No.'} minLength={7} min={1000000} required />
                    <div>Already have an account ?
                        <Link to={'/'} >Log in </Link>
                    </div>
                    <input type='submit' />
                </form>
            </div>
        </>
    )
}
export default Register