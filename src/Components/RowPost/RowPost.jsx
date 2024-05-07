import React, { useState } from 'react'
import './RowPost.css'
import Modal from '../Modal/Modal'
function RowPost({category,array}) {
  const [details,setDetails]=useState('')
  const [showdetails,setShowDetails]=useState(false)

  const handleMovie=(movie)=>{
    setShowDetails(true)
    setDetails(movie)
  }
  // const closeModal=()=>{
  //   setShowDetails(false)
  // }
  return (
    <div className='row'>
      <h2>{category}</h2>
      <div className='posters'>
        {array.map((movie)=>{
          return(
            <>
            <img onClick={()=>handleMovie(movie)} className='poster' src={movie.poster} alt="" />
            
            </>
          )
        })}
      </div>
      {/* {details&&showdetails&&(
        
          <Modal  />
          
      )} */}
    </div>
  )
}

export default RowPost