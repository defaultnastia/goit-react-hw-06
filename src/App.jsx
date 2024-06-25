import { useEffect, useState } from "react";

import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";

import initialContacts from "./data/initialContacts.json";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const cachedData = window.localStorage.getItem("cachedContacts");
    return cachedData ? JSON.parse(cachedData) : initialContacts;
  });
  //PROBLEM: if json is updated, changes won't be reflected on UI till cachedContacts is in local storage. It won't be fixed till server logic is added instead of json.

  const [filter, setFilter] = useState("");

  const handleAddContact = (value) => {
    setContacts((prevValues) => [...prevValues, value]);
  };

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    window.localStorage.setItem("cachedContacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <h1>Phone Book</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <SearchBox handleFilter={handleFilter} filter={filter} />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </>
  );
};

export default App;
