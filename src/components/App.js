import React from "react";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList"; 
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <AddContact></AddContact>
      <ContactList></ContactList>
    </div>
  );
}

export default App;
