// import logo from './logo.svg';
import './App.css';
import Login from './login';
import React, { useState ,useEffect} from 'react';

function App() {
  const [count,setCount]=useState(0);
  const [name,setName]=useState("")
  return (
    <div >
     <h1>{name}</h1> 
     <p>{count}</p>
     <Login/>
    </div>
  );
}

export default App;
