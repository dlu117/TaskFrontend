import React from "react";
import { Button } from "@material-ui/core";
import Header from './Components/Header';
import {Footer} from './Components/Footer';
import { Route, Routes} from 'react-router';
import {SubmitPage} from './Pages/Submit';
import {HomePage} from './Pages/Home';
import { LogoffPage } from "./Pages/Logout";
import { LoginPage } from "./Pages/Login";


import "./App.css";

function App() {
  return (
   
    <div className="App">
    <></>
   
   
    <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/submit" element={<SubmitPage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/exit" element={<LogoffPage/>} />
    </Routes>
     <br/>
     <br/>
     <br/>
     <Footer/>
    </div>
   
  );
}

export default App;