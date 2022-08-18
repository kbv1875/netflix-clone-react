import React from 'react'
import axios from '../axios'
import { useEffect } from 'react'
import '../Banner/Banner.css'
import { useState } from 'react'
function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get('en/API/Top250Movies/k_c7ih9u4w').then((response)=>{
      console.log(response.data.items[0]);
      setMovie(response.data.items[1])
    })
    
  }, [])
  
  return (
    <div className='Banner' style={{backgroundImage:`url(${movie ? movie.image : ''})`}}>
      <h1 className='Title'>{movie ? movie.title : ""}</h1>
        <button className='button'>Play</button><button className='button'>Movie</button>
        <div>
          <h1 className='description'>{movie ? movie.crew : ""}</h1>
          </div>
          <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner