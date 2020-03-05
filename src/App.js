import React from 'react';
import logo from './logo.svg';
import './App.css';
import {} from "react-materialize"
import Student from "./Container/Student"
import {connect} from "react-redux"


function App() {
  return (
    <div>
      <p>{this.props.ctr}</p>
    <h1>im app component</h1>
    <Student/>

    <form action="#">
    <p>
      <label>
        <input type="checkbox" />
        <span>Red</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" checked="checked" />
        <span>Yellow</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" class="filled-in" checked="checked" />
        <span>Filled in</span>
      </label>
    </p>
    <p>
      <label>
        <input id="indeterminate-checkbox" type="checkbox" />
        <span>Indeterminate Style</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" checked="checked" disabled="disabled" />
        <span>Green</span>
      </label>
    </p>
    <p>
      <label>
        <input type="checkbox" disabled="disabled" />
        <span>Brown</span>
      </label>
    </p>
  </form>
  
    </div>
  );
}
let mapStateToPros=(state)=>{

  return{
    ctr:state.counter
    // id:state.id,
    // name:state.name,
    // Branch:state.Branch
  }
}



export default connect(mapStateToPros)(App);
