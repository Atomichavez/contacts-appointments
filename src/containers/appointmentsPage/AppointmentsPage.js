import React, {useState, useEffect} from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import {TileList} from '../../components/tileList/TileList' 

export const AppointmentsPage = ({addAppo, appos, contacts}) => {

  const [title, setTitle] =useState('')
  const [contact, setContact] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [duplicate, setDup] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicate) {
      addAppo({
        title: title,
        contact: contact,
        date: date,
        time: time
      })
    }
    setTitle('')
    setContact('')
    setDate('')
    setTime('')
  };

  useEffect(() => {
    if(appos.some((appo) => appo.title === title)) {
      setDup(true)
      console.log('useEffect AppointmentsPage set to TRUE')
    }
  }, [title])

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contact={contact}
          setContact={setContact}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appos}/>
      </section>
    </div>
  );
};
