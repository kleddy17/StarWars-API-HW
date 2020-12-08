import React from "react";
import ReactDOM from "react-dom";

//React Router
import {BrowserRouter, Switch} from 'react-router-dom'


// Components imports
import App from "./App";

// CSS imports
import "./css/index.css";

//BrowerRouter=>Switch=>App
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
    <App/> 
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);