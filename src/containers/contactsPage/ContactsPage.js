import React, {useState, useEffect} from "react";
import {ContactForm} from '../../components/contactForm/ContactForm'
import {TileList} from '../../components/tileList/TileList'

export const ContactsPage = (props) => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [duplicate, setDup] = useState(false)
  const {addContact, contacts} = props
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!duplicate) {
      addContact ({
        // name: e.target[0].value,
        // phone: e.target[1].value,
        // email: e.target[2].value
        name: name,
        phone: phone,
        email: email
      })
      
      setName('')
      setPhone('')
      setEmail('')
    }
  };

  useEffect(()=>{
    if(contacts.some((contact) => contact.name === name)) {
      setDup(true)
    }
  }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          handleSubmit={handleSubmit}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}/> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts}/>
      </section>
    </div>
  );
};
