import React, {useEffect, useState} from 'react'
import axios from 'axios'


const Starship = (props)=>{
const [starship, setStarship]= useState({})
let name = props.match.params.id

useEffect (()=> {
     axios.get('https://swapi.dev/api/starships/').then((res)=>{
         let data = res.data.results
         data.forEach((each)=>{
             if(each.name === name ){
               setStarship(each)
             }
         })
       
     })
},[])
console.log(starship)
    return ( 
    <div >
    <h2>{starship.name}</h2>
    <h2>{starship.model}</h2>
    <h2>{starship.hyperdrive_rating}</h2>
    </div>
    )
}


export default Starship





