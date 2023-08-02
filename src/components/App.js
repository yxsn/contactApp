import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList"; 
import './App.css';

function App() {
  const contacts = [
    {
      id:"1",
      name: "Yasin",
      email:"yasin123@gmail.com",
      mobile:"9846272784",
    },
    {
      id:"2",
      name: "Muhammed",
      email:"muhammed123@gmail.com",
      mobile:"8746273683",
    }
  ]
  return (
    <div className="uicontainer">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
