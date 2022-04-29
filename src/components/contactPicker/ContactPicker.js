import React from "react";

export const ContactPicker = ({contact, contacts, setContact}) => {
  return (
    <select 
      onChange={(e) => setContact(e.target.value)}>
      <option value='' disabled selected hidden>Choose a contact</option>
      {contacts.map((contact, i) => {
        return (
          <option 
            value={contact.name} 
            key={i}> 
              {contact.name}
          </option>
          )
      })}
    </select> 
  );
};
