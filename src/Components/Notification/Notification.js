import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('name');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));
    const storedAppointmentDate = JSON.parse(localStorage.getItem('date'));
    const storedAppointmentTime = JSON.parse(localStorage.getItem('time'));



    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
    if (storedAppointmentDate){
        setAppointmentDate(storedAppointmentDate);
    }
    if (storedAppointmentTime){
        setAppointmentTime(storedAppointmentTime);
    }
  }, []);
  return (
    <div>
      <Navbar ></Navbar>
      {children}
      {isLoggedIn && appointmentData && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                <strong>Doctor:</strong> {doctorData?.name}
                <strong>Name:</strong> {username}
                <strong>Date of Appointment:</strong>{appointmentDate}
                <strong>Time of Appointment:</strong> {appointmentTime}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;