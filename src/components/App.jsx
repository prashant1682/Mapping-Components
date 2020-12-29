import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contacts) {
  // createCard fucntion is created and the information (objects) in the contacts.js is passed as custome properties.
  return (
    <Card
      key={contacts.id}
      id={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      tel={contacts.phone}
      email={contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* create a map of the contact.js and then pass it to a fucntion which will call the card componenet */}
      {contacts.map(createCard)};
    </div>
  );
}

export default App;
