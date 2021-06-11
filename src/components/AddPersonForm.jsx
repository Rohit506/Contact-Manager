import React, { useState } from 'react';

const AddPersonForm = (props) => {
    const [ person, setPerson ] = useState("");
    
   function handleChange(e) {
    setPerson(e.target.value);
  }
    
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(person);
    alert(person+" is added")
    setPerson('');
  }
  return <>
    <form onSubmit={handleSubmit}>
        <h1><b>Contact Manager</b></h1>
        <input type="text" placeholder="Add New Contact" onChange={handleChange} value={person}></input>
        <button type="submit">Add</button>
    </form>
  </>
}
export default AddPersonForm;