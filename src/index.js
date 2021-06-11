import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import ContactManager from './App';

const contacts = ["Akshay (+91 9999999999)", "Ajay (+91 9111111111)", "Bruce (+91 9888888888)"];

ReactDOM.render(
    <ContactManager data={contacts} />,
  document.getElementById('root')
);

