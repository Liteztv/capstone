import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
