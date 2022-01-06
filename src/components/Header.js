import React, { useState } from 'react';
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Header = ({ current ,setuser}) => {
    const [open,setopen] = useState(false)
    const data = JSON.parse(localStorage.getItem('data'))
    const logout=()=>{
        localStorage.removeItem('data')
        setuser(0)
    }
    return (
        <>
        
            <div style={{ alignItems:'center' , minWidth: '100%', minHeight: '15vh', backgroundColor: 'gold', color: 'black', display: 'flex', justifyContent: 'space-between', fontSize: '30px' }}>
                <span>
                    <span onClick={()=>setopen(!open)}>
                    <FaBars/>
                    </span>
                    Fake Reservation</span>
                <span>{current}</span>
                <div>
                    <div>
                        {data?
                        <div>
                            <div>{data.user.email }</div>
                        <button onClick={logout}>
                            Logout?
                        </button>
                    </div>: 'Please Login'}
                    </div>
                    
                </div>
                
            </div>
            <div className={open?'open':'closed'}>
                <div className='linkbox'>
                <Link to='/dashboard' >Dashboard</Link>

                </div>
                <div className='linkbox'>
                    {data?data.user.admin?(<Link to='/addstation' >Add a new Station</Link>):(<Link to='/plan' >Plan a Journey</Link>):''}

                </div>
            </div>
            </>
        
    )
}
export default Header