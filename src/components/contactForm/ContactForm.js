import React from "react";

export const ContactForm = ({
  handleSubmit,
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text' 
        value={name} 
        placeholder='name'
        onChange={(e) => setName(e.target.value)}/>
      <input 
        type='tel' 
        value={phone} 
        placeholder='phone'
        // pattern="^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$" 
        onChange={(e) => setPhone(e.target.value)}/>
      <input 
        type='email' 
        value={email} 
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}/>
      <button type='submit'>Add Contact</button>
    </form>
  );
};
