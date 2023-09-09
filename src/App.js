import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [excuseRes, setExcuseRes] = useState(null);

  const fetchData = (category) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`).then((res) => {
      setExcuseRes(res.data[0]);
    });
    
  };

  return (
    <div className="App">
      <h1>Click to print execuses based on the Reasons</h1>
      <button onClick={() => {fetchData("party")}}>Party</button>
      <button onClick={() => {fetchData("family")}}>Family</button>
      <button onClick={() => {fetchData("office")}}>Office</button>
      <button onClick={() => {fetchData("children")}}>Children</button>
      <h1 style={{color:'green'}}> Excuse: {excuseRes?.excuse}</h1>
    </div>
  );
}

export default App;
