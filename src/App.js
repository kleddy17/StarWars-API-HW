import React from 'react';


//React Routers
import{Route} from 'react-router-dom'

// Components imports
import Starship from './components/Starship'
import Home from './components/Home'

// CSS imports
import "./css/App.css";

const App = () => {


  
  return (
  <div className="App">
      <Route exact path ="/" component={Home}/> 
      <Route path = "/:id" component={Starship}/>

  </div>
  );
};

export default App;
