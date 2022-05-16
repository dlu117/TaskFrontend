import React from "react";
import { Button } from "@material-ui/core";
import Header from './Components/Header';
import {Footer} from './Components/Footer';
import "./App.css";
import { Route, Routes} from 'react-router';
import {SubmitPage} from './Pages/Submit';
import {HomePage} from './Pages/Home';


function App() {
  return (
   
    <div className="App">
    <></>
    <Header/>
   
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/submit" element={<SubmitPage/>} />
        <Route path="/home" element={<HomePage/>} />
      </Routes>
     <Footer/>
    </div>
   
  );
}

export default App;