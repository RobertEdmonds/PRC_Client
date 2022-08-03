import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Header from './header/Header';
import NavBar from './navbar/NavBar';
import Home from './home/Home';

function App() {
  return (
    <>
      <div className= "Header">
        <Header />
      </div>
      <br/>
      <NavBar />
      <br/>
      <Routes>
        <Route exact="true" path="/" element={<Home />}/>
      </Routes>
      {/* <header className="App-header">
      </header> */}
    </>
  );
}

export default App;
