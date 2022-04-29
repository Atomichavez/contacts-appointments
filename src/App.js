import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const appoDate = new Date()
  const defaultContacts = [
    {
      name: 'Atanas Dimitrov',
      phone: '07712345678',
      email: 'atanas@defaultemail.com'
    },
    {
      name: 'John Doe',
      phone: '07787654321',
      email: 'john@defaultemail.com'
    }
  ]

  const defaultAppos = [
    {
      title: 'Kickoff proyecto LabXX',
      contact: defaultContacts[0].name,
      date: appoDate.toLocaleDateString(),
      time: appoDate.toLocaleTimeString()
    },
    {
      title: 'Casas Guadalquivir REV-0',
      contact: defaultContacts[1].name,
      date: appoDate.toLocaleDateString(),
      time: appoDate.toLocaleTimeString()
    }
  ]

  const [contacts, setContacts] = useState(defaultContacts)
  const [appos, setAppos] = useState(defaultAppos)

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addContact = (contact) => {
    setContacts((prev) => [...prev, contact])
  }

  const addAppo = (appo) => {
    setAppos((prev) => [...prev, appo])
  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage addContact={addContact} contacts={contacts}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage addAppo={addAppo} appos={appos} contacts={contacts}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
