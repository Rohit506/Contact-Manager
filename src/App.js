import React, {useState} from 'react';
import './App.css';
import AddPersonForm from './components/AddPersonForm';
import PeopleList from './components/PeopleList';


const ContactManager = (props) => {

  const [contacts, setContacts] = useState(props.data);
  const addPerson = (name) => {
    setContacts([...contacts, name]);
  }
  return <>
    <div className="App">
      <div className='center-div'>
        <AddPersonForm handleSubmit={addPerson} />
        <PeopleList data={contacts} />
      </div>    
    </div>
  </>
};

export default ContactManager;
