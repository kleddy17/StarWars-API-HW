import React from 'react'
import{Link} from 'react-router-dom'


function Starshiplist(props) {
      
    const display = () =>{
        return props.starship.map((ship)=> (
          <div key={ship.name} className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{ship.name}</span>
                <p>{ship.model}</p>
              </div>
              <div className="card-action">
               <Link to={ `/${ship.name}`}>
                <h2>Starship Details</h2>
               </Link> 
              </div>
            </div>
          </div>
      
        ))}
    return (<div className ="container">
    <h2>Starship</h2>
    <div className = "row">{props.starship.length >0 ? display() : null}
  </div>
  </div>
  )
}

export default Starshiplist
