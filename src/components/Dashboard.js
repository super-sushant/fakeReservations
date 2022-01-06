import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Navigate } from 'react-router-dom'
import Card from './Card';
import axios from 'axios';
const Dashboard = ({ user, setuser }) => {
    const [data, setdata] = useState(null)
    useEffect(() => {
        axios.get(process.env.REACT_APP_API + 'reservations'+(JSON.parse(localStorage.getItem('data')).user.admin?'':('?user='+user)))
        .then(res => setdata(res.data))
    }, [])
    const handleDelete = (id) => {
        axios.delete(process.env.REACT_APP_API + 'reservations/' + id)
        .then(setdata(data.filter((item) => item.id !== id)))
    }
    if (!user) return <Navigate to='/' />
    return (
        <>
            <Header current={'Dashboard'} setuser={setuser} />
            <div style={{ fontSize: '30px', fontWeight: 'bold' }}>   Journey History</div>
            {data ? data.map(data => <Card data={data} handleDelete={handleDelete} />) : ''}
        </>
    )
}
export default Dashboard