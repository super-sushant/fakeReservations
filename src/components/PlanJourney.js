import axios from 'axios'
import React,{useEffect, useRef,useState} from 'react';
import {Navigate} from 'react-router-dom'
import useFetch from '../useFetch';
import Header from './Header';

const PlanJourney=({user,setuser})=>{

    const [formdata,setformdata]=useState({to:'delhi',from:'delhi',user:user})
    const [redirect,setredirect]=useState(false)
    const [response,loading,hasError]=useFetch(process.env.REACT_APP_API+'stations')
    const handleChange=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }
    const handleSubmit = e =>{
        e.preventDefault()
        // Submit to backend API with Axios/fetch 
        // Implement your backend logic here. 
        if (formdata.to!==formdata.from){
        axios.post(process.env.REACT_APP_API+'reservations',formdata)
        .then(setredirect(true))
    
    }
        else{
            alert('Please Select the stations correctly')
        }
    }
    if(!user) return <Navigate to='/' />
    if(redirect) return <Navigate to='/dashboard' />
    return(
        <>
      <Header current={'Plan Journey'}  setuser={setuser}/>

            <div className='formContainer'>
                <form onSubmit={handleSubmit} className='grid' >

                    <div className="label">To:</div>

                    <select name='to'  onChange={handleChange} >
                    {loading ? <option>Loading...</option> : (hasError ? <div>Error occured.</div> : (response.map(data => <option value={data}>{data}</option>)))}
                    </select>

                    <div className="label">From:</div>

                    <select name='from' onChange={handleChange} required>
                    {loading ? <option>Loading...</option> : (hasError ? <div>Error occured.</div> : (response.map(data => <option value={data}>{data}</option>)))}
                    </select>
                    <div className="label">Select the Date:</div>
                    <input type='date' name='date' onChange={handleChange} placeholder={'Select a date'} min={new Date().toISOString().split("T")[0]} required />
                    <div className="label">Number Of Seats:</div>

                    <input type='number' name='seats' onChange={handleChange} placeholder={'Enter No. Of Seats'} min={1} required />
                    <input type='submit' value={'Book Reservation'} />
                </form>
            </div>
        </>
    )
}
export default PlanJourney