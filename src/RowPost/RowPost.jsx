import React,{useEffect,useState} from 'react'
import '../RowPost/RowPost.css'
import axios from '../axios'




function RowPost() {
  const[movies,setMovies]=useState([])
  useEffect(() => {
    axios.get('en/API/InTheaters/k_c7ih9u4w').then(response=>{
      console.log(response.data.items[0]);
      setMovies(response.data.items[0])
    })
  }, [])
  
  
  return (
    <div className='row'>
        <h2>In Theatres</h2>
        <div className='posters'>
          {
            movies.map((obj)=>
              <img className='poster' src={`${'en/API/InTheaters/k_c7ih9u4w'+obj.image}`} alt="" />
         

            )
          }
           
        </div>
        </div>
        
   
        )
}

export default RowPost