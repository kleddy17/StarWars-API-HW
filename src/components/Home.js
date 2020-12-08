import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Starshiplist from './Starshiplist'

const Home = () => {
    const [starship, setStarship] = useState([])


    useEffect(()=>{
      axios.get('https://swapi.dev/api/starships/')
      .then((res)=>{
      
        setStarship(res.data.results)
    })
    
    },[])

  
  return (
<div className ="container">
    <Starshiplist starship={starship}/>
</div>
  )
  };

  
  export default Home;