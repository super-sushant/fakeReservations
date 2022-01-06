import React from 'react';
import {FaTrash} from 'react-icons/fa'
const  Card =({data,handleDelete})=>{
    
    return(
        <>
        <div className='card'>
        <div>
            <div><b> UID</b> </div>
            <div><b>{data.id}  </b></div>
            
            </div>

            <div> 
            <div><b> To: </b>  {data.to} </div>
            <div> <b> From:</b> {data.from}</div>
            </div>
            <div>
            <div> <b>Date: </b>  {data.date}</div>
            <div> <b>  Number of Passengers:  </b>{data.seats}</div>
            </div>
            <div onClick={()=>handleDelete(data.id)}>
                <FaTrash color='red' />
            </div>
        </div>
        </>
    )
}
export default Card