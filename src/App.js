import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import SignUp from './Components/SignUp/SignUp';
import InstantConsultation from './Components/InstantConsultation/InstantConsultation';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';
import ReviewForm from './Components/ReviewForm/ReviewForm';
import GiveReviews from './Components/GiveReviews/GiveReviews';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/InstantConsultation" element={<InstantConsultation/>}/>
      <Route path="/BookingConsultation" element={<BookingConsultation/>}/>
      <Route path="/ReviewForm" element={<ReviewForm/>}/>
      <Route path="/GiveReviews" element={<GiveReviews/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
