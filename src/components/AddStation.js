import axios from 'axios'
import React,{useState} from 'react';
import {Navigate} from 'react-router-dom'
import useFetch from '../useFetch';
import Header from './Header';

const AddStation =({user,setuser})=>{
    const [formdata, setformdata] = useState(null)
    const [redirect,setredirect]=useState(false)

    const handleChange = (e) => {
        setformdata({[e.target.name]:e.target.value} )
    }
    const handleSubmit = e => {
        e.preventDefault()
        // Submit to backend API with Axios/fetch 
        // Implement your backend logic here. 
        axios.post(process.env.REACT_APP_API + 'stations', formdata)
            .catch(err => alert(JSON.stringify(err)))
            .then(alert('New Station Added'))
            .then(setredirect(true))
    }
    // if(!JSON.parse(localStorage.getItem('data')).user.admin) setredirect(true)
    if(redirect) return <Navigate to='/dashboard' />
    return(
        <>
            <Header current={'Add Stations'} setuser={setuser}/>

        <div className='formContainer'>
                
                <form onSubmit={handleSubmit} className='grid'>
                <div className="label">Enter the Name of the Station:</div>
                    <input type='text' name='name' onChange={handleChange} placeholder={'enter your password'} />
                    <input type='submit' />

                </form>
        </div>
        </>
    )
}
export default AddStation